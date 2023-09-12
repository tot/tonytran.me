import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const ul = (props: HTMLProps<HTMLUListElement>) => {
   return (
      <ol
         className={cn(
            "my-4 list-inside list-disc marker:text-neutral-500",
            props.className
         )}
      >
         {props.children}
      </ol>
   )
}

export default ul
