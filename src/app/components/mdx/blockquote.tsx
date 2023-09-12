import { cn } from "@/app/utils/utils"
import { HTMLProps } from "react"
import { BiSolidQuoteAltLeft } from "react-icons/bi"

const blockquote = ({ className, children }: HTMLProps<HTMLQuoteElement>) => {
   return (
      <div className="py-2">
         <blockquote
            className={cn(
               "mdx-blockquote relative border-l-2 border-neutral-700 px-8 py-4 font-serif font-medium",
               className
            )}
         >
            <div className="absolute -left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-neutral-700 bg-[#0c0b0b]">
               <BiSolidQuoteAltLeft className="h-4 w-4 text-neutral-500" />
            </div>
            {children}
         </blockquote>
      </div>
   )
}

export default blockquote
