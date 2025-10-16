'use client'

import { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'

interface TiltCardProps {
  children: ReactNode
  className?: string
  scale?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
}

export default function TiltCard({ 
  children, 
  className = '',
  scale = 1.05,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10
}: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={2500}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="24px"
      className={className}
    >
      {children}
    </Tilt>
  )
}
