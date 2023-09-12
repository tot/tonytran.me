import { defineDocumentType } from "contentlayer/source-files"
import { makeSource } from "contentlayer/source-remote-files"
import { spawn } from "node:child_process"
import { exists, copy } from "fs-extra"
import readingTime from "reading-time"
import { s } from "hastscript"
import rehypePrettyCode, {
   type Options as PrettyCodeOptions,
} from "rehype-pretty-code"
import { fileURLToPath } from "node:url"
import path from "path"
import fs from "fs"
import remarkGfm from "remark-gfm"

const SYNC_ASSETS_FOLDER = "./blog-posts/assets"
const PUBLIC_ASSETS_FOLDER = "./public/assets/blog"

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

const runBashCommand = (command: string) =>
   new Promise(async (resolve, reject) => {
      const child = spawn(command, [], { shell: true })

      child.stdout.setEncoding("utf8")
      child.stdout.on("data", (data) => process.stdout.write(data))
      child.stderr.setEncoding("utf8")
      child.stderr.on("data", (data) => process.stderr.write(data))

      child.on("close", function (code) {
         if (code === 0) {
            resolve(void 0)
         } else {
            reject(new Error(`Command failed with exit code ${code}`))
         }
      })
   })

const syncImages = async () => {
   try {
      await copy(SYNC_ASSETS_FOLDER, PUBLIC_ASSETS_FOLDER)
      console.log("Synced blog assets!")
   } catch (e) {
      console.error(e)
   }
}

const syncContentFromGit = async (contentDir: string) => {
   const syncRun = async () => {
      const gitUrl = `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_USER}/${process.env.REPO_NAME}.git`

      const isDirExists = await exists("blog-posts")

      try {
         if (isDirExists) {
            await runBashCommand(`cd "${contentDir}" && git pull`)
         } else {
            await runBashCommand(
               `git clone --depth 1 --single-branch ${gitUrl} ${contentDir}`
            )
         }
         await syncImages()
      } catch (e) {
         console.error(e)
      }
   }

   let wasCancelled = false
   let syncInterval: NodeJS.Timeout

   const syncLoop = async () => {
      console.log("Syncing content files from git")

      await syncRun()

      if (wasCancelled) return

      syncInterval = setTimeout(syncLoop, 1000 * 60)
   }

   // Block until the first sync is done
   await syncLoop()

   return () => {
      wasCancelled = true
      clearTimeout(syncInterval)
   }
}

export default makeSource({
   syncFiles: syncContentFromGit,
   contentDirPath: process.env.REPO_NAME as string,
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
