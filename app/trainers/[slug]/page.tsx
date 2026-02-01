"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { useLanguage } from "../../contexts/LanguageContext"
import { useState, useEffect } from "react"

// This would typically come from a database
const trainers = {
  admassu: {
    nameEn: "Admassu",
    nameAm: "አድማሱ",
    specialtyEn: "HIIT & Strength",
    specialtyAm: "HIIT እና ጥንካሬ",
    image: "/images/20241212-133012.png",
    bioEn:
      "Admassu specializes in high-intensity interval training and strength conditioning. With over 8 years of experience, he's helped countless clients achieve their fitness goals through personalized training programs.",
    bioAm:
      "አድማሱ በከፍተኛ ጥንካሬ የአጭር ጊዜ ስልጠና እና በጥንካሬ ማሰልጠን ላይ ይሰለጥናል። ከ8 ዓመታት በላይ ልምድ ባለው፣ በግል የተዘጋጁ የስልጠና ፕሮግራሞች አማካኝነት በርካታ ደንበኞች የአካል ብቃት ግቦቻቸውን እንዲያሳኩ አግዟል።",
    certificationsEn: ["NASM Certified Personal Trainer", "CrossFit Level 2", "TRX Certified"],
    certificationsAm: ["NASM የተመሰከረለት የግል አሰልጣኝ", "CrossFit ደረጃ 2", "TRX የተመሰከረለት"],
    expertiseEn: ["Strength Training", "HIIT", "Weight Loss", "Muscle Building"],
    expertiseAm: ["የጥንካሬ ስልጠና", "HIIT", "ክብደት መቀነስ", "የጡንቻ ግንባታ"],
    tiktok: "https://www.tiktok.com/@admassu_fitness",
    instagram: "https://www.instagram.com/admassu_fitness",
  },
  roman: {
    nameEn: "Roman",
    nameAm: "ሮማን",
    specialtyEn: "Yoga & Pilates",
    specialtyAm: "ዮጋ እና ፒላቴስ",
    image: "/placeholder.svg?height=800&width=800",
    bioEn:
      "Roman is our yoga and Pilates expert, bringing tranquility and core strength to Rue Fitness. With a decade of experience in mindful movement, he helps clients find balance, flexibility, and inner peace.",
    bioAm:
      "ሮማን የእኛ የዮጋ እና ፒላቴስ ባለሙያ ነው፣ ለሩ ፊትነስ ሰላምና የሰውነት ጥንካሬ ያመጣል። በአስተውሎት እንቅስቃሴ አשር ዓመት ልምድ ያለው፣ ደንበኞች ሚዛን፣ ተለዋዋጭነት እና የውስጥ ሰላም እንዲያገኙ ይረዳል።",
    certificationsEn: ["Yoga Alliance Certified", "Stott Pilates Certified", "Meditation Instructor"],
    certificationsAm: ["የዮጋ አላያንስ የተመሰከረለት", "ስቶት ፒላቴስ የተመሰከረለት", "የሜዲቴሽን አስተማሪ"],
    expertiseEn: ["Vinyasa Yoga", "Mat Pilates", "Meditation", "Flexibility Training"],
    expertiseAm: ["ቪንያሳ ዮጋ", "ማት ፒላቴስ", "የአእምሮ ማሰላሰል", "ተለዋዋጭነት ስልጠና"],
    tiktok: "https://www.tiktok.com/@roman_yoga",
    instagram: "https://www.instagram.com/roman_yoga",
  },
  solomon: {
    nameEn: "Solomon",
    nameAm: "ሰለሞን",
    specialtyEn: "Boxing & Conditioning",
    specialtyAm: "ቦክሲንግ እና አካል ማጎልመሻ",
    image:
      "/images/screenshot-20241212-132749-gallery.png",
    bioEn:
      "Solomon brings the fire to our boxing and conditioning programs. As a former professional boxer, he combines technical skill with high-energy workouts to help clients build strength, agility, and confidence.",
    bioAm:
      "ሰለሞን ወደ ቦክሲንግ እና አካል ማጎልመሻ ፕሮግራሞቻችን እሳትን ያመጣል። እንደ ቀድሞ ሙያዊ ቦክሰር፣ ደንበኞች ጥንካሬ፣ ቅልጥፍና እና የራስ መተማመንን እንዲገነቡ ለመርዳት ቴክኒካዊ ችሎታን ከከፍተኛ ሃይል ልምምዶች ጋር ያጣምራል።",
    certificationsEn: ["Certified Boxing Coach", "NASM Performance Enhancement Specialist", "First Aid & CPR"],
    certificationsAm: ["የተመሰከረለት የቦክሲንግ አሰልጣኝ", "NASM የአዳይ ማሻሻያ ስፔሻሊስት", "የመጀመሪያ እርዳታ እና CPR"],
    expertiseEn: ["Boxing Technique", "Circuit Training", "Strength & Conditioning", "Footwork Drills"],
    expertiseAm: ["የቦክሲንግ ቴክኒክ", "ሰርኩት ስልጠና", "ጥንካሬ እና አካል ማጎልመሻ", "እግር ሥራ ልምምዶች"],
    tiktok: "https://www.tiktok.com/@solomon_boxing",
    instagram: "https://www.instagram.com/solomon_boxing",
  },
  mariana: {
    nameEn: "Mariana",
    nameAm: "ማሪያና",
    specialtyEn: "Dance & Cardio",
    specialtyAm: "ዳንስ እና ካርዲዮ",
    image: "/placeholder.svg?height=800&width=800",
    bioEn:
      "Mariana brings the joy of movement to Rue Fitness. With her background in various dance styles and cardio workouts, she creates fun, high-energy classes that keep clients coming back for more.",
    bioAm:
      "ማሪያና ለሩ ፊትነስ የእንቅስቃሴ ደስታን ታመጣለች። በተለያዩ የዳንስ ዓይነቶች እና የካርዲዮ ልምምዶች ያላት ልምድ፣ ደንበኞችን እንደገና እንዲመጡ የሚያደርጉ አዝናኝ እና ከፍተኛ ሃይል ያላቸው ክፍሎችን ትፈጥራለች።",
    certificationsEn: ["Zumba Instructor", "AFAA Group Fitness Instructor", "Dance Therapy Certified"],
    certificationsAm: ["የዙምባ አስተማሪ", "AFAA የቡድን አካል ብቃት አስተማሪ", "የዳንስ ቴራፒ የተመሰከረለት"],
    expertiseEn: ["Zumba", "Cardio Dance", "Rhythm-based Workouts", "Dance Therapy"],
    expertiseAm: ["ዙምባ", "ካርዲዮ ዳንስ", "በሪድም ላይ የተመሰረቱ ልምምዶች", "የዳንስ ቴራፒ"],
    tiktok: "https://www.tiktok.com/@mariana_dance",
    instagram: "https://www.instagram.com/mariana_dance",
  },
  bineyam: {
    nameEn: "Bineyam",
    nameAm: "ቢንያም",
    specialtyEn: "Strength & Nutrition",
    specialtyAm: "ጥንካሬ እና ስነ ምግብ",
    image:
      "/images/menarolfitness-17-12-2024-0001.jpeg",
    video:
      "/images/menarolfitness-17-12-2024-0002.mp4",
    bioEn:
      "Bineyam is our strength and nutrition guru. He combines his expertise in weightlifting with deep knowledge of nutrition to help clients build muscle, lose fat, and optimize their overall health.",
    bioAm:
      "ቢንያም የእኛ የጥንካሬ እና የአመጋገብ ጉሩ ነው። ደንበኞች ጡንቻ እንዲገነቡ፣ ስብ እንዲቀንሱ እና አጠቃላይ ጤንነታቸውን እንዲያሻሽሉ ለመርዳት በክብደት ማንሳት ያለውን ክህሎት ከጥልቅ የአመጋገብ እውቀት ጋር ያጣምራል።",
    certificationsEn: [
      "NSCA Certified Strength & Conditioning Specialist",
      "Precision Nutrition Level 2",
      "Olympic Weightlifting Coach",
    ],
    certificationsAm: ["NSCA የተመሰከረለት የጥንካሬ እና አካል ማጎልመሻ ስፔሻሊስት", "ፕሪሲዥን ኒውትሪሽን ደረጃ 2", "የኦሎምፒክ ክብደት ማንሳት አሰልጣኝ"],
    expertiseEn: ["Strength Training", "Nutrition Planning", "Body Composition Analysis", "Powerlifting"],
    expertiseAm: ["የጥንካሬ ስልጠና", "የአመጋገብ ዕቅድ", "የሰውነት ንጥረ ነገሮች ትንተና", "ፓወር ሊፍቲንግ"],
    tiktok: "https://www.tiktok.com/@bineyam_strength",
    instagram: "https://www.instagram.com/bineyam_strength",
  },
  meriam: {
    nameEn: "Meriam",
    nameAm: "ሜሪያም",
    specialtyEn: "Cycling & Endurance",
    specialtyAm: "ሳይክሊንግ እና ጽናት",
    image: "/placeholder.svg?height=800&width=800",
    bioEn:
      "Meriam leads our cycling and endurance programs. A former competitive cyclist, she pushes clients to their limits with challenging, music-driven indoor cycling sessions and outdoor endurance training.",
    bioAm:
      "ሜሪያም የእኛን የሳይክል እና የጽናት ፕሮግራሞች ትመራለች። እንደ ቀድሞ ተወዳዳሪ ሳይክለኛ፣ ፈታኝ እና በሙዚቃ የሚመራ የውስጥ ቤት ሳይክል መንዳት ክፍለጊዜዎችን እና የውጭ የጽናት ስልጠናን በመጠቀም ደንበኞችን ወደ ጠረፋቸው ትገፋለች።",
    certificationsEn: ["Spinning Instructor", "USA Cycling Coach", "Certified Personal Trainer"],
    certificationsAm: ["የስፒኒንግ አስተማሪ", "USA ሳይክሊንግ አሰልጣኝ", "የተመሰከረለት የግል አሰልጣኝ"],
    expertiseEn: ["Indoor Cycling", "Endurance Training", "Interval Training", "Road Cycling"],
    expertiseAm: ["የውስጥ ቤት ሳይክል መንዳት", "የጽናት ስልጠና", "የጊዜ ልዩነት ስልጠና", "የመንገድ ሳይክል መንዳት"],
    tiktok: "https://www.tiktok.com/@meriam_cycling",
    instagram: "https://www.instagram.com/meriam_cycling",
  },
}

export default function TrainerPage({ params }: { params: { slug: string } }) {
  const { t, language } = useLanguage()
  const trainer = trainers[params.slug as keyof typeof trainers]
  const [videoKey, setVideoKey] = useState(0)

  useEffect(() => {
    setVideoKey((prevKey) => prevKey + 1)
  }, [trainer.video])

  if (!trainer) {
    return <div>{t.trainerNotFound}</div>
  }

  const isEnglish = language === "en"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/trainers" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-1" />
          {t.backToTrainers}
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] relative bg-black">
            <video
              key={videoKey}
              src={trainer.video || trainer.image}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">{isEnglish ? trainer.nameEn : trainer.nameAm}</h1>
            <p className="text-xl text-gray-400 mb-4">{isEnglish ? trainer.specialtyEn : trainer.specialtyAm}</p>

            <div className="flex space-x-4 mb-6">
              <a
                href={trainer.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
              >
                <FaTiktok className="w-5 h-5 mr-2" />
                {isEnglish ? "Follow on TikTok" : "በTikTok ላይ ተከተል"}
              </a>
              <a
                href={trainer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                {isEnglish ? "Follow on Instagram" : "በInstagram ላይ ተከተል"}
              </a>
            </div>

            <div className="prose max-w-none mb-8 text-gray-300">
              <p>{isEnglish ? trainer.bioEn : trainer.bioAm}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">{t.certifications}</h2>
              <ul className="space-y-2">
                {(isEnglish ? trainer.certificationsEn : trainer.certificationsAm).map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">{t.areasOfExpertise}</h2>
              <div className="flex flex-wrap gap-2">
                {(isEnglish ? trainer.expertiseEn : trainer.expertiseAm).map((expertise, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                    {expertise}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/#footer">
              <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200">{t.bookSession}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
