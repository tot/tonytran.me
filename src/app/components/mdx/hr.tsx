import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const hr = (props: HTMLProps<HTMLHRElement>) => {
   return (
      <div
         className={cn("my-4 h-px w-full bg-neutral-700/50", props.className)}
      />
   )
}

export default hr
