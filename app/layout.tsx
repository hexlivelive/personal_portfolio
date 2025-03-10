import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Paul Borgen | Software Engineer",
  description: "Personal portfolio website of Paul Borgen, a software engineer specializing in Big Data, Blockchain, and much more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

