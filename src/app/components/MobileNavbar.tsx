import { AnimatePresence, motion, useCycle } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLink } from "@utils/types"
import { useLockBodyScroll } from "@uidotdev/usehooks"
import { cn } from "@utils/utils"
import { Pivot as Hamburger } from "hamburger-react"
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi"

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

const NavbarBody = ({ links }: MobileNavbarProps) => {
   let currentRoute = usePathname() || "/"

   if (currentRoute.includes("/blog/")) currentRoute = "/blog"

   useLockBodyScroll()

   return (
      <motion.aside
         initial={{ width: 0 }}
         animate={{
            width: "100%",
         }}
         exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
         }}
         className="fixed right-0 top-0 z-30 h-full w-full bg-[#0c0b0b]"
      >
         <div className="flex h-full flex-col justify-between bg-[#101011]">
            <motion.div
               className="space-y-2 p-6 pt-8"
               initial="closed"
               animate="open"
               exit="closed"
               variants={sideVariants}
            >
               {links.map(({ name, slug }) => (
                  <motion.div
                     key={name}
                     variants={itemVariants}
                     className={cn(
                        "block p-4 font-general-sans text-3xl font-bold",
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
   )
}

const MobileNavbar = ({ links }: MobileNavbarProps) => {
   const [isOpen, toggleOpen] = useCycle(false, true)
   return (
      <>
         <AnimatePresence>
            {isOpen && <NavbarBody links={links} />}
         </AnimatePresence>
         <button
            type="button"
            onClick={() => toggleOpen()}
            className="fixed right-6 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700/50 bg-[#131010]/40 text-white shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] filter backdrop-blur"
         >
            <Hamburger toggled={isOpen} size={20} color="#e5e7eb" />
         </button>
      </>
   )
}

export default MobileNavbar
