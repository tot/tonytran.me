"use client"

import Writings from "./components/home/Writings"
import Projects from "./components/home/Projects"
import Intro from "./components/home/Intro"
import Navbar from "./components/Navbar"
import Technologies from "./components/home/Technologies"
import Footer from "./components/Footer"

export default function Home() {
   return (
      <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col">
         <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
         <Navbar />
         <Intro />
         <Writings />
         <Projects />
         <Technologies />
         <Footer />
      </main>
   )
}
