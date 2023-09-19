"use client"

import { formatDate } from "@utils/utils"
import { parseISO } from "date-fns"
import { AnimatePresence, motion, useCycle } from "framer-motion"
import Link from "next/link"
import { BiCalendarAlt, BiTime } from "react-icons/bi"

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
   const [isHover, setHover] = useCycle(false, true)

   return (
      <motion.div onHoverStart={() => setHover()} onHoverEnd={() => setHover()}>
         <Link href={url} className="">
            <div className="group relative w-full font-sans">
               <div className="">
                  <div className="">
                     <div className="relative w-fit">
                        <h2 className="font-general-sans text-lg font-medium leading-8 tracking-wide text-neutral-200">
                           {title}
                        </h2>
                        <AnimatePresence>
                           {isHover && (
                              <motion.div
                                 className="absolute bottom-0 left-0 h-px w-full bg-neutral-100"
                                 initial={{ width: 0 }}
                                 animate={{ width: "100%" }}
                                 exit={{ width: 0 }}
                              />
                           )}
                        </AnimatePresence>
                     </div>
                     <p className="pt-1 font-sans text-sm leading-6 text-neutral-400">
                        {description}
                     </p>
                  </div>
                  <div className="flex items-center space-x-1 pt-2">
                     <div className="flex items-center space-x-2 pt-2">
                        <div className="flex w-fit items-center space-x-1 rounded-lg border border-neutral-700/40 bg-neutral-800/30 px-2 py-1 font-sans text-xs font-medium text-neutral-400/80">
                           <BiCalendarAlt className="h-3 w-3" />
                           <time className="">{formatDate(date)}</time>
                        </div>
                        <div className="flex w-fit items-center space-x-1 rounded-lg border border-neutral-700/40 bg-neutral-800/30 px-2 py-1 font-sans text-xs font-medium text-neutral-400/80">
                           <BiTime className="h-3 w-3" />
                           <p className="">{readingTime}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </motion.div>
   )
}

export default ArticleCard
