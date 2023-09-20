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
         whileTap={{ scale: 0.97 }}
         whileHover={{ scale: 1.03 }}
         className="transform hover:scale-105 focus:scale-95"
      >
         <div
            className={cn(
               "relative flex h-full flex-col justify-between rounded-lg border border-neutral-700/20 bg-[#0c0b0b] from-neutral-700/15 to-transparent p-4 shadow transition-colors duration-200 hover:bg-[#19181a] hover:bg-neutral-700/10 hover:bg-gradient-to-br"
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
               <BiUpArrowAlt className="translate h-6 w-6 rotate-45 text-neutral-200" />
            </motion.div>
            <div className="">
               <p className="font-general-sans text-base font-medium leading-6 tracking-wide text-neutral-200">
                  {title}
               </p>
               <p className="max-w-[calc(100%-1rem)] pt-1 font-sans text-sm leading-5 text-neutral-400">
                  {description}
               </p>
            </div>
         </div>
      </motion.a>
   )
}

export default ProjectCard
