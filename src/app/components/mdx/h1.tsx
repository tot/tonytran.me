import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const h1 = (props: HTMLProps<HTMLParagraphElement>) => {
   return (
      <div
         className={cn(
            "py-2 font-sans text-2xl font-bold text-neutral-100",
            props.className
         )}
         {...props}
      />
   )
}

export default h1
