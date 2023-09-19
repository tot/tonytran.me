"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { BiRightArrowAlt } from "react-icons/bi"

const AllPostsButton = () => {
   const [isHover, setHover] = useState(false)
   return (
      <div className="">
         <Link href="/blog">
            <motion.button
               className="flex h-10 items-center justify-center rounded border-neutral-800 px-3 font-sans text-base text-neutral-300 shadow transition-colors duration-150 hover:bg-neutral-700/25 focus:bg-neutral-700/15"
               type="button"
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
               whileTap={{ scale: 0.95 }}
            >
               <span className="text-sm font-medium">All posts</span>
               <motion.div animate={{ x: isHover ? 4 : 0 }}>
                  <BiRightArrowAlt className="ml-1 text-xl" />
               </motion.div>
            </motion.button>
         </Link>
      </div>
   )
}

export default AllPostsButton
