'use client'

import { useState } from 'react'
import Image from 'next/image'
import TiltCard from './TiltCard'
import FadeIn from './FadeIn'
import { X } from 'lucide-react'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: '/images/product-1.jpg', title: 'Multi-Display Setup' },
    { src: '/images/product-2.jpg', title: 'Dual-Sided Display' },
    { src: '/images/product-3.jpg', title: 'Portrait Display' }
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <TiltCard scale={1.05} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div
                onClick={() => setSelectedImage(index)}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </TiltCard>
          </FadeIn>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[3/4]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
