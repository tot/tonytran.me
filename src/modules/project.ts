import type { ImageInfo } from "../types/project";
import { getCollection } from "astro:content";

// Helper function to clean filenames - strip query params and get base name
const cleanImageFilename = (filename: string): string => {
    // Remove query parameters and get base filename
    const baseFilename = filename.split("?")[0].split("/").pop() ?? "";

    // Handle Astro's production build hashes (e.g., "Tasks.BTXmyfLl.jpg" -> "Tasks.jpg")
    const parts = baseFilename.split(".");
    if (parts.length === 3) {
        // If we have 3 parts (name.hash.ext), remove the hash
        return `${parts[0]}.${parts[2]}`;
    }

    // Handle development case or already clean filename
    return baseFilename;
};

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

        // Create a Map to store unique images by their base filename
        const uniqueImages = new Map<
            string,
            { path: string; module: (typeof images)[string] }
        >();

        // Group images by their base filename, keeping only the first occurrence
        Object.entries(images).forEach(([path, module]) => {
            const baseFilename = cleanImageFilename(path);
            if (!uniqueImages.has(baseFilename)) {
                uniqueImages.set(baseFilename, { path, module });
            }
        });

        // 3. Resolve image promises and combine with metadata
        const resolvedImages = await Promise.all(
            Array.from(uniqueImages.values()).map(async ({ path, module }) => {
                const mod = await module();
                const filename = cleanImageFilename(mod.default.src);

                // Find matching metadata
                const imageMetadata = metadata.data.images.find(
                    (img) => cleanImageFilename(img.filename) === filename,
                );

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
                        filename: cleanImageFilename(img.src),
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
