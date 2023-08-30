import { motion } from "framer-motion"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"
import RecentArticle from "./RecentArticle"
import Section from "./Section"
import { useState } from "react"

const RECENT_ARTICLES = [
   {
      title: "Article name",
      slug: "article-one",
      date: "Aug 28, 2023",
   },
   {
      title: "Article name 2",
      slug: "article-two",
      date: "Aug 28, 2023",
   },
   {
      title: "Article name 3",
      slug: "article-one",
      date: "Aug 28, 2023",
   },
   {
      title: "Article name 4",
      slug: "article-one",
      date: "Aug 28, 2023",
   },
]

const Writings = () => {
   const [isHover, setHover] = useState(false)
   return (
      <Section>
         <span className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold text-white">Writings</h1>
            <div className="">
               <Link href="">
                  <button
                     className="flex h-10 items-center justify-center rounded border border-neutral-800 px-3 text-base text-neutral-100 transition-colors duration-150 hover:bg-neutral-700/25"
                     type="button"
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                  >
                     <span className="text-sm font-medium">All posts</span>
                     <motion.div animate={{ x: isHover ? 4 : 0 }}>
                        <BiRightArrowAlt className="ml-1 text-xl" />
                     </motion.div>
                  </button>
               </Link>
            </div>
         </span>
         <div className="mt-6 divide-y-2 divide-neutral-800/25 overflow-hidden rounded-lg text-neutral-200">
            {RECENT_ARTICLES.map((article) => (
               <div key={article.slug}>
                  <RecentArticle key={article.slug} {...article} />
               </div>
            ))}
         </div>
      </Section>
   )
}

export default Writings
