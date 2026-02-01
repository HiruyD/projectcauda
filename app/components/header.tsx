"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "../contexts/LanguageContext"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [headerOpacity, setHeaderOpacity] = useState(1)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "am" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("preferredLanguage", newLanguage)
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage")
    if (storedLanguage && (storedLanguage === "en" || storedLanguage === "am")) {
      setLanguage(storedLanguage as Language)
    }
  }, [setLanguage])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 200 // Adjust this value to control how quickly the header becomes transparent
      const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0.1) // Minimum opacity of 0.1
      setHeaderOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col w-full fixed top-0 left-0 right-0 z-50 px-4 py-2">
      <header
        className={`bg-gradient-to-r from-gray-900 to-slate-800 text-white rounded-full shadow-lg transition-opacity duration-300`}
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto">
          <nav className="flex items-center justify-between h-20 px-6">
            <Link href="/" className="text-2xl md:text-3xl font-light tracking-wider" onClick={closeMenu}>
              {language === "en" ? "RUE FITNESS" : "ሩ ፊትነስ"}
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/members"
                className="text-base lg:text-lg xl:text-xl hover:text-gray-300 transition-colors duration-300"
              >
                {t.members}
              </Link>
              <Link
                href="/classes"
                className="text-base lg:text-lg xl:text-xl hover:text-gray-300 transition-colors duration-300"
              >
                {t.classes}
              </Link>
              <Link
                href="/trainers"
                className="text-base lg:text-lg xl:text-xl hover:text-gray-300 transition-colors duration-300"
              >
                {t.trainers}
              </Link>
              <Link
                href="/studio"
                className="text-base lg:text-lg xl:text-xl hover:text-gray-300 transition-colors duration-300"
              >
                {t.studio}
              </Link>
              <Link
                href="/news-and-events"
                className="text-base lg:text-lg xl:text-xl hover:text-gray-300 transition-colors duration-300"
              >
                {t.newsAndEvents}
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Link href="/auth/signup">
                <Button className="text-sm md:text-base text-white hover:text-gray-300 transition-colors duration-300 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500">
                  {t.joinNow}
                </Button>
              </Link>
              <Button
                onClick={toggleLanguage}
                className="text-sm md:text-base text-white hover:text-gray-300 transition-colors duration-300 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
              >
                {t.languageToggle}
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t.closeMenu : t.openMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-white overflow-y-auto z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/members" className="text-base md:text-lg hover:text-gray-300" onClick={closeMenu}>
                {t.members}
              </Link>
              <Link href="/classes" className="text-base md:text-lg hover:text-gray-300" onClick={closeMenu}>
                {t.classes}
              </Link>
              <Link href="/trainers" className="text-base md:text-lg hover:text-gray-300" onClick={closeMenu}>
                {t.trainers}
              </Link>
              <Link href="/studio" className="text-base md:text-lg hover:text-gray-300" onClick={closeMenu}>
                {t.studio}
              </Link>
              <Link href="/news-and-events" className="text-base md:text-lg hover:text-gray-300" onClick={closeMenu}>
                {t.newsAndEvents}
              </Link>
              <hr className="border-gray-800" />
              <Link href="/auth/signup">
                <Button className="text-base md:text-lg bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 transition-colors duration-300 font-semibold">
                  {t.joinNow}
                </Button>
              </Link>
              <Button
                onClick={() => {
                  toggleLanguage()
                  closeMenu()
                }}
                className="text-base md:text-lg bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 transition-colors duration-300 font-semibold"
              >
                {t.languageToggle}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
