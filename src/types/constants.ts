import type { LocalImageProps } from "astro:assets";

export type ImageSizes = {
    FIXED: Record<string, Pick<LocalImageProps, "width" | "height">>;
    RESPONSIVE: Record<string, Pick<LocalImageProps, "widths" | "sizes">>;
};
