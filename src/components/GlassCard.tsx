'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div 
      className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 ${className}`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      {children}
    </div>
  )
}
