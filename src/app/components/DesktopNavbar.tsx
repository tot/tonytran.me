import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@utils/utils"
import { NavLink } from "@utils/types"
import { motion } from "framer-motion"
import { useState } from "react"

interface DesktopNavbarProps {
   links: NavLink[]
}

const DesktopNavbar = ({ links }: DesktopNavbarProps) => {
   let currentRoute = usePathname() || "/"

   if (currentRoute.includes("/blog/")) currentRoute = "/blog"

   const [hoveredRoute, setHoveredRoute] = useState(currentRoute)

   return (
      <nav className="fixed inset-x-0 top-5 z-50 mx-auto hidden w-fit items-center justify-between rounded-full border border-neutral-700/75 bg-neutral-800/50 px-2 py-2 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] shadow-md filter backdrop-blur-md md:flex lg:top-10">
         <ul className="flex items-center space-x-2 font-mono">
            {links.map(({ name, slug }) => (
               <Link
                  key={name}
                  href={slug}
                  onMouseOver={() => setHoveredRoute(slug)}
                  onMouseLeave={() => setHoveredRoute(currentRoute)}
               >
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
                     {slug === hoveredRoute && (
                        <motion.div
                           className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-full bg-gradient-to-b from-neutral-700/40 to-neutral-800/40 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] filter backdrop-blur"
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

export default DesktopNavbar
