import { format, parseISO } from "date-fns"
import { ReactNode } from "react"
import { BiCalendarAlt, BiTime } from "react-icons/bi"

interface ArticleProps {
   title: string
   publishedDate: string
   readingTime: string
   children: ReactNode
}

const Article = ({
   title,
   publishedDate,
   readingTime,
   children,
}: ArticleProps) => {
   return (
      <>
         <div className="pt-4 md:pt-10">
            <div className="pb-4">
               <h1 className="max-w-prose font-general-sans text-3xl font-semibold tracking-wide text-neutral-100 md:!leading-[3rem]">
                  {title}
               </h1>
               <div className="flex items-center space-x-2 pt-4 font-sans text-sm font-medium text-neutral-400/80">
                  <div className="flex w-fit items-center space-x-1 rounded-lg border border-neutral-700/40 bg-neutral-800/30 px-2 py-1 font-sans font-medium text-neutral-400/80">
                     <BiCalendarAlt className="h-4 w-4" />
                     <time className="">
                        {format(parseISO(publishedDate), "LLLL d, yyyy")}
                     </time>
                  </div>
                  <div className="flex w-fit items-center space-x-1 rounded-lg border border-neutral-700/40 bg-neutral-800/30 px-2 py-1 font-sans font-medium text-neutral-400/80">
                     <BiTime className="h-4 w-4" />
                     <span className="">{readingTime}</span>
                  </div>
               </div>
            </div>
            <div className="pb-8 pt-4">
               <div className="h-px w-full bg-neutral-700/50" />
            </div>
            <article className="prose mb-8 max-w-prose font-sans">
               {children}
            </article>
         </div>
      </>
   )
}

export default Article
