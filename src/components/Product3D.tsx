'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Product3D() {
  const [rotation, setRotation] = useState(0)
  const [activeView, setActiveView] = useState(0)

  const views = [
    { image: '/images/product-1.jpg', label: 'Vista 1' },
    { image: '/images/product-2.jpg', label: 'Vista 2' },
    { image: '/images/product-3.jpg', label: 'Vista 3' }
  ]

  const rotate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setRotation(prev => prev - 120)
      setActiveView(prev => (prev - 1 + views.length) % views.length)
    } else {
      setRotation(prev => prev + 120)
      setActiveView(prev => (prev + 1) % views.length)
    }
  }

  return (
    <div className="relative w-full h-full perspective-[2000px]">
      <div 
        className="relative w-full h-full transition-transform duration-1000 ease-out transform-style-3d"
        style={{ 
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {views.map((view, index) => (
          <div
            key={index}
            className="absolute inset-0 backface-hidden"
            style={{
              transform: `rotateY(${index * 120}deg) translateZ(300px)`,
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={view.image}
                alt={view.label}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">{view.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={() => rotate('left')}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-xl"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={() => rotate('right')}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-xl"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {views.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === activeView ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
