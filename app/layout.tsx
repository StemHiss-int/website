import type React from "react"
import { Playfair_Display } from "next/font/google"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
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
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}

