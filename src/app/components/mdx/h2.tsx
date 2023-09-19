import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const h2 = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div
         className={cn(
            "pt-4 font-sans text-xl font-semibold text-neutral-100",
            props.className
         )}
         {...props}
      />
   )
}

export default h2
