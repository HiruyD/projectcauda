"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ClassesPage() {
  const { t, language } = useLanguage()
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/picture1.jpeg"
          alt="Gym equipment and gloves on dark background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-800 to-black opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow pt-16">
        {" "}
        {/* Added pt-16 to account for header height */}
        {/* Hero Section */}
        <div className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-6xl md:text-8xl font-bold tracking-tight mb-8"
            >
              {t.training}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              {t.trainingDescription}
            </motion.p>
          </div>
        </div>
        {/* Training Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">{t.trainingPrograms}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {" "}
              {/* Updated grid columns */}
              {[
                {
                  title: t.personalTraining,
                  description: t.personalTrainingDescription,
                  video:
                    "/images/menarolfitness-08-12-2024-0001.mp4",
                },
                {
                  title: t.beginnerAdvancedYoga,
                  description: t.beginnerAdvancedYogaDescription,
                  expandedDescription: t.beginnerAdvancedYogaExpandedDescription,
                  video:
                    "/images/menarolfitness-12-12-2024-0001-1.jpg)-5VILFtq1QEyHo2rvWK2RZLb96CqDN2.mp4",
                },
                {
                  title: t.hiitZone,
                  description: t.hiitZoneDescription,
                  video:
                    "/images/menarolfitness-16-12-2024-0001.mp4",
                },
                {
                  title: {
                    en: "The Final Spin",
                    am: "የመጨረሻው ዙር",
                  },
                  description: {
                    en: "An intense weight loss cycling class designed to push your limits and maximize calorie burn.",
                    am: "ገደብዎን ለመግፋት እና የካሎሪ ማቃጠልን ከፍ ለማድረግ የተነደፈ ኃይለኛ የክብደት መቀነስ የብስክሌት ክፍል።",
                  },
                  video:
                    "/images/menarolfitness-17-12-2024-0001.mp4",
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer bg-black bg-opacity-50 rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    {program.video ? (
                      <video
                        src={program.video}
                        className="w-full h-full object-cover object-[50%_25%]"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : program.image ? (
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {typeof program.title === "object" ? program.title[language] : program.title}
                    </h3>
                    {expandedProgram !== index ? (
                      <>
                        <p className="text-gray-300 mb-4">
                          {typeof program.description === "object"
                            ? program.description[language]
                            : program.description}
                        </p>
                        <Button
                          onClick={() => setExpandedProgram(index)}
                          className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 transition-colors duration-300 font-semibold"
                        >
                          {t.learnMore}
                        </Button>
                      </>
                    ) : (
                      <div className="mt-4 text-gray-300">
                        <p>
                          {program.title === t.personalTraining
                            ? language === "en"
? "Our One-on-One Training Program offers personalized fitness coaching tailored to your unique goals and needs. Work closely with our certified trainers to create a customized workout plan, improve technique, and stay motivated. Whether you're looking to build strength, lose weight, or enhance performance, our trainers are here to guide you every step of the way. Perfect for all fitness levels!"
                              : "የእኛ አንድ-ለአንድ የስልጠና ፕሮግራም ለእርስዎ ልዩ ግቦች እና ፍላጎቶች የግል የአካል ብቃት የተዘጋጁ ። ከእኛ የተመሰከረላቸው አሰልጣኞች ጋር በቅርበት በመስራት ግላዊ የሆነ የልምምድ እቅድ ይፍጠሩ፣ ቴክኒክዎን ያሻሽሉ እና ተነሳሽነትዎን ይጠብቁ። ጥንካሬ ለመገንባት፣ ክብደት ለመቀነስ ወይም አፈጻጸምዎን ለማሻሻል ቢፈልጉ፣ አሰልጣኞቻችን በእያንዳንዱ እርምጃ ለመምራት እዚህ አሉ። ለሁሉም የአካል ብቃት ደረጃዎች ተስማሚ ነው!"
                            : program.title === t.hiitZone
                              ? language === "en"
                                ? "Step into the HIITZone for a high-energy, fast-paced workout designed to push your limits! Our High-Intensity Interval Training sessions combine bursts of intense exercise with short recovery periods, maximizing calorie burn and boosting endurance. Perfect for all fitness levels, the HIITZone is where you can challenge yourself, improve strength, and leave feeling empowered. Join us and unleash your potential!"
                                : "ወደ HIITZone ገብተው ወሰንዎን የሚገፋ ከፍተኛ ሃይል ያለው እና ፈጣን የአካል ብቃት እንቅስቃሴ ያድርጉ! የእኛ ከፍተኛ ጥንካሬ ያለው የአጭር ጊዜ ስልጠና ክፍለ ጊዜዎች ከፍተኛ የሆኑ የአካል ብቃት እንቅስቃሴዎችን ከአጭር የማገገሚያ ጊዜዎች ጋር ያጣምራሉ፣ የካሎሪ ማቃጠልን በማሳደግ እና የመቋቋም አቅምን በማሳደግ። ለሁሉም የአካል ብቃት ደረጃዎች ተስማሚ የሆነው HIITZone እራስዎን መፈታተን፣ ጥንካሬዎን ማሻሻል እና ራስዎን በኃይል የተሞሉ ሆነው ሊሰማዎት የሚችልበት ቦታ ነው። ከእኛ ጋር ይቀላቀሉ እና የእርስዎን ነርዝ ያውጡ!"
                              : program.title === "The Final Spin" ||
                                  program.title.en === "The Final Spin" ||
                                  program.title.am === "የመጨረሻው ዙር"
                                ? language === "en"
                                  ? "Experience the ultimate calorie-torching ride with The Final Spin! This high-intensity cycling class is designed to push your endurance, skyrocket your metabolism, and transform your body. Led by our expert instructors, you'll tackle challenging hill climbs, exhilarating sprints, and rhythmic endurance rides. With heart-pumping music and a supportive group atmosphere, you'll find the motivation to pedal your way to your weight loss goals. Suitable for all fitness levels, The Final Spin will leave you breathless, energized, and coming back for more!"
                                  : "በ'የመጨረሻው ዙር' ጋር ከፍተኛ ካሎሪ የሚያቃጥል ጉዞን ይሞክሩ! ይህ ከፍተኛ ጥንካሬ ያለው የብስክሌት መንዳት ክፍል የእርስዎን ጽናት ለመፈተን፣ የሜታቦሊዝምዎን ለማሳደግ እና አካልዎን ለመለወጥ የተነደፈ ነው። በባለሙያ አሰልጣኞቻችን በሚመራው፣ ፈታኝ የኮረብታ መውጣቶችን፣ አርዝናኝ ፍጥነቶችን እና ሪድማዊ የጽናት ጉዞዎችን ይወጣሉ። ልብ የሚያስፋፋ ሙዚቃ እና ደጋፊ የቡድን ድባብ ጋር፣ የክብደት መቀነሻ ግቦችዎን ለማሳካት የሚያስፈልግዎትን ተነሳሽነት ያገኛሉ። ለሁሉም የአካል ብቃት ደረጃዎች ተስማሚ የሆነው 'የመጨረሻው ዙር' እስትንፋስዎን ያጥረዋል፣ ሃይል ይሰጥዎታል እና እንደገና እንዲመጡ ያደርግዎታል!"
                                : program.expandedDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-6 text-white"
            >
              {t.readyToStartJourney}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
            >
              {t.freeConsultationDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 transition-colors duration-300 text-lg px-8 py-6 font-semibold">
                {t.bookSession}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
