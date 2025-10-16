'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }, [speed])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
