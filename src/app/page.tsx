import Writings from "./components/home/Writings"
import Projects from "./components/home/Projects"
import Intro from "./components/home/Intro"

export default function Home() {
   return (
      <div className="relative">
         <main className="relative mx-auto flex min-h-screen max-w-[50rem] flex-col">
            <Intro />
            <Writings />
            <Projects />
         </main>
      </div>
   )
}
