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
      <section className="gap-6 px-6 py-16 lg:grid lg:grid-cols-1 lg:gap-12 lg:px-8 lg:py-32">
         <div className="">
            <div className="text-3xl font-bold tracking-wide text-white lg:text-5xl">
               <h1 className="">Hello, world! 👋</h1>
               <h1 className="mt-4">I&apos;m Tony Tran</h1>
            </div>
            <div className="mt-8 space-y-4 text-base leading-8 text-neutral-400">
               <div className="">
                  I&apos;m{" "}
                  <TextTransition
                     className="z-20 text-sky-400"
                     inline
                     springConfig={presets.gentle}
                  >
                     {TITLES[index % TITLES.length]}
                  </TextTransition>{" "}
                  studying Computer Science at the University of Virginia.
               </div>

               <p className="">
                  I love working on projects in the startup, cybersecurity,
                  finance, and software automation spaces. Right now, I&apos;m
                  building{" "}
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
         {/* <div className="mx-auto mt-12 grid h-[20rem] w-full max-w-full grid-cols-2 grid-rows-2 gap-6 md:max-w-xl lg:mt-0 lg:h-[32rem] lg:max-w-full lg:gap-8">
            <div className="rounded-lg border-neutral-800/75 bg-neutral-800/30">
               location
            </div>
            <div className="row-span-2 rounded-lg border-neutral-800/75 bg-neutral-800/30">
               portrait
            </div>
            <div className="rounded-lg border-neutral-800/75 bg-neutral-800/30">
               spotify
            </div>
         </div> */}
      </section>
   )
}

export default Intro
