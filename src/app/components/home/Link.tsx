import { motion, useCycle } from "framer-motion"
import NextLink from "next/link"
import { ReactNode } from "react"

interface LinkProps {
   href: string
   children?: ReactNode
}

const Link = ({ href, children }: LinkProps) => {
   const [isHover, toggleHover] = useCycle(false, true)
   return (
      <motion.div
         className="relative h-full w-fit text-neutral-100"
         onMouseEnter={() => toggleHover()}
         onMouseLeave={() => toggleHover()}
      >
         <motion.div className="absolute bottom-0 -z-10 h-px w-full" />
         <span>
            <NextLink href={href}>{children}</NextLink>
         </span>
         <motion.div
            className="absolute bottom-0 -z-10 w-full bg-[#279EFF]/75"
            animate={{ height: isHover ? "100%" : 2 }}
         />
      </motion.div>
   )
}

export default Link
