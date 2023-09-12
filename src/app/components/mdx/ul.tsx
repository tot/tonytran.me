import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const ul = ({ className, children }: HTMLProps<HTMLUListElement>) => {
   return (
      <ol
         className={cn(
            "my-4 list-inside list-disc marker:text-neutral-500",
            className
         )}
      >
         {children}
      </ol>
   )
}

export default ul
