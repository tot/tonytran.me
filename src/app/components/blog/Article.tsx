import { format, parseISO } from "date-fns"
import { ReactNode } from "react"

interface ArticleProps {
   title: string
   publishedDate: string
   revisedDate?: string
   children: ReactNode
}

const Article = ({
   title,
   publishedDate,
   revisedDate,
   children,
}: ArticleProps) => {
   return (
      <div className="">
         <div className="mb-8">
            <h1 className="font-general-sans text-5xl font-bold text-neutral-100">
               {title}
            </h1>
            <p className="mt-3 font-mono text-base text-neutral-400/75">
               {format(parseISO(publishedDate), "MMMM do, yyyy")}
               {revisedDate ? (
                  <span>
                     <span className="px-2">&bull;</span>
                     Revised on {format(parseISO(revisedDate), "MMMM do, yyyy")}
                  </span>
               ) : null}
            </p>
         </div>
         <article className="font-sans text-neutral-300">{children}</article>
      </div>
   )
}

export default Article
