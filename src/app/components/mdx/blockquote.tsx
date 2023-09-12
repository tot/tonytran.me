import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const blockquote = (props: HTMLProps<HTMLQuoteElement>) => {
   return (
      <div className="py-2">
         <blockquote
            className={cn(
               "mdx-blockquote border-l-2 border-neutral-700 px-4 py-2 font-serif font-medium",
               props.className
            )}
         >
            {props.children}
         </blockquote>
      </div>
   )
}

export default blockquote
