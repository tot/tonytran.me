"use client"

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi"
import TextTransition, { presets } from "react-text-transition"

const TITLES = ["a developer", "a designer", "an entrepreneur"]

const LINKS = [
   {
      icon: <BiLogoLinkedin className="text-lg" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tony-tran03/",
   },
   {
      icon: <BiLogoGithub className="text-lg" />,
      name: "GitHub",
      url: "https://github.com/tot",
   },
]

interface HighlightProps {
   children?: ReactNode
}

const Highlight = ({ children }: HighlightProps) => {
   return <span className="font-medium text-neutral-200 ">{children}</span>
}

const Intro = () => {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setIndex((index) => index + 1)
      }, 5000)
      return () => clearTimeout(intervalId)
   }, [])

   return (
      <section className="px-6 py-8 pt-4 md:pt-10">
         <div className="">
            <div className="font-general-sans text-4xl font-bold text-white">
               <h1 className="">
                  Hello, world! <span className="waving-hand">👋</span>
               </h1>
               <h1 className="mt-2">I&apos;m Tony Tran</h1>
            </div>
            <div className="mt-4 space-y-4 font-sans text-base leading-7 text-neutral-400 md:mt-6">
               <div className="">
                  I&apos;m{" "}
                  <TextTransition
                     className="z-20 font-medium text-neutral-200"
                     inline
                     springConfig={presets.gentle}
                  >
                     {TITLES[index % TITLES.length]}
                  </TextTransition>{" "}
                  studying Computer Science at the University of Virginia. I
                  love working on projects in the <Highlight>startup</Highlight>
                  , <Highlight>cybersecurity</Highlight>,{" "}
                  <Highlight>finance</Highlight>, and{" "}
                  <Highlight>software automation</Highlight> spaces.
               </div>

               <div className="">
                  <p className="pb-2">Find me on</p>
                  <ul className="flex items-center space-x-4 text-xl">
                     {LINKS.map(({ icon, name, url }) => (
                        <Link href={url} key={name}>
                           <li
                              key={url}
                              className="flex items-center space-x-2 text-neutral-200 underline decoration-neutral-500 underline-offset-4 transition-colors duration-150 hover:text-teal-accent hover:decoration-teal-accent"
                           >
                              {icon}
                              <span className="text-base font-medium">
                                 {name}
                              </span>
                           </li>
                        </Link>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Intro
