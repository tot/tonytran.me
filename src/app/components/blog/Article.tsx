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
            <h1 className="leading-12 max-w-prose font-general-sans text-3xl font-semibold tracking-wide text-neutral-100 md:text-4xl">
               {title}
            </h1>
            <p className="mt-4 font-sans text-sm font-medium text-neutral-400/80">
               <span>{format(parseISO(publishedDate), "LLLL d, yyyy")}</span>
               {revisedDate ? (
                  <span>
                     <span className="px-2">&bull;</span>
                     Updated {format(parseISO(revisedDate), "LLLL d, yyyy")}
                  </span>
               ) : null}
               <span>
                  <span className="px-2">&bull;</span>
                  {readingTime}
               </span>
            </p>
         </div>
         <div className="pb-6 pt-8">
            <div className="h-px w-full bg-neutral-700/50" />
         </div>
         <article className="prose mb-8 max-w-prose font-sans">
            {children}
         </article>
      </div>
   )
}

export default Article
