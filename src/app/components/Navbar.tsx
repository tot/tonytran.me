"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@utils/utils"
import { motion } from "framer-motion"

const LINKS = [
   {
      name: "Home",
      slug: "/",
   },
   {
      name: "About",
      slug: "/about",
   },
   {
      name: "Blog",
      slug: "/blog",
   },
   {
      name: "Photos",
      slug: "/photos",
   },
]

const Navbar = () => {
   let currentRoute = usePathname() || "/"

   if (currentRoute.includes("/blog/")) currentRoute = "/blog"

   return (
      <nav className="sticky top-4 z-50 mx-auto mt-4 w-fit items-center justify-between rounded-full border border-neutral-700/75 bg-neutral-800/50 px-2 py-2 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] shadow-md filter backdrop-blur-md md:top-10 md:mt-10 md:flex">
         <ul className="flex items-center space-x-2 font-sans text-sm">
            {LINKS.map(({ name, slug }) => (
               <Link key={name} href={slug}>
                  <motion.li
                     className={cn(
                        "relative rounded-full px-3 py-1 font-medium transition-colors duration-200 hover:text-neutral-100",
                        {
                           "text-neutral-100": currentRoute === slug,
                           "text-neutral-400": currentRoute !== slug,
                        }
                     )}
                     whileTap={{ scale: 0.9 }}
                  >
                     <span>{name}</span>
                     {slug === currentRoute && (
                        <motion.div
                           className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-full bg-neutral-700/40 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] filter backdrop-blur"
                           layoutId="navbar"
                           aria-hidden="true"
                           transition={{
                              type: "spring",
                              duration: 0.75,
                           }}
                        />
                     )}
                  </motion.li>
               </Link>
            ))}
         </ul>
      </nav>
   )
}

export default Navbar
