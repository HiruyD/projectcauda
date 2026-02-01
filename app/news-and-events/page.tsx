"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import Link from "next/link"

const newsAndEvents = [
  {
    title: {
      en: "Annual Outdoor Event",
      am: "ዓመታዊ የውጭ ዝግጅት",
    },
    content: {
      en: "Join us for our exhilarating yearly outdoor activity! This year, we're hosting a mountain trail run. It's a perfect opportunity to test your fitness, enjoy nature, and bond with fellow fitness enthusiasts.",
      am: "ለሚያርካ የዓመታዊ የውጭ እንቅስቃሴያችን ይቀላቀሉን! በዚህ ዓመት፣ የተራራ ጎዳና ሩጫን እናዘጋጃለን። ይህ የአካል ብቃትዎን ለመፈተን፣ ተፈጥሮን ለመደሰት እና ከሌሎች የአካል ብቃት ወዳጆች ጋር ለመተዋወቅ ጥሩ እድል ነው።",
    },
    cta: {
      en: "Sign Up Now",
      am: "አሁን ይመዝገቡ",
    },
  },
  {
    title: {
      en: "Rue Fitness App Coming Soon!",
      am: "የሩ ፊትነስ መተግበሪያ በቅርቡ ይመጣል!",
    },
    content: {
      en: "We're excited to announce our upcoming fitness app! Track your workouts, access personalized training plans, and connect with our community - all from your smartphone. Stay tuned for the launch date!",
      am: "የሚመጣውን የአካል ብቃት መተግበሪያችንን ለማበሰር ደስ ይለናል! የአካል ብቃት እንቅስቃሴዎችዎን ይከታተሉ፣ የግል ስልጠና እቅዶችን ያግኙ እና ከማህበረሰባችን ጋር ይገናኙ - ሁሉንም ከስማርት ስልክዎ። ለመጀመሪያው ቀን ቆይተው ይከታተሉ!",
    },
    cta: {
      en: "Learn More",
      am: "ተጨማሪ ይወቁ",
    },
  },
  {
    title: {
      en: "Introducing Rue Athletic Wear",
      am: "የሩ አትሌቲክ ልብሶችን እናስተዋውቃለን",
    },
    content: {
      en: "Elevate your workout with our new line of high-end athletic wear. Designed for performance, comfort, and style, our collection will help you look and feel your best during every session. Available in our studio soon!",
      am: "በአዲሱ የከፍተኛ ደረጃ የአትሌቲክ ልብሶች ስብስባችን የልምምድዎን ጥራት ያሻሽሉ። ለአፈጻጸም፣ ለምቾት እና ለስታይል የተデዘጋጀው የእኛ ስብስብ በእያንዳንዱ ክፍለ ጊዜ ጥሩ እንዲመስሉ እና እንዲሰማዎት ይረዳዎታል። በቅርቡ በስቱዲዮአችን ይገኛል!",
    },
    cta: {
      en: "View Collection",
      am: "ስብስቡን ይመልከቱ",
    },
  },
]

export default function NewsAndEventsPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-blue-900" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-6xl font-bold mb-6">{t.newsAndEvents}</h1>
          <p className="text-white text-xl max-w-2xl">{t.newsAndEventsSubtitle}</p>
        </div>
      </div>

      {/* News and Events Content */}
      <div className="container mx-auto px-4 py-16">
        {newsAndEvents.map((item, index) => (
          <div key={index} className="mb-16 pb-16 border-b border-gray-800 last:border-b-0">
            <h2 className="text-3xl font-bold mb-6">{item.title[language]}</h2>
            <p className="text-gray-300 mb-6">{item.content[language]}</p>
            {item.title.en !== "Rue Fitness App Coming Soon!" && (
              <Link
                href={
                  item.title.en === "Annual Outdoor Event"
                    ? "/sign-up-for-adventure"
                    : item.title.en === "Introducing Rue Athletic Wear"
                      ? "/mathletic"
                      : "#"
                }
              >
                <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
                  {item.cta[language]}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
