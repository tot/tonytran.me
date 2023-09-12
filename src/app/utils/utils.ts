import { clsx, ClassValue } from "clsx"
import localFont from "next/font/local"
import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"
import {
   format,
   formatDistance,
   getDate,
   isBefore,
   isWithinInterval,
   parseISO,
   sub,
} from "date-fns"

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

export const gambettaSerif = localFont({
   src: "../fonts/gambetta-serif/Gambetta-Variable.ttf",
   variable: "--font-gambetta-serif",
   display: "swap",
})

/**
 * Blog functions
 */

export const formatDate = (date: Date) => {
   const currentDate = new Date()
   const sevenDaysAgo = sub(currentDate, { days: 7 })

   const isPastSevenDays = isWithinInterval(date, {
      start: sevenDaysAgo,
      end: currentDate,
   })

   if (isPastSevenDays) {
      return formatDistance(date, currentDate, {
         addSuffix: true,
         includeSeconds: true,
      })
   } else {
      return format(date, "LLLL d, yyyy")
   }
}
