'use client'

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arben Krasniqi',
      business: 'Kafeteria "Liqeni"',
      location: 'Mitrovicë',
      image: '👨‍💼',
      rating: 5,
      text: 'Ekrani dixhital na ka ndihmuar shumë! Tani mund të ndryshojmë menynë dhe ofertat çdo ditë. Klientët e duan dhe shitjet janë rritur 35%!'
    },
    {
      name: 'Besarta Hoxha',
      business: 'Sallon Bukurie "Elegance"',
      location: 'Prishtinë',
      image: '👩‍💼',
      rating: 5,
      text: 'Shërbimi ishte perfekt! Instalimi u krye brenda 2 orëve dhe ekipi më trajnoi si ta përdor. Tani promovoj çmimet dhe shërbimet e reja shumë lehtë.'
    },
    {
      name: 'Driton Berisha',
      business: 'Gym "Fitlife"',
      location: 'Prizren',
      image: '💪',
      rating: 5,
      text: 'Investimi më i mirë për biznesin tim! Anëtarët e ri vijnë duke parë ofertat në ekran. Cilësia është e shkëlqyer dhe mbështetja 24/7 është fantastike!'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-100 border border-yellow-300 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-2" />
            <span className="text-yellow-800 font-semibold">Klientët Tanë të Kënaqur</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Çfarë Thonë Klientët Tanë
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Biznese të suksesshme në të gjithë Kosovën që po përfitojnë nga ekranet tona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Bëhuni pjesë e bizneseve të suksesshme!</p>
          <a
            href="/kontakti"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
          >
            Porosit Tani
          </a>
        </div>
      </div>
    </section>
  )
}
