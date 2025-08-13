"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import en from "../translations/en"
import am from "../translations/am"

type Language = "en" | "am"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Record<string, string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = { en, am }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [t, setT] = useState(translations[language])

  useEffect(() => {
    setT(translations[language])
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
