import Link from "next/link"
import { HTMLProps } from "react"
import { FiArrowUpRight } from "react-icons/fi"

const a = ({ href, children }: HTMLProps<HTMLAnchorElement>) => {
   if (href && href.startsWith("/")) {
      return (
         <Link href={href}>
            <div className="group inline-flex items-start underline underline-offset-2 transition-colors duration-150 hover:decoration-[#62fde8] focus:bg-[#62fde8]/10">
               <span className="transition-colors duration-150 group-hover:text-[#62fde8]">
                  {children}
               </span>
            </div>
         </Link>
      )
   }

   if (href && href.startsWith("#")) {
      return (
         <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start transition-colors duration-150"
         >
            <span className="transition-colors duration-150 group-hover:text-[#62fde8]">
               {children}
            </span>
         </a>
      )
   }

   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="group inline-flex items-start underline underline-offset-2 transition-colors duration-150 hover:decoration-[#62fde8] focus:bg-[#62fde8]/10"
      >
         <span className="transition-colors duration-150 group-hover:text-[#62fde8]">
            {children}
         </span>
         <FiArrowUpRight className="mt-0.5 h-5 w-5 text-neutral-500 transition-colors  duration-150 group-hover:text-[#62fde8]" />
      </a>
   )
}

export default a
