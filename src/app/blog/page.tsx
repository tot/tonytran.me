import { compareDesc } from "date-fns"
import { allPosts } from "contentlayer/generated"
import ArticleCard from "../components/blog/ArticleCard"

export default function Blog() {
   const posts = allPosts.sort((a, b) =>
      compareDesc(new Date(a.publishedDate), new Date(b.publishedDate))
   )

   return (
      <main className="mx-auto w-full max-w-4xl">
         <section className="border-b border-neutral-700/75 pb-8">
            <h1 className="font-general-sans text-5xl font-bold text-neutral-100">
               Blog
            </h1>
            <p className="mt-4 font-sans text-lg leading-8 text-neutral-300">
               Explore the world from my shoes. Read about my journey through
               project development, technology exploration, and personal
               reflections.
            </p>
         </section>
         <section className="mt-10 space-y-8">
            {posts.map((post, idx) => (
               <div key={idx}>
                  <ArticleCard {...post} />
               </div>
            ))}
         </section>
      </main>
   )
}
