"use client"

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition"

const TITLES = ["a developer", "a designer", "an entrepreneur"]

interface HighlightProps {
   children?: ReactNode
}

const Highlight = ({ children }: HighlightProps) => {
   return <span className="text-[#62fde8]">{children}</span>
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
      <section className="px-6 py-8 md:pt-24 lg:pt-32">
         <div className="">
            <div className="font-general-sans text-3xl font-bold tracking-wide text-white lg:text-4xl">
               <h1 className="">
                  Hello, world! <span className="waving-hand">👋</span>
               </h1>
               <h1 className="mt-2">I&apos;m Tony Tran</h1>
            </div>
            <div className="mt-4 space-y-4 font-sans text-base leading-7 text-neutral-400 md:mt-8">
               <div className="">
                  I&apos;m{" "}
                  <TextTransition
                     className="z-20 text-[#62fde8]"
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

               <p className="">
                  Check out my{" "}
                  <Link href="/blog" className="text-neutral-100 underline">
                     blog
                  </Link>{" "}
                  where I detail my experiences building projects, share
                  insights about technologies, and jot down thoughts.
               </p>
            </div>
         </div>
      </section>
   )
}

export default Intro
