'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FadeIn from '@/components/FadeIn'
import AnimatedBackground from '@/components/AnimatedBackground'
import StatsCounter from '@/components/StatsCounter'
import GlassCard from '@/components/GlassCard'
import TiltCard from '@/components/TiltCard'
import ScrollProgress from '@/components/ScrollProgress'
import ParallaxSection from '@/components/ParallaxSection'
import MagneticButton from '@/components/MagneticButton'
import Product3D from '@/components/Product3D'
import ContentSwitcher from '@/components/ContentSwitcher'
import TypingText from '@/components/TypingText'
import SmoothScroll from '@/components/SmoothScroll'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import {
  Monitor, Zap, Shield, Headphones, TrendingUp,
  CheckCircle, ArrowRight, Sparkles, Star,
  Building2, Store, UtensilsCrossed, Dumbbell,
  Play, Award, Rocket, Target, Layers, Cpu, Wifi
} from 'lucide-react'

export default function HomePage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Rritni Shitjet',
      description: 'Promovoni ofertat dhe produktet tuaja në kohë reale për të rritur shitjet deri në 40%',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Menaxhim i Lehtë',
      description: 'Ndryshoni përmbajtjen nga telefoni ose kompjuteri juaj në çdo kohë, kudo',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Monitor,
      title: 'Cilësi Premium',
      description: 'Ekrane Full HD/4K me ngjyra të gjalla dhe kontrast të lartë për pamje perfekte',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Headphones,
      title: 'Mbështetje Lokale',
      description: 'Ekipi ynë në Mitrovicë është gjithmonë gati të ju ndihmojë',
      gradient: 'from-orange-500 to-red-500'
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
    { icon: Monitor, text: 'Full HD / 4K Display' },
    { icon: Layers, text: 'Cloud Management' },
    { icon: Wifi, text: 'WiFi & HDMI' },
    { icon: Cpu, text: 'Brightness: 500-700 nits' },
    { icon: Rocket, text: 'Instalim Falas' },
    { icon: Award, text: 'Trajnim Falas' },
    { icon: Shield, text: 'Garanci 2 Vjet' },
    { icon: Headphones, text: 'Mbështetje 24/7' }
  ]

  const highlights = [
    { icon: Award, text: 'Cilësi e Garantuar' },
    { icon: Rocket, text: 'Instalim i Shpejtë' },
    { icon: Target, text: 'Rezultate të Dukshme' }
  ]

  return (
    <SmoothScroll>
      <ScrollProgress />
      <Header />

      <main className="overflow-hidden">
        <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden flex items-center">
          <AnimatedBackground />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40"></div>

          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="text-center lg:text-left">
                  <ParallaxSection speed={0.3}>
                    <div className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/30 rounded-full px-6 py-3 mb-8 shadow-xl hover:scale-105 transition-transform">
                      <Sparkles className="w-5 h-5 mr-2 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                      <span className="text-white text-sm font-semibold">
                        Teknologji e Ardhshme Është Këtu
                      </span>
                    </div>
                  </ParallaxSection>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                    <TypingText 
                      text="Transformoni " 
                      speed={80}
                      className="text-white"
                    />
                    <br />
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-transparent bg-clip-text">
                      Biznesin Tuaj
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
                    Me ekrane dixhitale që rrisin shitjet, angazhojnë klientët, dhe ndërtojnë branding të fuqishëm.
                  </p>

                  <ParallaxSection speed={0.2}>
                    <div className="flex flex-wrap gap-4 mb-8">
                      {highlights.map((highlight, index) => {
                        const Icon = highlight.icon
                        return (
                          <FadeIn key={index} delay={index * 0.2}>
                            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-110">
                              <Icon className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm font-medium">{highlight.text}</span>
                            </div>
                          </FadeIn>
                        )
                      })}
                    </div>
                  </ParallaxSection>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                    <MagneticButton
                      href="/kontakti"
                      className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-400/50 transition-all inline-flex items-center justify-center overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Porosit Tani
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </MagneticButton>
                    
                    <MagneticButton
                      href="/produkt"
                      className="group backdrop-blur-md bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all inline-flex items-center justify-center"
                    >
                      <Play className="mr-2 w-5 h-5 group-hover:scale-125 transition-transform" />
                      Shiko Demo
                    </MagneticButton>
                  </div>

                  <StatsCounter />
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <div className="relative h-[600px]">
                  <TiltCard 
                    scale={1.02}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    className="relative h-full"
                  >
                    <GlassCard className="p-4 h-full">
                      <Product3D />
                    </GlassCard>
                    
                    <div className="absolute -top-6 -right-6 backdrop-blur-xl bg-yellow-400/90 text-blue-900 px-8 py-4 rounded-2xl shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                      <div className="text-sm font-semibold">Nga</div>
                      <div className="text-4xl font-black">{siteConfig.product.currency}{siteConfig.product.price}</div>
                      <div className="text-xs opacity-80">+ TVSH</div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 backdrop-blur-xl bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span className="font-bold text-sm">Online Tani</span>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-2 h-3 bg-white/70 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <ParallaxSection speed={0.1}>
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </ParallaxSection>

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-4 hover:scale-110 transition-transform">
                  Përse Na Zgjedhin Bizneset
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Përse DigiScreen Kosovo?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Teknologji e avancuar, mbështetje lokale, rezultate të garantuara
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <FadeIn key={index} delay={index * 0.15}>
                    <TiltCard scale={1.08} tiltMaxAngleX={12} tiltMaxAngleY={12}>
                      <div className="group relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all">
                        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                        <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </TiltCard>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <AnimatedBackground />
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-4 hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="font-semibold">Zgjidhje Interactive</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Shikoni Si Funksionon
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Ndërroni midis përdorimeve të ndryshme dhe shikoni ndryshimin
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ContentSwitcher />
            </FadeIn>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
          <ParallaxSection speed={0.15}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
            </div>
          </ParallaxSection>

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="inline-block bg-purple-100 text-purple-600 px-6 py-2 rounded-full font-semibold mb-4">
                  Për Çdo Industri
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Ideal për Çdo Biznes
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Nga restorante tek qendra sportive - ekranet funksionojnë kudo
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <FadeIn key={index} delay={index * 0.1}>
                    <TiltCard scale={1.08} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                      <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-200 h-full transition-all hover:shadow-2xl">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-600">
                          {useCase.description}
                        </p>
                      </div>
                    </TiltCard>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="py-20 md:py-32 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeIn>
                <div className="text-center mb-16">
                  <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-4">
                    Paketa Komplette
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Çfarë Përfshihet?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Gjithçka që nevojitet për të filluar - pa kosto të fshehura
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <FadeIn key={index} delay={index * 0.05}>
                      <TiltCard scale={1.05} tiltMaxAngleX={8} tiltMaxAngleY={8}>
                        <div className="group flex flex-col items-center text-center gap-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-8 rounded-2xl transition-all border border-green-100 hover:shadow-xl h-full">
                          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <span className="text-base text-gray-800 font-semibold">{feature.text}</span>
                        </div>
                      </TiltCard>
                    </FadeIn>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 md:py-40 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
          <AnimatedBackground />
          
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center z-10">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <ParallaxSection speed={0.2}>
                  <Star className="w-24 h-24 text-yellow-400 mx-auto mb-8 animate-spin" style={{ animationDuration: '10s' }} />
                </ParallaxSection>
                
                <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                  Gati për të Filluar?
                </h2>
                <p className="text-2xl md:text-3xl text-blue-100 mb-16 leading-relaxed">
                  Bëhuni pjesë e 100+ bizneseve që po rriten me DigiScreen Kosovo
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <MagneticButton
                    href={siteConfig.social.whatsapp}
                    className="group bg-green-500 hover:bg-green-600 text-white px-14 py-7 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-green-500/50 transition-all inline-flex items-center justify-center"
                  >
                    <span>WhatsApp Tani</span>
                    <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </MagneticButton>
                  
                  <MagneticButton
                    href="/kontakti"
                    className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-14 py-7 rounded-2xl font-bold text-2xl transition-all inline-flex items-center justify-center"
                  >
                    Dërgoni Email
                  </MagneticButton>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  )
}
