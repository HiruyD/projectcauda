"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "../../contexts/LanguageContext"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail } from 'lucide-react'

export default function ForgotPasswordPage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError("Email is required")
      return
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl text-center"
        >
          <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Check Your Email</h2>
            <p className="text-gray-400">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setEmail("")
              }}
              className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400"
            >
              Try Again
            </Button>
            <Link
              href="/auth"
              className="block text-center text-violet-400 hover:text-violet-300"
            >
              Back to Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl"
      >
        <div>
          <Link
            href="/auth"
            className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>
          <h2 className="text-3xl font-extrabold text-white mb-2">Forgot Password?</h2>
          <p className="text-gray-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {error && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className="text-gray-300">
              {t.emailAddress}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              className={`mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 ${
                error ? 'border-red-500' : ''
              }`}
              placeholder="your@email.com"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-gray-900 hover:from-gray-300 hover:to-gray-400 font-medium py-3 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending Reset Link...
              </div>
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
