// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { projectSchema } from "../schemas/project";

// 2. Define your collection(s)
const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        draft: z.boolean().default(true),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    projects: projectsCollection,
};
