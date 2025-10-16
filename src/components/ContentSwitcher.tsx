'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Monitor, Utensils, Building2, Dumbbell } from 'lucide-react'

export default function ContentSwitcher() {
  const [activeContent, setActiveContent] = useState(0)

  const contents = [
    {
      icon: Monitor,
      title: 'Dashboard',
      description: 'Menaxhoni të gjitha ekranet nga një vend',
      preview: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      icon: Utensils,
      title: 'Restorante',
      description: 'Menytë dixhitale që tërheqin klientë',
      preview: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      icon: Building2,
      title: 'Zyra',
      description: 'Komunikim efektiv me punonjësit',
      preview: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: Dumbbell,
      title: 'Gym',
      description: 'Motivoni anëtarët me statistika live',
      preview: 'bg-gradient-to-br from-pink-500 to-purple-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        {contents.map((content, index) => {
          const Icon = content.icon
          return (
            <button
              key={index}
              onClick={() => setActiveContent(index)}
              className={`w-full text-left p-6 rounded-2xl transition-all ${
                activeContent === index
                  ? 'bg-white shadow-2xl scale-105'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  activeContent === index ? 'bg-blue-600' : 'bg-gray-200'
                } transition-colors`}>
                  <Icon className={`w-7 h-7 ${
                    activeContent === index ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-1 ${
                    activeContent === index ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{content.description}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
        {contents.map((content, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              activeContent === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } ${content.preview} flex items-center justify-center`}
          >
            <div className="text-white text-center p-8">
              <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
              <p className="text-xl">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
