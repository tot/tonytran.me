import type { ImageInfo } from "../types/project";

export const getProjectImages = async (projectId: string) => {
    // 1. List all album files from collections path
    let images = import.meta.glob<{ default: ImageMetadata }>(
        "../content/projects/**/*.{jpeg,jpg,png,webp}",
    );

    // 2. Filter images by exact projectId match
    images = Object.fromEntries(
        Object.entries(images).filter(([key]) => {
            // Extract the project folder name from the path
            const pathParts = key.split("/");
            const projectFolder = pathParts[pathParts.indexOf("_images") + 1];
            return projectFolder === projectId;
        }),
    );

    try {
        const metadataPath = `../content/projects/_images/${projectId}/metadata.json`;
        const metadata = await import(/* @vite-ignore */ metadataPath);

        // 3. Images are promises, so we need to resolve the glob promises
        const resolvedImages = await Promise.all(
            Object.values(images).map(async (image) => {
                const mod = await image();
                const filename = mod.default.src.split("/").pop() as string;

                // Find the image metadata
                const imageMetadata = metadata.images.find((img: ImageInfo) =>
                    filename.includes(img.filename),
                );

                // Debug missing metadata
                if (!imageMetadata) {
                    console.warn(`⚠️ No metadata found for image: ${filename}`);
                } else {
                    // Debug missing required properties
                    const requiredProps = [
                        "filename",
                        "alt",
                        "caption",
                        "order",
                    ];
                    const missingProps = requiredProps.filter(
                        (prop) => !imageMetadata[prop],
                    );
                    if (missingProps.length > 0) {
                        console.warn(
                            `⚠️ Image ${filename} is missing required properties: ${missingProps.join(", ")}`,
                        );
                    }
                }

                return {
                    ...mod.default,
                    ...imageMetadata,
                };
            }),
        );

        // Debug images with duplicate orders
        const orders = resolvedImages.map((img) => img.order);
        const duplicateOrders = orders.filter(
            (order, index) => orders.indexOf(order) !== index,
        );
        if (duplicateOrders.length > 0) {
            console.warn(
                `⚠️ Duplicate order numbers found: ${duplicateOrders.join(", ")}`,
            );
        }

        // 4. Sort images in order
        resolvedImages.sort((a, b) => a.order - b.order);
        return resolvedImages;
    } catch (error) {
        // If metadata.json doesn't exist, return an empty array
        console.error(`❌ Error loading metadata for ${projectId}:`, error);
        return [];
    }
};
