import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import { LanguageProvider } from "./contexts/LanguageContext"
import AnimatedBackground from "./components/AnimatedBackground"
import app from "./firebase/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Menarol Fitness Center",
  description: "Your ultimate fitness destination",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  app // Initialize Firebase
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <AnimatedBackground>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AnimatedBackground>
        </LanguageProvider>
      </body>
    </html>
  )
}
