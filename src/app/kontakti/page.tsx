'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/siteConfig'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, User, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactMethods = [
    { icon: Phone, title: 'Telefoni', value: siteConfig.phone.display, link: `tel:${siteConfig.phone.tel}`, description: 'Na telefononi çdo kohë', highlight: false },
    { icon: MessageSquare, title: 'WhatsApp', value: siteConfig.phone.display, link: siteConfig.social.whatsapp, description: 'Mesazh i shpejtë', highlight: true },
    { icon: Mail, title: 'Email', value: siteConfig.email, link: `mailto:${siteConfig.email}`, description: 'Dërgoni email', highlight: false },
    { icon: MapPin, title: 'Vendndodhja', value: siteConfig.address.full, link: '#', description: 'Vizitoni zyrën tonë', highlight: false }
  ]

  const workingHours = [
    { day: 'E Hënë - E Premte', hours: '09:00 - 18:00' },
    { day: 'E Shtunë', hours: '10:00 - 15:00' },
    { day: 'E Diel', hours: 'Mbyllur' }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Na Kontaktoni</h1>
              <p className="text-xl text-blue-100 mb-8">Jemi këtu për t'ju ndihmuar! Dërgoni një mesazh ose na telefononi direkt.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                const highlightClass = method.highlight ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl' : 'bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl'
                const iconClass = method.highlight ? 'text-white' : 'text-blue-600'
                const titleClass = method.highlight ? 'text-green-100' : 'text-gray-600'
                const valueClass = method.highlight ? 'text-white' : 'text-gray-900'
                const descClass = method.highlight ? 'text-green-100' : 'text-gray-500'

                return (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block p-6 rounded-2xl transition-all hover:scale-105 ${highlightClass}`}
                  >
                    <Icon className={`w-10 h-10 mb-3 ${iconClass}`} />
                    <div className={`text-sm font-semibold mb-1 ${titleClass}`}>{method.title}</div>
                    <div className={`font-bold mb-1 text-sm ${valueClass}`}>{method.value}</div>
                    <div className={`text-xs ${descClass}`}>{method.description}</div>
                  </a>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dërgoni Mesazh</h2>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-900">Mesazhi u dërgua!</div>
                      <div className="text-sm text-green-700">Do t'ju kontaktojmë së shpejti.</div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emri Juaj *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Emri dhe Mbiemri"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefoni *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+383 49 123 456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kompania (opsionale)</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Emri i kompanisë"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mesazhi Juaj *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tregoni më shumë për projektin tuaj..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <span>Duke dërguar...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Dërgo Mesazhin</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informacione</h2>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 mb-6 shadow-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Orari i Punës
                  </h3>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-semibold text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg border-2 border-green-200 mb-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">Përgjigje e Shpejtë!</h3>
                  <p className="text-gray-600 mb-4">Për përgjigje të menjëhershme, na shkruani në WhatsApp. Zakonisht përgjigjemi brenda 5 minutave!</p>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-center transition-all hover:scale-105"
                  >
                    Hap WhatsApp
                  </a>
                </div>

                <div className="p-6 bg-blue-900 text-white rounded-2xl">
                  <h3 className="font-semibold text-lg mb-3">🎁 Ofertë Speciale!</h3>
                  <p className="text-blue-100 text-sm">
                    Kontaktoni këtë muaj dhe merrni <span className="font-bold text-yellow-300">10% zbritje</span> në çdo paketë!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Na Gjeni Këtu</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <div className="text-xl font-bold text-gray-900 mb-2">
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </div>
                    <p className="text-gray-600">Harta do të shtohet së shpejti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
