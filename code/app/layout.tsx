import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Kove Design | Architecture Studio",
  description:
    "Architectural spaces inspired by nature and precision. Premium residential, hospitality, and bespoke design.",
  openGraph: {
    title: "The Kove Design | Architecture Studio",
    description: "Architectural spaces inspired by nature and precision.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
