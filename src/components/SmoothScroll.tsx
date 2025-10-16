'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number

    const smoothScroll = () => {
      const scrollContainer = scrollRef.current
      if (!scrollContainer) return

      let currentScroll = window.scrollY
      let targetScroll = window.scrollY
      const ease = 0.1

      const animate = () => {
        currentScroll += (targetScroll - currentScroll) * ease
        
        if (Math.abs(targetScroll - currentScroll) > 0.5) {
          rafId = requestAnimationFrame(animate)
        }
      }

      const handleScroll = () => {
        targetScroll = window.scrollY
        if (!rafId) {
          rafId = requestAnimationFrame(animate)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        cancelAnimationFrame(rafId)
      }
    }

    const cleanup = smoothScroll()
    return cleanup
  }, [])

  return <div ref={scrollRef}>{children}</div>
}
