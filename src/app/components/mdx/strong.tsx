import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const blockquote = ({ className, children }: HTMLProps<HTMLUnknownElement>) => {
   return (
      <strong className={cn("font-bold text-neutral-200", className)}>
         {children}
      </strong>
   )
}

export default blockquote
