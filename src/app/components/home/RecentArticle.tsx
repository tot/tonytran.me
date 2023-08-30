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
         <div className="w-full gap-4 from-transparent to-indigo-800/10 p-4 transition-all duration-150 hover:bg-neutral-800/20 hover:bg-gradient-to-r">
            <div className="col-span-4">
               <time className="font-mono text-sm font-semibold text-indigo-500">
                  {date}
               </time>
               <h3 className="mt-2 text-base font-bold leading-8 text-neutral-100">
                  {title}
               </h3>
               <p className="text-sm leading-6 text-neutral-400">{preview}</p>
            </div>
         </div>
      </Link>
   )
}

export default RecentArticle
