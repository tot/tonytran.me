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
   return (
      <Section>
         <h1 className="text-3xl font-bold text-white">Technologies</h1>
         <div className="mx-auto mt-6 grid max-w-3xl grid-cols-4 gap-2">
            {TECH.map((item) => (
               <div
                  key={item.name}
                  className="flex items-center justify-center p-4 text-3xl text-neutral-400 transition-colors duration-150 hover:text-neutral-200"
               >
                  {item.icon}
               </div>
            ))}
         </div>
      </Section>
   )
}

export default Technologies
