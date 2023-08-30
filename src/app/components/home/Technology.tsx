import { AnimatePresence, motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface TechnologyProps {
   name: string
   icon: ReactNode
   activeItem: string
   setActiveItem: (item: string) => void
}

const Technology: FC<TechnologyProps> = ({
   name,
   icon,
   activeItem,
   setActiveItem,
}) => {
   return (
      <motion.div
         onMouseEnter={() => setActiveItem(name)}
         className="flex select-none flex-col items-center justify-center p-4 text-neutral-400 hover:text-neutral-200 "
      >
         <div className="relative flex items-center justify-center text-3xl transition-colors duration-300">
            {icon}
            <AnimatePresence>
               {activeItem === name && (
                  <motion.div
                     layout="position"
                     layoutId="backgroundCircle"
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.5 }}
                     transition={{ duration: 0.25 }}
                     className="absolute h-10 w-10 rounded-full bg-neutral-500/20"
                  />
               )}
            </AnimatePresence>
         </div>
         <p className="mt-2 text-sm">{name}</p>
      </motion.div>
   )
}

export default Technology
