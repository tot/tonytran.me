import Link from "next/link"
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"

const LINKS = [
   {
      icon: <BiLogoLinkedin className="" />,
      url: "https://www.linkedin.com/in/tony-tran03/",
   },
   {
      icon: <BiLogoGithub className="" />,
      url: "https://github.com/tot",
   },
]

const Footer = () => {
   return (
      <>
         <div className="h-px w-full max-w-[50rem] bg-neutral-800/75" />
         <footer className="flex items-baseline justify-between p-6">
            <ul className="flex items-center space-x-4 text-xl text-neutral-500">
               {LINKS.map(({ icon, url }) => (
                  <li
                     key={url}
                     className="transition-colors duration-150 hover:text-neutral-200"
                  >
                     <Link href={url}>{icon}</Link>
                  </li>
               ))}
            </ul>
         </footer>
      </>
   )
}

export default Footer
