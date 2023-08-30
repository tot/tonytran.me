import { cn } from "@/utils/utils"
import { FC, ReactNode } from "react"

interface SectionProps {
   children: ReactNode
   className?: string
}

const Section: FC<SectionProps> = ({ children, className }) => {
   return (
      <section className={cn("px-6 py-8 lg:px-8 lg:py-12", className)}>
         {children}
      </section>
   )
}

export default Section
