import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"

// Import styles
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "STEMHiss - Demystifying STEM Through History",
  description: "A student-led organization dedicated to communicating STEM history",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(playfair.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Navbar />
        <main className="relative pt-16">{children}</main>
      </body>
    </html>
  )
}

