"use client"

import { useLanguage } from "../contexts/LanguageContext"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MathleticPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8 bg-gray-800 p-8 rounded-xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{t.mathleticTitle}</h1>
        <p className="text-xl text-gray-300 mb-8">{t.mathleticDescription}</p>

        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/untitled.jpeg"
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
          <Button className="bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 transition-colors duration-300 flex items-center justify-center font-semibold">
            {t.mathleticContactUs}
          </Button>
        </Link>
      </div>
    </div>
  )
}
