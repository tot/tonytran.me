import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const blockquote = (props: HTMLProps<HTMLUnknownElement>) => {
   return (
      <strong className={cn("font-bold text-neutral-200", props.className)}>
         {props.children}
      </strong>
   )
}

export default blockquote
