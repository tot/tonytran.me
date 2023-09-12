import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const blockquote = (props: HTMLProps<HTMLQuoteElement>) => {
   return (
      <blockquote
         className={cn(
            "my-4 border-l-2 border-neutral-700 px-4 py-2 font-serif",
            props.className
         )}
         {...props}
      />
   )
}

export default blockquote
