// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { projectSchema } from "../schemas/project";
import { imageMetadataSchema } from "../schemas/imageMetadata";

// 2. Define your collection(s)
const projectsCollection = defineCollection({
    type: "content",
    schema: projectSchema,
});

const imageMetadataCollection = defineCollection({
    type: "data",
    schema: imageMetadataSchema,
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    projects: projectsCollection,
    imageMetadata: imageMetadataCollection,
};
