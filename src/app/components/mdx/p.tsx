import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

/**
 * Use div instead of p elements since p elements have restrictions on what
 * elements can be nested inside them
 */
const p = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div className={cn("py-2 text-neutral-300", props.className)}>
         {props.children}
      </div>
   )
}

export default p
