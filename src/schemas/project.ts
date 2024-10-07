import { z } from "astro:content";

export const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(true),
    type: z.enum(["Frontend", "Backend", "Fullstack", "Design"]),
});
