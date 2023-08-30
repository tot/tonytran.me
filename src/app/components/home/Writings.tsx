import { motion } from "framer-motion"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"
import RecentArticle from "./RecentArticle"
import Section from "./Section"
import { useState } from "react"

const RECENT_ARTICLES = [
   {
      title: "Article name",
      preview:
         "Etiam id placerat ex. Integer tempus elit finibus neque condimentum, at aliquet arcu tristique. Pellentesque non velit vel lectus posuere egestas convallis eget erat.",
      slug: "article-one",
      date: "Aug 28, 2023",
   },
   {
      title: "Article name 2",
      preview:
         "Etiam id placerat ex. Integer tempus elit finibus neque condimentum, at aliquet arcu tristique. Pellentesque non velit vel lectus posuere egestas convallis eget erat.",
      slug: "article-two",
      date: "Aug 28, 2023",
   },
   {
      title: "Article name 3",
      preview:
         "Etiam id placerat ex. Integer tempus elit finibus neque condimentum, at aliquet arcu tristique. Pellentesque non velit vel lectus posuere egestas convallis eget erat.",
      slug: "article-one",
      date: "Aug 28, 2023",
   },
   {
      title: "Article name 4",
      preview:
         "Etiam id placerat ex. Integer tempus elit finibus neque condimentum, at aliquet arcu tristique. Pellentesque non velit vel lectus posuere egestas convallis eget erat.",
      slug: "article-one",
      date: "Aug 28, 2023",
   },
]

const Writings = () => {
   const [isHover, setHover] = useState(false)
   return (
      <Section>
         <span className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold text-white">Recent Writings</h1>
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
         <div className="mt-6 divide-y divide-neutral-700/50 overflow-hidden rounded-lg text-neutral-200">
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
