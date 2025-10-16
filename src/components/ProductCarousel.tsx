'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const products = [
    {
      image: '/images/product-1.jpg',
      title: 'Multi-Display Setup',
      description: 'Perfekt për restorante dhe qendra tregtare'
    },
    {
      image: '/images/product-2.jpg',
      title: 'Dual-Sided Display',
      description: 'Shfaq përmbajtje nga të dy anët'
    },
    {
      image: '/images/product-3.jpg',
      title: 'Portrait Display',
      description: 'Ideal për hyrje dhe korridore'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)

  return (
    <div className="relative group">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        {products.map((product, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-bold text-xl mb-1">{product.title}</h3>
              <p className="text-white/90 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
