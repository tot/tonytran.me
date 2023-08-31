import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@utils/utils"
import { NavLink } from "@utils/types"

interface DesktopNavbarProps {
   links: NavLink[]
}

const DesktopNavbar = ({ links }: DesktopNavbarProps) => {
   const currentRoute = usePathname()

   return (
      <nav className="sticky top-10 z-50 mx-auto hidden w-fit items-center justify-between rounded-full border border-neutral-700/75 bg-neutral-800/50 px-2 py-2 shadow-md filter backdrop-blur-md md:flex">
         <ul className="flex items-center space-x-2 font-mono">
            {links.map(({ name, slug }) => (
               <Link key={name} href={slug}>
                  <li
                     className={cn("rounded-full px-3 py-1 font-medium", {
                        "bg-neutral-700/60 text-neutral-100":
                           currentRoute === slug,
                        "text-neutral-400": currentRoute !== slug,
                     })}
                  >
                     {name}
                  </li>
               </Link>
            ))}
         </ul>
      </nav>
   )
}

export default DesktopNavbar
