import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const h3 = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div
         className={cn(
            "pt-4 font-sans text-lg font-semibold text-neutral-100 md:text-xl",
            props.className
         )}
         {...props}
      />
   )
}

export default h3
