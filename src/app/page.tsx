"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition"

const LINKS = [
   {
      name: "Home",
      slug: "/",
   },
   {
      name: "Blog",
      slug: "/blog",
   },
   {
      name: "Photos",
      slug: "/photos",
   },
   {
      name: "Contact",
      slug: "/contact",
   },
]

const TITLES = ["a developer", "a designer", "an entrepreneur"]

const RECENT_ARTICLES = [
   {
      title: "Article name",
      slug: "article-one",
      date: "August 28, 2023",
   },
   {
      title: "Article name 2",
      slug: "article-two",
      date: "August 28, 2023",
   },
   {
      title: "Article name 3",
      slug: "article-one",
      date: "August 28, 2023",
   },
   {
      title: "Article name 4",
      slug: "article-one",
      date: "August 28, 2023",
   },
]

const PROJECTS = [
   {
      year: "2023",
      title: "Harmonyze",
      description: "A social platform to showcase your music personality.",
      url: "https://github.com/tot/harmonyze",
   },
]

export default function Home() {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setIndex((index) => index + 1)
      }, 5000)
      return () => clearTimeout(intervalId)
   }, [])

   return (
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col">
         <nav className="flex w-full items-center justify-between border-b border-neutral-700/75 p-6 lg:p-8">
            <h3 className="text-xl font-bold text-white">tt.</h3>
            <ul className="flex items-center space-x-4 text-base lg:space-x-8">
               {LINKS.map(({ name, slug }) => (
                  <Link key={name} href={slug}>
                     <li className="font-medium text-neutral-400">{name}</li>
                  </Link>
               ))}
            </ul>
         </nav>
         {/* <div className="sticky top-10 z-50 mx-auto flex w-fit items-center justify-between rounded-full border border-neutral-700/75 bg-neutral-800/50 px-6 py-2 filter backdrop-blur-md">
            
            <ul className="flex items-center space-x-8 font-mono">
               {LINKS.map(({ name, slug }) => (
                  <Link key={name} href={slug}>
                     <li className="font-medium text-neutral-400">{name}</li>
                  </Link>
               ))}
            </ul>
         </div> */}
         <section className="gap-6 px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
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
                     finance, and software automation spaces. Right now,
                     I&apos;m building{" "}
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
            <div className="mx-auto mt-12 grid h-[20rem] w-full max-w-full grid-cols-2 grid-rows-2 gap-6 md:max-w-xl lg:mt-0 lg:h-[32rem] lg:max-w-full lg:gap-8">
               <div className="rounded-lg border-neutral-800/75 bg-neutral-800/30">
                  location
               </div>
               <div className="row-span-2 rounded-lg border-neutral-800/75 bg-neutral-800/30">
                  portrait
               </div>
               <div className="rounded-lg border-neutral-800/75 bg-neutral-800/30">
                  spotify
               </div>
            </div>
         </section>
         <section className="px-6 py-8 lg:px-8 lg:py-16">
            <h1 className="text-3xl font-bold text-white">Writings</h1>
            <div className="mt-6 divide-y-2 divide-neutral-800/75 text-neutral-200">
               {RECENT_ARTICLES.map(({ title, slug, date }) => (
                  <div key={slug}>
                     <Link href="">
                        <div className="flex w-full items-baseline justify-between p-4 hover:border-neutral-700 hover:bg-neutral-800/25">
                           <p className="text-lg font-medium">{title}</p>
                           <time className="font-mono text-indigo-500">
                              {date}
                           </time>
                        </div>
                     </Link>
                  </div>
               ))}
               {/* <div className="">
                  <Link href="">
                     <button
                        className="flex h-8 items-center justify-center text-base text-neutral-400"
                        type="button"
                     >
                        All posts -{">"}
                     </button>
                  </Link>
               </div> */}
            </div>
         </section>
         <section className="px-6 py-8 lg:px-8 lg:py-16">
            <h1 className="text-3xl font-bold text-white">Projects</h1>
            <div className="mt-6 grid grid-cols-2">
               <div className="flex h-48 flex-col justify-between rounded-lg border border-neutral-800/75 p-6 hover:bg-neutral-800/25">
                  <div className="w-1/2">
                     <time className="font-mono text-base text-sky-500">
                        2023
                     </time>
                     <p className="text-lg font-semibold leading-5 text-neutral-100">
                        Harmonyze
                     </p>
                     <p className="mt-2 text-sm text-neutral-400">
                        Description of project
                     </p>
                  </div>
                  <a href="" className="">
                     <button
                        className="flex h-10 items-center justify-center rounded bg-white px-3 text-sm font-medium text-black hover:bg-white/75"
                        type="button"
                     >
                        View repo
                     </button>
                  </a>
               </div>
            </div>
         </section>
         <section className="px-8 py-24">
            <h1 className="">Technologies</h1>
         </section>
      </main>
   )
}
