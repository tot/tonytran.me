import { cn } from "@utils/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { BiUpArrowAlt } from "react-icons/bi"

interface ProjectCardProps {
   year: string
   title: string
   description: string
   url: string
   dateColor: string
   bgColor: string
}

const ProjectCard = ({
   year,
   title,
   description,
   url,
   dateColor,
   bgColor,
}: ProjectCardProps) => {
   const [isHover, setHover] = useState(false)
   return (
      <a href={url} target="_blank">
         <div
            className={cn(
               "relative flex h-full flex-col justify-between rounded-lg border border-neutral-700/50 bg-gradient-to-br from-transparent p-4 shadow transition-colors duration-150 hover:bg-neutral-800/25",
               bgColor
            )}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onTouchStart={() => setHover(true)}
            onTouchEnd={() => setHover(false)}
         >
            {/* Hover with mouse, cursor becomes corner arrow open link icon */}
            <motion.div
               animate={{ x: isHover ? 4 : 0, y: isHover ? -4 : 0 }}
               className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-400/10 filter backdrop-blur"
            >
               <BiUpArrowAlt className="translate h-6 w-6 rotate-45 text-white" />
            </motion.div>
            <div className="">
               <time className={cn("font-mono text-sm", dateColor)}>
                  {year}
               </time>
               <p className="font-general-sans mt-2 text-base font-bold leading-8 tracking-wide text-neutral-100">
                  {title}
               </p>
               <p className="font-sans text-sm leading-6 text-neutral-400">
                  {description}
               </p>
            </div>
         </div>
      </a>
   )
}

export default ProjectCard
