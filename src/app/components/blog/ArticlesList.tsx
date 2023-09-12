import { Post } from "contentlayer/generated"
import ArticleCard from "./ArticleCard"

interface ArticlesListProps {
   articles: Post[]
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
   return (
      <div className="space-y-4">
         {articles.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
         ))}
      </div>
   )
}

export default ArticlesList
