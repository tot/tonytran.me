import Article from "@/app/components/blog/Article"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import {
   img,
   a,
   p,
   h1,
   h2,
   h3,
   blockquote,
   ul,
   ol,
   li,
   hr,
   strong,
} from "@/app/components/mdx"
import gap from "@/app/components/mdx/gap"
import { ResolvingMetadata, Metadata } from "next"
import _ from "lodash"

export async function generateStaticParams() {
   return allPosts.map((post) => ({
      slug: post._raw.flattenedPath,
   }))
}

const articleComponents = {
   img,
   a,
   p,
   h1,
   h2,
   h3,
   blockquote,
   ul,
   ol,
   hr,
   strong,
   li,
   Gap: gap,
}

interface MetaDataProps {
   params: { slug: string }
}

export async function generateMetadata(
   { params }: MetaDataProps,
   parent: ResolvingMetadata
): Promise<Metadata> {
   return {
      title: "Tony Tran | " + _.startCase(params.slug),
   }
}

export default function Page({ params }: { params: { slug: string } }) {
   // Find the post for the current page.
   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

   // 404 if the post does not exist.
   if (!post) notFound()

   // Parse the MDX file via the useMDXComponent hook.
   const MDXContent = useMDXComponent(post.body.code)

   return (
      <div>
         <Article {...post}>
            <MDXContent components={articleComponents} />
         </Article>
      </div>
   )
}
