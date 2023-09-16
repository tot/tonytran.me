import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const h1 = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div
         className={cn(
            "pt-4 font-sans text-2xl font-bold text-neutral-100 md:text-3xl",
            props.className
         )}
         {...props}
      />
   )
}

export default h1
