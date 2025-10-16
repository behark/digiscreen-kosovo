'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Ballina', href: '/' },
    { name: 'Produkt', href: '/produkt' },
    { name: 'Kontakti', href: '/kontakti' }
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone.tel}`} className="flex items-center gap-1 hover:text-blue-200">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{siteConfig.phone.display}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-blue-200">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">📍 {siteConfig.address.full}</div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DS</span>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">{siteConfig.name}</div>
              <div className="text-xs text-gray-600">{siteConfig.tagline}</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item.name}
              </Link>
            ))}
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              WhatsApp
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-center">
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
