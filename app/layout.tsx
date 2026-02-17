"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    window.history.scrollRestoration = "manual" 
    window.scrollTo(0, 0)                     
  }, [])

  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
