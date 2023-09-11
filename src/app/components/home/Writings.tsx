import Section from "./Section"
import Heading from "./Heading"
import { allPosts as allArticles } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import _ from "lodash"
import ArticlesList from "../blog/ArticlesList"
import AllPostsButton from "./AllPostsButton"

const Writings = () => {
   const articles = _.take(
      allArticles.sort((a, b) =>
         compareDesc(new Date(a.publishedDate), new Date(b.publishedDate))
      ),
      5
   )

   return (
      <Section>
         <span className="items-baseline justify-between md:flex">
            <Heading>Recent Articles</Heading>
            <div className="hidden md:block">
               <AllPostsButton />
            </div>
         </span>
         <section className="mt-4">
            <ArticlesList articles={articles} />
         </section>
         <div className="mt-6 flex justify-center md:hidden">
            <AllPostsButton />
         </div>
      </Section>
   )
}

export default Writings
