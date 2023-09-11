"use client"

import { format, parseISO } from "date-fns"
import { ReactNode } from "react"

interface ArticleProps {
   title: string
   publishedDate: string
   revisedDate?: string
   readingTime: string
   children: ReactNode
}

const Article = ({
   title,
   publishedDate,
   revisedDate,
   readingTime,
   children,
}: ArticleProps) => {
   return (
      <div className="pt-8 md:pt-24 lg:pt-0">
         <div className="">
            <h1 className="leading-12 font-general-sans text-3xl font-bold tracking-wide text-neutral-100">
               {title}
            </h1>
            <p className="mt-4 font-sans text-base font-medium text-neutral-400/80">
               {format(parseISO(publishedDate), "MMMM do, yyyy")}
               {revisedDate ? (
                  <span>
                     <span className="px-2">&bull;</span>
                     Updated {format(parseISO(revisedDate), "MMMM do, yyyy")}
                  </span>
               ) : null}
               <span>
                  <span className="px-2">&bull;</span>
                  {readingTime}
               </span>
            </p>
         </div>
         <div className="my-8 h-px w-full bg-neutral-700/50" />
         <article className="mb-8 font-sans text-neutral-300">
            {children}
         </article>
      </div>
   )
}

export default Article
