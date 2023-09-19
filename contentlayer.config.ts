import { makeSource, defineDocumentType } from "contentlayer/source-files"
import readingTime from "reading-time"
import rehypePrettyCode, {
   type Options as PrettyCodeOptions,
} from "rehype-pretty-code"
import { fileURLToPath } from "node:url"
import path from "path"
import fs from "fs"
import remarkGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
   name: "Post",
   filePathPattern: `**/*.mdx`,
   contentType: "mdx",
   fields: {
      title: { type: "string", required: true },
      description: {
         type: "string",
         required: true,
      },
      publishedDate: { type: "date", required: true },
      revisedDate: { type: "date", required: false },
   },
   computedFields: {
      url: {
         type: "string",
         resolve: (post) => `/blog/${post._raw.flattenedPath}`,
      },
      readingTime: {
         type: "json",
         resolve: (doc) => readingTime(doc.body.raw).text,
      },
      wordCount: {
         type: "number",
         resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
      },
   },
}))

export default makeSource({
   contentDirPath: `posts/published`,
   documentTypes: [Post],
   disableImportAliasWarning: true,
   mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
         [
            rehypePrettyCode,
            {
               keepBackground: false,
               theme: JSON.parse(
                  fs.readFileSync(
                     path.join(
                        path.dirname(fileURLToPath(import.meta.url)),
                        "..",
                        "..",
                        "..",
                        "src",
                        "app",
                        "themes",
                        "moonlight-ii.json"
                     ),
                     "utf-8"
                  )
               ),
               onVisitLine(node) {
                  // Prevent lines from collapsing in `display: grid` mode, and
                  // allow empty lines to be copy/pasted
                  if (node.children.length === 0) {
                     node.children = [{ type: "text", value: " " }]
                  }
               },
               tokensMap: {
                  fn: "entity.name",
                  type: "entity.name",
                  prop: "entity.name",
                  const: "variable.other.constant",
               },
            } satisfies Partial<PrettyCodeOptions>,
         ],
      ],
   },
})
