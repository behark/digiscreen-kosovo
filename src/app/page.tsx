'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import {
  Monitor, Zap, Headphones, TrendingUp,
  CheckCircle, ArrowRight, Sparkles, Star,
  Building2, Store, UtensilsCrossed, Dumbbell
} from 'lucide-react'

export default function HomePage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Rritni Shitjet',
      description: 'Promovoni ofertat dhe produktet tuaja në kohë reale për të rritur shitjet deri në 40%'
    },
    {
      icon: Zap,
      title: 'Menaxhim i Lehtë',
      description: 'Ndryshoni përmbajtjen nga telefoni ose kompjuteri juaj në çdo kohë, kudo'
    },
    {
      icon: Monitor,
      title: 'Cilësi Premium',
      description: 'Ekrane Full HD/4K me ngjyra të gjalla dhe kontrast të lartë për pamje perfekte'
    },
    {
      icon: Headphones,
      title: 'Mbështetje Lokale',
      description: 'Ekipi ynë në Mitrovicë është gjithmonë gati të ju ndihmojë'
    }
  ]

  const useCases = [
    {
      icon: UtensilsCrossed,
      title: 'Restorante & Kafene',
      description: 'Shfaqni menynë dixhitale, ofertat e ditës dhe promovime speciale'
    },
    {
      icon: Store,
      title: 'Dyqane',
      description: 'Prezantoni produktet e reja, çmimet dhe ofertat në kohë reale'
    },
    {
      icon: Building2,
      title: 'Hotele & Zyra',
      description: 'Informoni vizitorët, shfaqni lajme dhe ndërtoni branding'
    },
    {
      icon: Dumbbell,
      title: 'Qendra Sportive',
      description: 'Motivoni anëtarët me quote, statistika dhe oferta ekskluzive'
    }
  ]

  const features = [
    'Full HD / 4K Display',
    'Cloud Management',
    'WiFi & HDMI',
    'Brightness: 500-700 nits',
    'Instalim Falas',
    'Trajnim Falas',
    'Garanci 2 Vjet',
    'Mbështetje 24/7'
  ]

  return (
    <>
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>

          <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-blue-200 text-sm font-medium">
                    Teknologji Moderne për Biznesin Tuaj
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transformoni Biznesin Tuaj me{' '}
                  <span className="text-yellow-400">Ekrane Dixhitale</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  Rritni shitjet dhe angazhimin e klientëve me ekrane reklamuese të fuqishme.
                  Instalim falas, trajnim falas, dhe mbështetje lokale në Mitrovicë!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/kontakti" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center">
                    Porosit Tani
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link href="/produkt" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center">
                    Shiko Detajet
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">2</div>
                    <div className="text-sm text-blue-200">Vjet Garanci</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-blue-200">Mbështetje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">100%</div>
                    <div className="text-sm text-blue-200">Instalim Falas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">🇽🇰</div>
                    <div className="text-sm text-blue-200">Lokal</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Monitor className="w-32 h-32 text-white/50" />
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl shadow-lg">
                    <div className="text-sm font-semibold">Vetëm</div>
                    <div className="text-3xl font-bold">{siteConfig.product.currency}{siteConfig.product.price}</div>
                    <div className="text-xs">+ TVSH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Përse DigiScreen Kosovo?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Zgjidhja më e mirë për biznesin tuaj në Kosovë</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ideal për Çdo Biznes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ekranet dixhitale funksionojnë në të gjitha industritë</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm">{useCase.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Çfarë Përfshihet?</h2>
                <p className="text-lg text-gray-600">Gjithçka që ju nevojitet për të filluar</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Gati për të Filluar?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Kontaktoni tani për një konsultim falas dhe shikoni si mund t&apos;ju ndihmojmë!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center">WhatsApp Tani</a>
              <Link href="/kontakti" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center">Dërgoni Email</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
