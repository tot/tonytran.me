import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const h3 = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div
         className={cn(
            "py-2 font-sans text-lg font-semibold text-neutral-100",
            props.className
         )}
         {...props}
      />
   )
}

export default h3
