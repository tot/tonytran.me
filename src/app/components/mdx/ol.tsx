import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const ol = ({ className, children }: HTMLProps<HTMLOListElement>) => {
   return (
      <ol className={cn("my-4 list-inside list-decimal", className)}>
         {children}
      </ol>
   )
}

export default ol
