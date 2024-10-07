import type { CollectionEntry } from "astro:content";

export type ProjectCollection = CollectionEntry<"projects">;

export type Project = ProjectCollection;

export type ImageInfo = {
    filename: string;
    alt: string;
    caption?: string;
    order: number;
};
