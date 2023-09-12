import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const ol = (props: HTMLProps<HTMLOListElement>) => {
   return (
      <ol className={cn("my-4 list-inside list-decimal", props.className)}>
         {props.children}
      </ol>
   )
}

export default ol
