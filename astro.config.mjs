// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), mdx(), sitemap(), icon()],
    markdown: {
        remarkPlugins: [rehypeHeadingIds],
        // rehypePlugins: [
        //     rehypeSlug,
        //     [rehypeAutolinkHeadings, { behavior: "after" }],
        // ],
    },
});
