"use client"

import Writings from "./components/home/Writings"
import Projects from "./components/home/Projects"
import Intro from "./components/home/Intro"
import Navbar from "./components/Navbar"
import Technologies from "./components/home/Technologies"
import Footer from "./components/Footer"

export default function Home() {
   return (
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col">
         <Navbar />
         <Intro />
         <Writings />
         <Projects />
         <Technologies />
         <Footer />
      </main>
   )
}
