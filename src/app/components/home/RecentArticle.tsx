import { AnimatePresence, motion, useCycle } from "framer-motion"
import Link from "next/link"

interface RecentArticleProps {
   title: string
   preview: string
   slug: string
   date: string
}

const RecentArticle = ({ title, preview, slug, date }: RecentArticleProps) => {
   const [isHover, toggleHover] = useCycle(false, true)
   return (
      <motion.div
         onMouseEnter={() => toggleHover()}
         onMouseLeave={() => toggleHover()}
         whileTap={{ scale: 0.95 }}
      >
         <Link href={slug}>
            <div className="relative w-full gap-4 p-4">
               <div className="col-span-4">
                  <time className="font-mono text-sm font-semibold text-indigo-500">
                     {date}
                  </time>
                  <h3 className="mt-2 font-general-sans text-base font-bold leading-8 tracking-wide text-neutral-100">
                     {title}
                  </h3>
                  <p className="font-sans text-sm leading-6 text-neutral-400">
                     {preview}
                  </p>
               </div>
               <AnimatePresence>
                  {isHover && (
                     <motion.div
                        className="absolute left-0 top-0 -z-10 h-full rounded-lg bg-neutral-800/40 bg-gradient-to-r from-transparent to-neutral-700/20 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                     />
                  )}
               </AnimatePresence>
            </div>
         </Link>
      </motion.div>
   )
}

export default RecentArticle
