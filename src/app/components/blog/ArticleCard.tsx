"use client"

import { formatDate } from "@utils/utils"
import { parseISO } from "date-fns"
import { motion } from "framer-motion"
import Link from "next/link"

interface ArticleCardProps {
   url: string
   title: string
   description: string
   publishedDate: string
   readingTime: string
}

const ArticleCard = ({
   url,
   title,
   description,
   publishedDate,
   readingTime,
}: ArticleCardProps) => {
   const date = parseISO(publishedDate)

   return (
      <motion.div whileTap={{ scale: 0.95 }}>
         <Link href={url} className="">
            <div className="relative w-full rounded-lg p-4 font-sans transition-colors duration-200 hover:bg-neutral-700/10">
               <div className="">
                  <h2 className="font-general-sans text-xl font-semibold leading-8 tracking-wide text-neutral-100">
                     {title}
                  </h2>
                  <p className="font-sans text-base leading-6 text-neutral-400">
                     {description}
                  </p>
               </div>
               <div className="flex items-center space-x-1 pt-1">
                  {/* <div className="w-fit rounded-lg font-sans text-sm font-medium text-neutral-400/80">
                     <time dateTime={publishedDate} className="leading-8">
                        {formatDate(date)}
                     </time>
                  </div>
                  <span className="text-sm text-neutral-500">&bull;</span>
                  <div className="w-fit rounded-lg font-sans text-sm font-medium text-neutral-400/80">
                     <time dateTime={publishedDate} className="leading-8">
                        {readingTime}
                     </time>
                  </div> */}
                  <div className="flex items-center space-x-2 pt-2">
                     <div className="w-fit rounded-lg border border-neutral-700/20 bg-neutral-800/10 px-1.5 font-sans text-sm font-medium text-neutral-400/80">
                        <time dateTime={publishedDate} className="leading-8">
                           {formatDate(date)}
                        </time>
                     </div>
                     <div className="w-fit rounded-lg border border-neutral-700/20 bg-neutral-800/10 px-1.5 font-sans text-sm font-medium text-neutral-400/80">
                        <time dateTime={publishedDate} className="leading-8">
                           {readingTime}
                        </time>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </motion.div>
   )
}

export default ArticleCard
