import { cn } from "@utils/utils"
import { ReactNode } from "react"

interface SectionProps {
   children: ReactNode
   className?: string
}

const Section = ({ children, className }: SectionProps) => {
   return (
      <section className={cn("px-6 py-8 lg:px-8 lg:py-12", className)}>
         {children}
      </section>
   )
}

export default Section
