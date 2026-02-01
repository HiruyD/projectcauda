"use client"

import { useLanguage } from "../contexts/LanguageContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignUpForAdventurePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8 bg-gray-800 p-8 rounded-xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Sign Up for Adventure</h1>
        <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Are you ready to Climb Entoto?</h2>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Exciting outdoor events coming soon!</li>
            <li>Join our community of fitness enthusiasts</li>
            <li>Experience thrilling challenges and personal growth</li>
            <li>Stay tuned for registration details</li>
          </ul>
        </div>
        <p className="text-lg text-gray-300 mb-6">
          {t.adventureComingSoon} We can't wait to embark on this journey with you!
        </p>
        <Link href="/#footer">
          <Button className="bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 transition-colors duration-300 font-semibold">
            Contact us - {t.contactUs}
          </Button>
        </Link>
      </div>
    </div>
  )
}
