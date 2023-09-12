import { AnimatePresence, motion, useCycle } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLink } from "@utils/types"
import { useLockBodyScroll } from "@uidotdev/usehooks"
import { cn } from "@utils/utils"
import { Pivot as Hamburger } from "hamburger-react"
import { BiLogoLinkedin, BiLogoGithub, BiX } from "react-icons/bi"

const SOCIALS = [
   {
      icon: <BiLogoLinkedin className="" />,
      url: "https://www.linkedin.com/in/tony-tran03/",
   },
   {
      icon: <BiLogoGithub className="" />,
      url: "https://github.com/tot",
   },
]

const itemVariants = {
   closed: {
      opacity: 0,
   },
   open: { opacity: 1 },
}

const sideVariants = {
   closed: {
      transition: {
         staggerChildren: 0.2,
         staggerDirection: -1,
      },
   },
   open: {
      transition: {
         staggerChildren: 0.2,
         staggerDirection: 1,
      },
   },
}

interface MobileNavbarProps {
   links: NavLink[]
}

interface NavbarBodyProps extends MobileNavbarProps {
   toggleOpen: () => void
}

const NavbarBody = ({ links, toggleOpen }: NavbarBodyProps) => {
   let currentRoute = usePathname() || "/"

   if (currentRoute.includes("/blog/")) currentRoute = "/blog"

   useLockBodyScroll()

   return (
      <div className="fixed z-[60] h-screen w-full bg-transparent">
         <div className="relative h-full w-full">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0, transition: { delay: 0.7, duration: 0.3 } }}
               onClick={() => toggleOpen()}
               className="h-full w-full bg-neutral-900/30 filter backdrop-blur-sm"
            />
            <motion.aside
               initial={{ width: 0 }}
               animate={{
                  width: "75%",
               }}
               exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
               }}
               className="fixed right-0 top-0 z-50 flex h-full"
            >
               <button
                  className="mr-6 mt-6 flex h-8 w-8 items-center justify-center rounded-full border-neutral-700/50 bg-[#2e2d2d]/80"
                  type="button"
                  onClick={() => toggleOpen()}
               >
                  <BiX className="h-6 w-6 text-neutral-100" />
               </button>
               <div className="flex h-full flex-1 flex-col justify-between border-l border-neutral-700/50 bg-[#101011]">
                  <motion.div
                     className="space-y-2 p-6"
                     initial="closed"
                     animate="open"
                     exit="closed"
                     transition={{ duration: 1 }}
                     variants={sideVariants}
                  >
                     {links.map(({ name, slug }) => (
                        <motion.div
                           key={name}
                           variants={itemVariants}
                           className={cn(
                              "block px-3 py-2 font-general-sans text-lg font-medium",
                              {
                                 "rounded-lg bg-neutral-800/20 bg-gradient-to-r from-neutral-700/50 to-neutral-700/25 text-neutral-100 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)]":
                                    currentRoute === slug,
                                 "text-neutral-400": currentRoute !== slug,
                              }
                           )}
                        >
                           <Link href={slug}>{name}</Link>
                        </motion.div>
                     ))}
                  </motion.div>

                  <ul className="mt-auto flex items-center space-x-4 p-6 text-3xl text-neutral-500">
                     {SOCIALS.map(({ icon, url }) => (
                        <li
                           key={url}
                           className="transition-colors duration-150 hover:text-neutral-200"
                        >
                           <Link href={url}>{icon}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </motion.aside>
         </div>
      </div>
   )
}

const MobileNavbar = ({ links }: MobileNavbarProps) => {
   const [isOpen, toggleOpen] = useCycle(false, true)
   return (
      <>
         <AnimatePresence>
            {isOpen && (
               <NavbarBody links={links} toggleOpen={() => toggleOpen()} />
            )}
         </AnimatePresence>
         <button
            type="button"
            onClick={() => toggleOpen()}
            className="sticky left-0 top-0 z-30 flex h-14 w-full items-center justify-between border-b border-neutral-700/50 bg-[#131010]/40 px-6 text-white shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] filter backdrop-blur"
         >
            <h3 className="font-general-sans text-base font-bold">
               tony&apos;s space
            </h3>
            <Hamburger toggled={isOpen} size={20} color="#e5e7eb" />
         </button>
      </>
   )
}

export default MobileNavbar
