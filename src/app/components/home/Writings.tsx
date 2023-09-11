import { motion } from "framer-motion"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"
import Section from "./Section"
import { useState } from "react"
import Heading from "./Heading"
import { allPosts as allArticles } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import _ from "lodash"
import ArticlesList from "../blog/ArticlesList"

const AllPostsButton = () => {
   const [isHover, setHover] = useState(false)
   return (
      <div className="">
         <Link href="">
            <motion.button
               className="flex h-10 items-center justify-center rounded border-neutral-800 px-3 font-sans text-base text-neutral-300 shadow transition-colors duration-150 hover:bg-neutral-700/25 focus:bg-neutral-700/15"
               type="button"
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
               whileTap={{ scale: 0.9 }}
            >
               <span className="text-sm font-medium">All posts</span>
               <motion.div animate={{ x: isHover ? 4 : 0 }}>
                  <BiRightArrowAlt className="ml-1 text-xl" />
               </motion.div>
            </motion.button>
         </Link>
      </div>
   )
}

const Writings = () => {
   const articles = _.take(
      allArticles.sort((a, b) =>
         compareDesc(new Date(a.publishedDate), new Date(b.publishedDate))
      ),
      5
   )

   return (
      <Section>
         <span className="items-baseline justify-between md:flex">
            <Heading>Recent Articles</Heading>
            <div className="hidden md:block">
               <AllPostsButton />
            </div>
         </span>
         <section className="mt-4">
            <ArticlesList articles={articles} />
         </section>
         <div className="mt-6 flex justify-center md:hidden">
            <AllPostsButton />
         </div>
      </Section>
   )
}

export default Writings
