"use client"

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
      <motion.a
         href={url}
         target="_blank"
         whileTap={{ scale: 0.95 }}
         whileHover={{ scale: 1.05 }}
      >
         <div
            className={cn(
               "relative flex h-full flex-col justify-between rounded-lg border border-neutral-700/50 bg-[#0c0b0b] bg-gradient-to-br from-transparent p-4 shadow shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] transition-colors duration-150 hover:bg-[#19181a]",
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
               <time className={cn("font-sans text-sm font-medium", dateColor)}>
                  {year}
               </time>
               <p className="mt-2 font-general-sans text-lg font-medium leading-8 tracking-wide text-neutral-100">
                  {title}
               </p>
               <p className="font-sans text-base leading-6 text-neutral-400">
                  {description}
               </p>
            </div>
         </div>
      </motion.a>
   )
}

export default ProjectCard
