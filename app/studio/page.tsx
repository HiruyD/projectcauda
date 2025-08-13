"use client"

import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

const studioSections = [
  {
    titleKey: "bikeRoom",
    descriptionKey: "bikeRoomDescription",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menarolfitness-11-12-2024-0002.jpg-HDRX4EKhpi1tuwk64TPJdI04wBmj17.jpeg",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3Q7A3896.jpg-dAVKERHbuEThTwRgKIXKuXviXApebz.jpeg",
      },
    ],
  },
  {
    titleKey: "aerobicsStudio",
    descriptionKey: "aerobicsStudioDescription",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3Q7A3855.jpg-JMzDrQv4e3woghS6YK6H73TP9CKD5w.jpeg",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3Q7A3884.jpg-8yPc6aJcH7IzOJNEQ6LlUOZJLapbs1.jpeg",
      },
    ],
  },
  {
    titleKey: "weightsRoom",
    descriptionKey: "weightsRoomDescription",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3Q7A3865.jpg-wlVYYPoglQw6fRiqyW1rBkFqcovS29.jpeg",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6510.jpg-R0EohFmqs7W8ObeGU5NHCJT4r7Vs8H.jpeg",
      },
    ],
  },
]

export default function StudioPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3Q7A3866.jpg-ccOtj67kXS4MXquql3ZP95415D147b.jpeg"
          alt="Gym equipment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75" />
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
                  <Image src={image.src} alt={t[image.altKey]} fill className="object-cover" />
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
