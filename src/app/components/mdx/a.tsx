import Link from "next/link"
import { HTMLProps } from "react"
import { BiLinkExternal } from "react-icons/bi"

const a = ({ href, children }: HTMLProps<HTMLAnchorElement>) => {
   if (href && href.startsWith("/")) {
      return <Link href={href}>{children}</Link>
   }

   if (href && href.startsWith("#")) {
      return <a href={href}>{children}</a>
   }

   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="font-medium text-[#62fde8]"
      >
         {children}
         <div className="inline self-start pl-1">
            <BiLinkExternal className="inline" />
         </div>
      </a>
   )
}

export default a
