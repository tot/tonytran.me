import { defineDocumentType } from "contentlayer/source-files"
import { makeSource } from "contentlayer/source-remote-files"
import { spawn } from "node:child_process"
import { exists } from "fs-extra"

export const Post = defineDocumentType(() => ({
   name: "Post",
   filePathPattern: `**/*.md`,
   fields: {
      title: { type: "string", required: true },
      description: {
         type: "string",
         required: true,
      },
      date: { type: "date", required: true },
   },
   computedFields: {
      url: {
         type: "string",
         resolve: (post) => `/blog/${post._raw.flattenedPath}`,
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

const syncContentFromGit = async (contentDir: string) => {
   const syncRun = async () => {
      const gitUrl = `https://${process.env.GITHUB_TOKEN}@github.com/tot/blog-posts.git`

      const isDirExists = await exists("blog-posts")

      try {
         if (isDirExists) {
            await runBashCommand(`cd "${contentDir}" && git pull`)
         } else {
            await runBashCommand(
               `git clone --depth 1 --single-branch ${gitUrl} ${contentDir}`
            )
         }
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
   contentDirPath: ".",
   contentDirInclude: ["blog-posts"],
   documentTypes: [Post],
   disableImportAliasWarning: true,
})
