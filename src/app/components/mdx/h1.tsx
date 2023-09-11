import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

/**
 * Use div instead of p elements since p elements have restrictions on what
 * elements can be nested inside them
 */
const h1 = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div
         className={cn(
            "my-4 font-sans text-3xl text-neutral-300",
            props.className
         )}
         {...props}
      />
   )
}

export default h1
