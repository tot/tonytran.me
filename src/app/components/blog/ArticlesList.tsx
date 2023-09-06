"use client"

import { Post } from "contentlayer/generated"
import { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"

interface ArticlesListProps {
   articles: Post[]
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
   const [activeItem, setActiveItem] = useState<string>("")

   useEffect(() => {
      const handleResize = () => {
         setActiveItem("")
      }

      window.addEventListener("resize", handleResize)
      return () => {
         window.removeEventListener("resize", handleResize)
      }
   })
   return (
      <div className="space-y-2" onMouseLeave={() => setActiveItem("")}>
         {articles.map((article, idx) => (
            <ArticleCard
               key={idx}
               {...article}
               activeItem={activeItem}
               setActiveItem={(item: string) => setActiveItem(item)}
            />
         ))}
      </div>
   )
}

export default ArticlesList
