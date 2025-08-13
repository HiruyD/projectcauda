"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function SignUpPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8 bg-gray-800 p-8 rounded-xl text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-white mb-4">{t.underConstruction}</h1>
          <p className="text-xl text-gray-300 mb-8">{t.comingSoon}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-full h-64 mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240329_133557-scaled.jpg-VJU1qzAxRDW3QZSAvZms2CbVCk6xvi.jpeg"
            alt={t.gymConstructionImage}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{t.buildingBetterGym}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t.backToHome}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
