import { ReactNode } from "react"

interface BlogLayoutProps {
   children: ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
   return (
      <div className="mx-auto flex min-h-screen w-full max-w-[50rem] flex-col justify-between px-6 pb-12">
         <div>{children}</div>
      </div>
   )
}
