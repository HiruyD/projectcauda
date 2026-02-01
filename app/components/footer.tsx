import { Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.instagram.com/menarolfitness/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@menarol_fitness"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Rue Fitness Center. All rights reserved.</p>
      </div>
    </footer>
  )
}
