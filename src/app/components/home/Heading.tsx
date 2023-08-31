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
            "font-general-sans text-3xl font-bold tracking-wide text-neutral-100",
            className
         )}
      >
         {children}
      </h1>
   )
}

export default Heading
