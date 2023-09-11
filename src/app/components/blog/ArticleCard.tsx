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
            <div className="group relative flex w-full rounded-lg border-transparent font-sans transition-colors duration-200">
               <div className="mb-2 flex w-[10rem] items-start">
                  <div className="font-sans text-sm font-medium text-neutral-400/80">
                     <time dateTime={publishedDate} className="leading-8">
                        {formatDate(date)}
                     </time>
                  </div>
               </div>
               <div className="flex flex-1 flex-col">
                  <h2 className="font-general-sans text-lg font-semibold leading-8 tracking-wide text-neutral-100 group-hover:underline">
                     {title}
                  </h2>
                  <p className="font-sans text-sm leading-6 text-neutral-400">
                     {description}
                  </p>
               </div>
            </div>
         </Link>
      </motion.div>
   )
}

export default ArticleCard
