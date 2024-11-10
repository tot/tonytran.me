import type { CollectionEntry } from "astro:content";
import { IMAGE_SIZES } from "../constants/image";

export type ProjectCollection = CollectionEntry<"projects">;

export type Project = ProjectCollection;

// Get keys from IMAGE_SIZES.FIXED
type FixedImageSizeKeys = keyof typeof IMAGE_SIZES.FIXED;

export type ImageInfo = {
    filename: string;
    alt: string;
    caption?: string;
    order: number;
    size?: FixedImageSizeKeys;
};
