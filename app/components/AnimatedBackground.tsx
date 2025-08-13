"use client"

import type React from "react"
import { useEffect, useState } from "react"

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, 
      hsl(${220 + scrollPosition * 0.1}, 50%, 15%) 0%, 
      hsl(${240 + scrollPosition * 0.1}, 50%, 20%) 50%, 
      hsl(${260 + scrollPosition * 0.1}, 50%, 25%) 100%)`,
    transition: "background-image 0.3s ease-out",
  }

  return (
    <div style={gradientStyle} className="min-h-screen">
      {children}
    </div>
  )
}
