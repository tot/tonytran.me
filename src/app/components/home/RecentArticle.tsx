import Link from "next/link"
import { FC } from "react"

interface RecentArticleProps {
   title: string
   preview: string
   slug: string
   date: string
}

const RecentArticle: FC<RecentArticleProps> = ({
   title,
   preview,
   slug,
   date,
}) => {
   return (
      <Link href={slug}>
         <div className="grid w-full grid-cols-4 from-transparent to-indigo-800/10 p-4 transition-all duration-150 hover:bg-neutral-800/20 hover:bg-gradient-to-r">
            <div className="col-span-1">
               <time className="font-mono text-indigo-500">{date}</time>
            </div>
            <div className="col-span-3">
               <h3 className="text-base font-medium leading-8 tracking-wide">
                  {title}
               </h3>
               <p className="text-sm leading-6 text-neutral-500">{preview}</p>
            </div>
         </div>
      </Link>
   )
}

export default RecentArticle
