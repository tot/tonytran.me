import { clsx, ClassValue } from "clsx"
import localFont from "next/font/local"
import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"

/**
 * Utility classes
 */

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

/**
 * Custom fonts
 */

export const generalSans = localFont({
   src: "../fonts/general-sans/GeneralSans-Variable.ttf",
   variable: "--font-general-sans",
   display: "swap",
})

export const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   display: "swap",
})
