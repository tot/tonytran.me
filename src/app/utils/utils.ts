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

/**
 * Blog functions
 */

export const formatDate = (date: Date) => {
   const currentDate = new Date()
   const thirtyDaysAgo = sub(currentDate, { days: 30 })

   const isPastThirtyDays = isWithinInterval(date, {
      start: thirtyDaysAgo,
      end: currentDate,
   })

   if (isPastThirtyDays) {
      return formatDistance(date, currentDate, {
         addSuffix: true,
         includeSeconds: true,
      })
   } else {
      return format(date, "LLLL d, yyyy")
   }
}