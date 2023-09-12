import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"

const hr = (props: HTMLProps<HTMLHRElement>) => {
   return (
      <div className=" py-4">
         <div
            className={cn("h-px w-full bg-neutral-700/50", props.className)}
         />
      </div>
   )
}

export default hr
