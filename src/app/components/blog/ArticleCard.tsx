"use client"

import { formatDate } from "@utils/utils"
import { parseISO } from "date-fns"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

interface ArticleCardProps {
   url: string
   title: string
   description: string
   publishedDate: string
   readingTime: string
   activeItem: string
   setActiveItem: (item: string) => void
}

const ArticleCard = ({
   url,
   title,
   description,
   publishedDate,
   readingTime,
   activeItem,
   setActiveItem,
}: ArticleCardProps) => {
   const date = parseISO(publishedDate)

   return (
      <motion.div
         onMouseEnter={() => setActiveItem(title)}
         onTouchStart={() => setActiveItem(title)}
         whileTap={{ scale: 0.95 }}
      >
         <Link href={url} className="">
            <div className="relative w-full rounded-lg border-transparent p-4 font-sans transition-colors duration-200 md:col-span-3">
               <div className="mb-2 flex items-center space-x-2 font-mono text-sm font-semibold text-indigo-500">
                  <time dateTime={publishedDate} className="">
                     {formatDate(date)}
                  </time>
                  <span className="">&bull;</span>
                  <p className="">{readingTime}</p>
               </div>
               <h2 className="font-general-sans text-lg font-bold leading-8 tracking-wide text-neutral-100">
                  {title}
               </h2>
               <p className="font-sans text-sm leading-6 text-neutral-400">
                  {description}
               </p>
               <AnimatePresence>
                  {activeItem === title && (
                     <motion.div
                        layoutId="recentArticles"
                        className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-lg bg-neutral-800/40 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                     />
                  )}
               </AnimatePresence>
            </div>
         </Link>
      </motion.div>
   )
}

export default ArticleCard
