import { cn } from "@utils/utils"
import { ReactNode } from "react"

interface HeadingProps {
   children: ReactNode
   className?: string
}

const Heading = ({ children, className }: HeadingProps) => {
   return (
      <h1
         className={cn(
            "font-general-sans text-2xl font-bold tracking-wide text-neutral-100 md:text-3xl",
            className
         )}
      >
         {children}
      </h1>
   )
}

export default Heading
