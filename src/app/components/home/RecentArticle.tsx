import Link from "next/link"
import { FC } from "react"

interface RecentArticleProps {
   title: string
   slug: string
   date: string
}

const RecentArticle: FC<RecentArticleProps> = ({ title, slug, date }) => {
   return (
      <Link href={slug}>
         <div className="flex w-full items-center justify-between from-transparent to-indigo-800/10 p-4 transition-all duration-150 hover:bg-neutral-800/20 hover:bg-gradient-to-r">
            <h3 className="text-base font-medium">{title}</h3>
            <time className="font-mono text-indigo-500">{date}</time>
         </div>
      </Link>
   )
}

export default RecentArticle
