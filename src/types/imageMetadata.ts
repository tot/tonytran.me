import type { CollectionEntry } from "astro:content";
import type { ImageInfo } from "./project";

export interface ImageMetadataSchema {
    images: ImageInfo;
}

export type ImageMetadata = CollectionEntry<"imageMetadata">;
