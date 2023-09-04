import { ReactNode } from "react"
import Footer from "../components/Footer"

interface BlogLayoutProps {
   children: ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
   return (
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-between px-6 lg:px-8 lg:pb-0 lg:pt-32">
         <div>{children}</div>
         <div className="">
            <Footer />
         </div>
      </div>
   )
}
