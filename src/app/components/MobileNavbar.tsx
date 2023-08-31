import { AnimatePresence, motion, useCycle } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLink } from "@utils/types"
import { useLockBodyScroll } from "@uidotdev/usehooks"
import { cn } from "@utils/utils"
import { Pivot as Hamburger } from "hamburger-react"

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
   const currentRoute = usePathname()
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
                        "font-general-sans block p-4 text-3xl font-bold",
                        {
                           "rounded-lg bg-gradient-to-r from-[#62fde8]/10 text-[#62fde8]":
                              currentRoute === slug,
                           "text-white": currentRoute !== slug,
                        }
                     )}
                  >
                     <Link href={slug}>{name}</Link>
                  </motion.div>
               ))}
            </motion.div>

            <div className="mt-auto p-6">Socials</div>
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
            className="fixed right-6 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700/50 bg-[#131010]/40 text-white filter backdrop-blur"
         >
            <Hamburger toggled={isOpen} size={20} color="#e5e7eb" />
         </button>
      </>
   )
}

export default MobileNavbar
