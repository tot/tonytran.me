"use client"

import Writings from "./components/home/Writings"
import Projects from "./components/home/Projects"
import Intro from "./components/home/Intro"
import Footer from "./components/Footer"

export default function Home() {
   return (
      <div className="relative">
         {/* <div className="absolute left-0 top-0 h-screen w-full bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.08)_0,rgba(0,163,255,0.09)_50%,rgba(12,11,11,0.07)_100%)]"></div> */}
         <main className="relative mx-auto flex min-h-screen max-w-[52rem] flex-col">
            {/* <div className="fixed -top-10 bottom-0 left-0 right-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f1A_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1A_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
            <Intro />
            <Writings />
            <Projects />
            <Footer />
         </main>
      </div>
   )
}
