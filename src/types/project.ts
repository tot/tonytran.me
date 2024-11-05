import type { CollectionEntry } from "astro:content";
import { IMAGE_SIZES } from "../constants/image";

export type ProjectCollection = CollectionEntry<"projects">;

export type Project = ProjectCollection;

export type ImageInfo = {
    filename: string;
    alt: string;
    caption?: string;
    order: number;
    size?: (typeof IMAGE_SIZES)[keyof typeof IMAGE_SIZES];
};
