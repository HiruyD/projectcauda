"use client"

import { useLanguage } from "../contexts/LanguageContext"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MathleticPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8 bg-gray-800 p-8 rounded-xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{t.mathleticTitle}</h1>
        <p className="text-xl text-gray-300 mb-8">{t.mathleticDescription}</p>

        <div className="relative w-full h-64 mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled.jpg-O2je9RqJHwbqyXcdzFW0rN9bAHnC1Y.jpeg"
            alt={t.mathleticStoreImage}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{t.mathleticStoreComing}</span>
          </div>
        </div>

        <p className="text-lg text-gray-300 mb-6">{t.mathleticContactInfo}</p>

        <Link href="/#footer">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
            {t.mathleticContactUs}
          </Button>
        </Link>
      </div>
    </div>
  )
}
