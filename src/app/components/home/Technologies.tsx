import {
   BiLogoCss3,
   BiLogoFigma,
   BiLogoGit,
   BiLogoHtml5,
   BiLogoJava,
   BiLogoJavascript,
   BiLogoMongodb,
   BiLogoNodejs,
   BiLogoPython,
   BiLogoReact,
} from "react-icons/bi"
import Section from "./Section"
import Technology from "./Technology"
import { useEffect, useState } from "react"
import Heading from "./Heading"

const TECH = [
   {
      name: "JavaScript",
      icon: <BiLogoJavascript className="" />,
   },
   {
      name: "Java",
      icon: <BiLogoJava className="" />,
   },
   {
      name: "Node.js",
      icon: <BiLogoNodejs className="" />,
   },
   {
      name: "MongoDB",
      icon: <BiLogoMongodb className="" />,
   },
   {
      name: "React",
      icon: <BiLogoReact className="" />,
   },
   {
      name: "Python",
      icon: <BiLogoPython className="" />,
   },
   {
      name: "CSS",
      icon: <BiLogoCss3 className="" />,
   },
   {
      name: "HTML",
      icon: <BiLogoHtml5 className="" />,
   },
   {
      name: "Figma",
      icon: <BiLogoFigma className="" />,
   },
   {
      name: "Git",
      icon: <BiLogoGit className="" />,
   },
]

const Technologies = () => {
   const [activeItem, setActiveItem] = useState<string>("")

   useEffect(() => {
      const handleResize = () => {
         setActiveItem("")
      }

      window.addEventListener("resize", handleResize)
      return () => {
         window.removeEventListener("resize", handleResize)
      }
   })

   return (
      <Section>
         <Heading>Technologies</Heading>
         <div
            onMouseLeave={() => setActiveItem("")}
            // onTouchEnd={() => setActiveItem("")}
            className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
         >
            {TECH.map((item) => (
               <Technology
                  key={item.name}
                  activeItem={activeItem}
                  setActiveItem={(item: string) => setActiveItem(item)}
                  {...item}
               />
            ))}
         </div>
      </Section>
   )
}

export default Technologies
