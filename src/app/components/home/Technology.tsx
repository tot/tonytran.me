import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"

interface TechnologyProps {
   name: string
   icon: ReactNode
   activeItem: string
   setActiveItem: (item: string) => void
}

const Technology = ({
   name,
   icon,
   activeItem,
   setActiveItem,
}: TechnologyProps) => {
   return (
      <motion.div
         onMouseEnter={() => setActiveItem(name)}
         onTouchStart={() => setActiveItem(name)}
         onTouchEnd={() => setActiveItem("")}
         className="flex select-none flex-col items-center justify-center p-4 text-neutral-400 hover:text-neutral-200"
      >
         <div className="relative flex items-center justify-center text-3xl transition-colors duration-200">
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
                     className="absolute -z-10 h-10 w-10 rounded-full border border-neutral-700/50 bg-neutral-500/20 bg-gradient-to-b from-neutral-700/50 to-transparent shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)]"
                  />
               )}
            </AnimatePresence>
         </div>
         <p className="mt-2 font-sans text-sm transition-colors duration-200">
            {name}
         </p>
      </motion.div>
   )
}

export default Technology
