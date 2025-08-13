"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"

const trainers = [
  {
    id: 1,
    nameEn: "Admassu",
    nameAm: "አድማሱ",
    specialty: "HIIT & Strength",
    specialtyAm: "HIIT እና ጥንካሬ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20241212_133012-gRS2tlcwyu0hBt4risk7sVU7rtXKDj.png",
    slug: "admassu",
  },
  {
    id: 2,
    nameEn: "Roman",
    nameAm: "ሮማን",
    specialty: "Yoga & Pilates",
    specialtyAm: "ዮጋ እና ፒላቴስ",
    image: "/placeholder.svg?height=600&width=600",
    slug: "roman",
  },
  {
    id: 3,
    nameEn: "Solomon",
    nameAm: "ሰለሞን",
    specialty: "Boxing & Conditioning",
    specialtyAm: "ቦክሲንግ እና አካል ማጎልመሻ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20241212_132749_Gallery-D1TKEn7Il5I59jhGK1gOLt2Kz1tPc0.png",
    slug: "solomon",
  },
  {
    id: 4,
    nameEn: "Mariana",
    nameAm: "ማሪያና",
    specialty: "Dance & Cardio",
    specialtyAm: "ዳንስ እና ካርዲዮ",
    image: "/placeholder.svg?height=600&width=600",
    slug: "mariana",
  },
  {
    id: 5,
    nameEn: "Bineyam",
    nameAm: "ቢንያም",
    specialty: "Strength & Nutrition",
    specialtyAm: "ጥንካሬ እና ስነ ምግብ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menarolfitness-17-12-2024-0001.jpg-dK4RUW3bsyfPwWnc9dHnbq55URfXoK.jpeg",
    slug: "bineyam",
  },
  {
    id: 6,
    nameEn: "Meriam",
    nameAm: "ሜሪያም",
    specialty: "Cycling & Endurance",
    specialtyAm: "ሳይክሊንግ እና ጽናት",
    image: "/placeholder.svg?height=600&width=600",
    slug: "meriam",
  },
]

const TrainersPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { t, language } = useLanguage()

  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer[language === "en" ? "nameEn" : "nameAm"].toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer[language === "en" ? "specialty" : "specialtyAm"].toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {t.trainers}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            {t.trainersBio}
          </motion.p>
        </div>
      </div>

      {/* Search Section */}
      <div className="pt-16 pb-8 px-4">
        <div className="max-w-xl mx-auto">
          <Input
            type="search"
            placeholder={t.searchTrainerPlaceholder}
            className="w-full text-lg p-6 bg-gray-700 text-white placeholder-gray-400 border-gray-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/trainers/${trainer.slug}`} className="group block">
                <div className="aspect-square relative mb-4 overflow-hidden bg-gray-700 rounded-lg">
                  <Image
                    src={trainer.image}
                    alt={language === "en" ? trainer.nameEn : trainer.nameAm}
                    width={400}
                    height={400}
                    className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors duration-200">
                  {language === "en" ? trainer.nameEn : trainer.nameAm}
                </h2>
                <p className="text-gray-400 mb-2">{language === "en" ? trainer.specialty : trainer.specialtyAm}</p>
                <span className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  {t.viewProfile}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrainersPage
