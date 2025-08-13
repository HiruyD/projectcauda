"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./contexts/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"
import { PhoneCall, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"

export default function Home() {
  const { t, language } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75" />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{ yoyo: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edited_gym_image.jpg-JpVF04guOxatXigZ9uZpEXr9uZ7itB.jpeg"
            alt="Dark moody gym interior with dramatic lighting"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-6xl md:text-8xl font-bold tracking-tight mb-6"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xl mb-8 max-w-2xl"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/auth/signup">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 text-lg px-8 py-6">
                {t.joinNow}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-light mb-6 text-white">{t.luxuryFitness}</h2>
              <p className="text-gray-300 mb-8">{t.luxuryFitnessDescription}</p>
              <Link href="/members">
                <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
                  {t.exploreMemberships}
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-video relative rounded-lg overflow-hidden"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                aria-label={t.fitnessVideoLabel}
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menarolfitness-11-12-2024-0001-zZ6t9P5OMu6YTDvBrGocXq0sY5N0vj.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center">{t.exceptionalClasses}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { en: "Strength", am: "ጥንካሬ" },
              { en: "HIIT", am: "ሂት" },
              { en: "Yoga", am: "ዮጋ" },
            ].map((classInfo, index) => (
              <Link href="/classes" key={classInfo.en}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  {classInfo.en === "Strength" ? (
                    <div className="aspect-[4/5] bg-gray-700 mb-4 overflow-hidden rounded-lg">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer(1)-2vBFWWoBMDZhWwkQ5guZp6UnkePJ1X.jpeg"
                          alt="Man performing strength training with weights"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50 group-hover:opacity-75 transition-opacity duration-300" />
                      </div>
                    </div>
                  ) : classInfo.en === "HIIT" ? (
                    <div className="aspect-[4/5] bg-gray-700 mb-4 overflow-hidden rounded-lg">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menarolfitness-17-12-2024-0002.jpg-nH0Xi8ntABOqUt7CtBDretUpmmltpK.jpeg"
                          alt="Group HIIT training session with instructor"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50 group-hover:opacity-75 transition-opacity duration-300" />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/5] bg-gray-700 mb-4 overflow-hidden rounded-lg">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer-3cPjEVzauP2GTwl2xzi2ChfQVRxYBJ.jpeg"
                          alt="Woman performing yoga pose in a gym setting"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50 group-hover:opacity-75 transition-opacity duration-300" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-xl font-light text-center">{language === "en" ? classInfo.en : classInfo.am}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div id="footer" className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center text-white">{t.contactUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col items-center md:items-start space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <PhoneCall className="text-blue-500 w-6 h-6" />
                <div className="text-white">
                  <p>+251 116 687 633</p>
                  <p>+251 902 677 769</p>
                  <p>+251 911 807 769</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Mail className="text-blue-500 w-6 h-6" />
                <p className="text-white">contact@menarol.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <MapPin className="text-blue-500 w-6 h-6" />
                <div className="text-white">
                  <p>{t.addressText}</p>
                  <p>Fikremariam Aba Techan St, Addis Ababa, Ethiopia</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.9483837748107!2d38.78937546179175!3d9.027232029989712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85550f9c27a3%3A0xab6259c5d7de702a!2sMenarol%20Fitness%20Center!5e1!3m2!1sen!2sus!4v1734010186785!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Menarol Fitness Center Location"
                aria-label="Google Maps showing the location of Menarol Fitness Center"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
