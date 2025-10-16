'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-8 h-8" />
        </div>
      </div>

      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
          Na shkruani në WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </a>
  )
}
