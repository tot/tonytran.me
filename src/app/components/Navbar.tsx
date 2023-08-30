import { cn } from "@/utils/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
   const currentRoute = usePathname()
   return (
      <nav className="sticky top-10 z-50 mx-auto flex w-fit items-center justify-between rounded-full border border-neutral-700/75 bg-neutral-800/50 px-2 py-2 shadow-md filter backdrop-blur-md">
         <ul className="flex items-center space-x-2 font-mono">
            {LINKS.map(({ name, slug }) => (
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

export default Navbar
