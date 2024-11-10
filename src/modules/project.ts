import type { ImageInfo } from "../types/project";
import type { ImageMetadataSchemaType } from "../schemas/imageMetadata";
import { getCollection } from "astro:content";

export const getProjectImages = async (projectId: string) => {
    // 1. List all album files from collections path
    let images = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/projects/**/*.{jpeg,jpg,png,webp}",
    );

    // 2. Filter images by exact projectId match
    images = Object.fromEntries(
        Object.entries(images).filter(([key]) => {
            const pathParts = key.split("/");
            const projectFolder = pathParts[pathParts.indexOf("_images") + 1];
            return projectFolder === projectId;
        }),
    );

    try {
        // Get metadata from content collection
        const metadataCollection = await getCollection("imageMetadata");
        const metadata = metadataCollection.find(
            (entry) => entry.id === projectId,
        );

        if (!metadata) {
            throw new Error(`No metadata found for ${projectId}`);
        }

        // 3. Resolve image promises and combine with metadata
        const resolvedImages = await Promise.all(
            Object.values(images).map(async (image) => {
                const mod = await image();
                const filename = mod.default.src.split("/").pop() as string;

                // Use type assertion to ensure compatibility
                const imageMetadata = metadata.data.images.find(
                    (img: ImageInfo) => filename.includes(img.filename),
                ) as unknown as ImageInfo | undefined;

                if (!imageMetadata) {
                    console.warn(`⚠️ No metadata found for image: ${filename}`);
                } else {
                    const requiredProps = [
                        "filename",
                        "alt",
                        "caption",
                        "order",
                    ];
                    const missingProps = requiredProps.filter(
                        (prop) => !imageMetadata[prop as keyof ImageInfo],
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

        // Debug duplicate orders
        const orders = resolvedImages.map((img) => img.order);
        const duplicateOrders = orders.filter(
            (order, index) => orders.indexOf(order) !== index,
        );
        if (duplicateOrders.length > 0) {
            const duplicates = duplicateOrders.map((order) => {
                const dupeImages = resolvedImages
                    .filter((img) => img.order === order)
                    .map((img) => ({
                        filename: img.src.split("/").pop(),
                        order: img.order,
                    }));
                return { order, images: dupeImages };
            });

            console.warn(
                `⚠️ Duplicate order numbers found in ${projectId}:`,
                JSON.stringify(duplicates, null, 2),
            );
        }

        // 4. Sort images by order
        resolvedImages.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        return resolvedImages;
    } catch (error) {
        console.error(`❌ Error loading metadata for ${projectId}:`, error);
        return [];
    }
};
