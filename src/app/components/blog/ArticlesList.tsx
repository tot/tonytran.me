import { Post } from "contentlayer/generated"
import ArticleCard from "./ArticleCard"

interface ArticlesListProps {
   articles: Post[]
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
   return (
      <div className="space-y-4">
         {articles.length > 0 ? (
            articles.map((article, idx) => (
               <ArticleCard key={idx} {...article} />
            ))
         ) : (
            <p className="text-center font-sans text-base text-neutral-500">
               No articles yet.
            </p>
         )}
      </div>
   )
}

export default ArticlesList
