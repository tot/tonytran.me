import "./globals.css"
import type { Metadata } from "next"
import { cn, generalSans, inter, gambettaSerif } from "@utils/utils"
import Navbar from "./components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import Favicon from "/public/favicon.ico"

export const metadata: Metadata = {
   title: "Tony Tran",
   description: "The little corner of the internet written by Tony Tran.",
   icons: [{ rel: "icon", url: Favicon.src }],
}

export const revalidate = 0

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body
            className={cn(
               inter.variable,
               generalSans.variable,
               gambettaSerif.variable,
               "relative bg-[#0c0b0b]"
            )}
         >
            <Navbar />
            {children}
            <Analytics />
         </body>
      </html>
   )
}
