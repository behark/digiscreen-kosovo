'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { 
  Monitor, Wifi, Cpu, Zap, Shield, Clock, 
  CheckCircle, ArrowRight, Star, Package,
  Maximize2, Eye, Signal, HardDrive, Smartphone
} from 'lucide-react'

export default function ProductPage() {
  const technicalSpecs = [
    { icon: Monitor, label: 'Madhësia', value: '43" / 50" / 55"' },
    { icon: Eye, label: 'Rezolucioni', value: 'Full HD 1920x1080 / 4K' },
    { icon: Signal, label: 'Brightness', value: '500-700 nits' },
    { icon: Maximize2, label: 'Aspect Ratio', value: '9:16 (Vertical)' },
    { icon: Cpu, label: 'Processor', value: 'Quad-core ARM' },
    { icon: HardDrive, label: 'Storage', value: '8GB Internal' },
    { icon: Wifi, label: 'Connectivity', value: 'WiFi, HDMI, USB' },
    { icon: Smartphone, label: 'Control', value: 'Cloud Management App' }
  ]

  const features = [
    {
      title: 'Menaxhim nga Distanca',
      description: 'Ndryshoni përmbajtjen nga telefoni ose kompjuteri juaj në kohë reale',
      icon: Smartphone
    },
    {
      title: 'Cilësi e Lartë',
      description: 'Ekrane Full HD/4K me ngjyra të gjalla dhe kontrast perfekt',
      icon: Eye
    },
    {
      title: 'Instalim i Thjeshtë',
      description: 'Ekipi ynë e instalon dhe konfiguron gjithçka për ju falas',
      icon: Package
    },
    {
      title: 'Punon 24/7',
      description: 'I dizajnuar për përdorim komercial të vazhdueshëm',
      icon: Clock
    },
    {
      title: 'Efikas në Energji',
      description: 'Konsum i ulët i energjisë, kursim në fatura',
      icon: Zap
    },
    {
      title: 'Garanci 2 Vjet',
      description: 'Mbështetje dhe garanci e plotë për 2 vjet',
      icon: Shield
    }
  ]

  const packages = [
    {
      name: 'Basic',
      size: '43"',
      price: '1,999',
      features: [
        'Full HD 1920x1080',
        'WiFi & HDMI',
        'Cloud Management',
        'Instalim falas',
        'Trajnim falas',
        'Garanci 1 vit'
      ],
      popular: false
    },
    {
      name: 'Professional',
      size: '50"',
      price: '2,399',
      features: [
        'Full HD 1920x1080',
        'WiFi, HDMI & USB',
        'Cloud Management',
        'Brightness 700 nits',
        'Instalim falas',
        'Trajnim falas',
        'Garanci 2 vjet',
        'Mbështetje prioritare'
      ],
      popular: true
    },
    {
      name: 'Premium',
      size: '55"',
      price: '2,899',
      features: [
        '4K Ultra HD',
        'WiFi, HDMI & USB',
        'Cloud Management Pro',
        'Brightness 700 nits',
        'Anti-glare coating',
        'Instalim falas',
        'Trajnim falas',
        'Garanci 2 vjet',
        'Mbështetje 24/7'
      ],
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'Sa kohë zgjat instalimi?',
      answer: 'Instalimi zgjat 2-3 orë. Ekipi ynë vjen në vendndodhjen tuaj, e instalon ekranin, e konfiguron sistemin, dhe ju trajnon si ta përdorni.'
    },
    {
      question: 'A më duhet internet?',
      answer: 'Po, për menaxhimin cloud ju nevojitet lidhje interneti (WiFi). Megjithatë, ekrani mund të luajë edhe përmbajtje të ruajtur lokalisht pa internet.'
    },
    {
      question: 'Sa lehtë është të ndryshoj përmbajtjen?',
      answer: 'Shumë lehtë! Përmes aplikacionit cloud, mund të ndryshoni përmbajtjen në 30 sekonda nga telefoni ose kompjuteri juaj.'
    },
    {
      question: 'Çfarë lloj përmbajtjeje mund të shfaq?',
      answer: 'Mund të shfaqni foto, video, prezantime PowerPoint, PDF, faqe web, dhe më shumë. Formatet e mbështetura: JPG, PNG, MP4, PDF, HTML.'
    },
    {
      question: 'A funksionon edhe jashtë (outdoor)?',
      answer: 'Modeli standard është për përdorim të brendshëm (indoor). Për outdoor kemi modele speciale me brightness më të lartë dhe mbrojtje nga uji. Kontaktoni për detaje.'
    },
    {
      question: 'Çfarë përfshin garancia?',
      answer: 'Garancia përfshin riparimin ose zëvendësimin falas të çdo defekti harduerik. Gjithashtu keni mbështetje teknike falas për çdo problem.'
    }
  ]

  return (
    <>
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 mr-2" />
                <span className="text-blue-200 text-sm font-medium">Produkti Ynë Kryesor</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ekran Reklamues Vertikal</h1>
              <p className="text-xl text-blue-100 mb-8">Zgjidhja perfekte për të promovuar biznesin tuaj me teknologji moderne dhe cilësi të lartë</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specifikimet Teknike</h2>
              <p className="text-lg text-gray-600">Teknologji moderne dhe performancë e lartë</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {technicalSpecs.map((spec, index) => {
                const Icon = spec.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                    <div className="font-bold text-gray-900">{spec.value}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veçoritë Kryesore</h2>
              <p className="text-lg text-gray-600">Gjithçka që ju nevojitet për sukses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zgjidhni Paketin Tuaj</h2>
              <p className="text-lg text-gray-600">Tre madhësi, një cilësi e shkëlqyer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative rounded-2xl p-8 ${pkg.popular ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-4 ring-blue-400 scale-105' : 'bg-white border-2 border-gray-200'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                      Më i Popullarizuar
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className={`text-sm font-semibold mb-2 ${pkg.popular ? 'text-blue-200' : 'text-gray-600'}`}>{pkg.name}</div>
                    <div className={`text-5xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>€{pkg.price}</div>
                    <div className={`text-sm ${pkg.popular ? 'text-blue-200' : 'text-gray-600'}`}>+ TVSH</div>
                    <div className={`text-lg font-bold mt-2 ${pkg.popular ? 'text-yellow-300' : 'text-blue-600'}`}>Ekran {pkg.size}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                        <span className={`text-sm ${pkg.popular ? 'text-blue-100' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakti" className={`block text-center py-3 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-yellow-400 hover:bg-yellow-500 text-blue-900' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                    Porosit Tani
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pyetje të Shpeshta</h2>
              <p className="text-lg text-gray-600">Përgjigje për pyetjet tuaja</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Gati për të Porositur?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Kontaktoni tani dhe merrni një konsultim falas!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center">
                WhatsApp Tani
              </a>
              <Link href="/kontakti" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center">
                Dërgoni Email
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
