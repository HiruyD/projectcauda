"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import Link from "next/link"

const tiers = [
  {
    key: "silver",
    color: "from-gray-300 to-gray-400",
    image:
      "/images/menarolfitness-12-12-2024-0001.jpeg",
    descriptionKey: "silverDescription",
  },
  {
    key: "gold",
    color: "from-amber-200 to-amber-300",
    image:
      "/images/menarolfitness-12-12-2024-0001.jpeg",
    descriptionKey: "goldDescription",
  },
  {
    key: "platinum",
    color: "from-gray-100 to-gray-200",
    image:
      "/images/menarolfitness-12-12-2024-0001.jpeg",
    descriptionKey: "platinumDescription",
  },
  {
    key: "sapphire",
    color: "from-blue-200 to-blue-300",
    image:
      "/images/menarolfitness-12-12-2024-0001.jpeg",
    descriptionKey: "sapphireDescription",
  },
  {
    key: "diamond",
    color: "from-purple-200 to-purple-300",
    image:
      "/images/menarolfitness-12-12-2024-0001.jpeg",
    descriptionKey: "diamondDescription",
  },
]

export default function MembersPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{ yoyo: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/romes-website-design-1.jpeg"
            alt="Luxury spa amenities with rolled towels on wooden shelf"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-blue-900 opacity-75" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,8vw,6rem)] font-bold tracking-wider mb-8"
          >
            {t.membershipTiers.replace("RUE'S ", "")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {t.membershipDescription}
          </motion.p>
        </div>
      </div>

      {/* Membership Cards Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${tier.color}`} />
                <div className="p-8">
                  <h3 className="text-3xl font-light mb-6 text-center">{t[`${tier.key}Tier`]}</h3>
                  <p className="text-gray-300 mb-8">{t[`${tier.descriptionKey}`]}</p>
                  <Link href="/auth/signup">
                    <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
                      {t.joinNow}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
