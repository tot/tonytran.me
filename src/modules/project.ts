import type { ImageInfo } from "../types/project";

export const getProjectImages = async (projectId: string) => {
    // 1. List all album files from collections path
    let images = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/projects/**/*.{jpeg,jpg,png,webp}",
    );

    // 2. Filter images by projectId
    images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.includes(projectId)),
    );

    try {
        const metadataPath = `/src/content/projects/_images/${projectId}/metadata.json`;
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
                return {
                    ...mod.default,
                    // Add the image metadata
                    ...imageMetadata,
                };
            }),
        );

        // 4. Sort images in order
        resolvedImages.sort((a, b) => a.order - b.order);
        return resolvedImages;
    } catch (error) {
        // If metadata.json doesn't exist, return an empty array
        return [];
    }
};
