import { z } from "astro:content";
import { IMAGE_SIZES } from "../constants/image";

// Create a union type from the IMAGE_SIZES.FIXED keys
const imageSizeEnum = z.enum(
    Object.keys(IMAGE_SIZES.FIXED) as [string, ...string[]],
);

// Schema for image metadata
export const imageMetadataSchema = z.object({
    images: z.array(
        z.object({
            filename: z.string(),
            alt: z.string(),
            caption: z.string(),
            order: z.number(),
            size: imageSizeEnum.optional(),
        }),
    ),
});

// Export the type for use elsewhere
export type ImageMetadataSchemaType = z.infer<typeof imageMetadataSchema>;
