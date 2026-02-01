"use client"

import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

const studioSections = [
  {
    titleKey: "bikeRoom",
    descriptionKey: "bikeRoomDescription",
    images: [
      {
        src: "/images/menarolfitness-11-12-2024-0002.jpeg",
      },
      {
        src: "/images/3q7a3896.jpeg",
      },
    ],
  },
  {
    titleKey: "aerobicsStudio",
    descriptionKey: "aerobicsStudioDescription",
    images: [
      {
        src: "/images/3q7a3855.jpeg",
      },
      {
        src: "/images/3q7a3884.jpeg",
      },
    ],
  },
  {
    titleKey: "weightsRoom",
    descriptionKey: "weightsRoomDescription",
    images: [
      {
        src: "/images/3q7a3865.jpeg",
      },
      {
        src: "/images/img-6510.jpeg",
      },
    ],
  },
]

export default function StudioPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/3q7a3866.jpeg"
          alt="Gym equipment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-slate-800 opacity-75" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-6xl font-bold mb-6">{t.ourStudio}</h1>
          <p className="text-white text-xl max-w-2xl">{t.studioDescription}</p>
        </div>
      </div>

      {/* Studio Sections */}
      <div className="py-16">
        {studioSections.map((section) => (
          <div key={section.titleKey} className="mb-24">
            <div className="container mx-auto px-4 mb-8">
              <h2 className="text-4xl font-bold mb-4 text-center">{t[section.titleKey]}</h2>
              <p className="text-gray-300 text-center max-w-3xl mx-auto">{t[section.descriptionKey]}</p>
            </div>
            <div className="space-y-8">
              {section.images.map((image, imgIndex) => (
                <div key={imgIndex} className="relative h-[60vh] w-full overflow-hidden">
                  <Image src={image.src || "/placeholder.svg"} alt={t[image.altKey]} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
