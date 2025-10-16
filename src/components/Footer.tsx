import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <div>
                <div className="font-bold text-lg">{siteConfig.name}</div>
                <div className="text-xs text-gray-400">{siteConfig.tagline}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Linqe të Shpejta</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Ballina</Link></li>
              <li><Link href="/produkt" className="text-gray-400 hover:text-white transition-colors">Produkt</Link></li>
              <li><Link href="/kontakti" className="text-gray-400 hover:text-white transition-colors">Kontakti</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Produkti</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ {siteConfig.features.installation}</li>
              <li>✓ {siteConfig.features.training}</li>
              <li>✓ {siteConfig.features.warranty}</li>
              <li>✓ {siteConfig.features.support}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakti</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.phone.tel}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{siteConfig.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">{siteConfig.address.full}</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {siteConfig.name}. Të gjitha të drejtat e rezervuara.</p>
            <p className="mt-2 md:mt-0">Krijuar me ❤️ në Kosovë</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
