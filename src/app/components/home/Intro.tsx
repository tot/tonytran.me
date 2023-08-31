import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition"

const TITLES = ["a developer", "a designer", "an entrepreneur"]

const Intro = () => {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setIndex((index) => index + 1)
      }, 5000)
      return () => clearTimeout(intervalId)
   }, [])
   return (
      <section className="gap-6 px-6 py-8 pt-12 md:py-16 lg:grid lg:grid-cols-1 lg:gap-12 lg:px-8 lg:py-32">
         <div className="">
            <div className="font-general-sans text-4xl font-bold tracking-wide text-white lg:text-5xl">
               <h1 className="">
                  Hello, world! <span className="waving-hand">👋</span>
               </h1>
               <h1 className="mt-2 md:mt-4">I&apos;m Tony Tran</h1>
            </div>
            <div className="mt-6 space-y-4 font-sans text-base leading-8 text-neutral-400 md:mt-8">
               <div className="">
                  I&apos;m{" "}
                  <TextTransition
                     className="z-20 text-[#62fde8]"
                     inline
                     springConfig={presets.gentle}
                  >
                     {TITLES[index % TITLES.length]}
                  </TextTransition>{" "}
                  studying Computer Science at the University of Virginia.
               </div>

               <p className="">
                  I love working on projects in the{" "}
                  <span className="text-[#62fde8]">startup</span>,{" "}
                  <span className="text-[#62fde8]">cybersecurity</span>,{" "}
                  <span className="text-[#62fde8]">finance</span>, and{" "}
                  <span className="text-[#62fde8]">software automation</span>{" "}
                  spaces. Right now, I&apos;m building{" "}
                  <a
                     href="https://github.com/tot/musicmates"
                     className="text-neutral-100 underline"
                  >
                     Harmonyze
                  </a>
                  , a Linktree-like platform for people to share their music
                  personalities.
               </p>

               <p className="">
                  Check out my{" "}
                  <a href="#" className="text-neutral-100 underline">
                     blog
                  </a>{" "}
                  where I detail my experiences building projects, share
                  insights about technologies, and jot down thoughts.
               </p>
            </div>
         </div>
      </section>
   )
}

export default Intro
