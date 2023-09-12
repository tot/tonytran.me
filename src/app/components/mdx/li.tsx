import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const li = (props: HTMLProps<HTMLLIElement>) => {
   return (
      <li className={cn("flex items-center", props.className)}>
         {props.children}
      </li>
   )
}

export default li
