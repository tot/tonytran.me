"use client"

import { formatDate } from "@utils/utils"
import { parseISO } from "date-fns"
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
      <Link href={url} className="grid grid-cols-1 gap-6 md:grid-cols-4">
         <div className="col-span-1 h-32 bg-neutral-700">dd</div>
         <div className="group col-span-1 w-full border-neutral-700/75 font-sans md:col-span-3">
            <div className="mb-2 flex items-center space-x-2 font-mono text-sm font-semibold text-indigo-500">
               <time dateTime={publishedDate} className="">
                  {formatDate(date)}
               </time>
               <span className="">&bull;</span>
               <p className="">{readingTime}</p>
            </div>
            <h2 className="font-general-sans text-lg font-bold leading-8 tracking-wide text-neutral-100 group-hover:underline">
               {title}
            </h2>
            <p className="font-sans text-sm leading-6 text-neutral-400">
               {description}
            </p>
         </div>
      </Link>
   )
}

export default ArticleCard
