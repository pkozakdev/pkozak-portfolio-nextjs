import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Space_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import SoftGradientBackground from "@/components/soft-gradient-background"

// Define fonts with proper variable names
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat"
})

const spaceMono = Space_Mono({ 
  weight: "700", 
  subsets: ["latin"],
  variable: "--font-space-mono"
})

export const metadata: Metadata = {
  title: "Piotr Kozak - Developer Portfolio",
  description: "Modern developer portfolio showcasing skills and projects of Piotr Kozak",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${spaceMono.variable}`}>
      <body className="bg-background text-foreground font-sans relative min-h-screen">
        <SoftGradientBackground />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

