import { compareDesc } from "date-fns"
import { allPosts as allArticles } from "contentlayer/generated"
import ArticlesList from "../components/blog/ArticlesList"

export default function Blog() {
   const articles = allArticles.sort((a, b) =>
      compareDesc(new Date(a.publishedDate), new Date(b.publishedDate))
   )

   return (
      <main className="mx-auto w-full max-w-4xl">
         <section className="px-4">
            <h1 className="font-general-sans text-5xl font-bold text-neutral-100">
               Blog
            </h1>
            <p className="mt-4 font-sans text-lg leading-8 text-neutral-400">
               Explore the world from my shoes. Read about my journey through
               project development, technology exploration, and personal
               reflections.
            </p>
         </section>
         <div className="my-8 h-px w-full bg-neutral-700/50" />
         <ArticlesList articles={articles} />
      </main>
   )
}
