"use client"

import { useWindowSize } from "@uidotdev/usehooks"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"

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
   const { width } = useWindowSize()

   return (
      <>
         {width && width < 768 ? (
            <MobileNavbar links={LINKS} />
         ) : (
            <DesktopNavbar links={LINKS} />
         )}
      </>
   )
}

export default Navbar
