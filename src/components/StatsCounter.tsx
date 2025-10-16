'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) setStartCount(true)
  }, [inView])

  const stats = [
    { value: 40, suffix: '%', label: 'Rritje e Shitjeve', prefix: '+' },
    { value: 100, suffix: '+', label: 'Klientë të Kënaqur', prefix: '' },
    { value: 24, suffix: '/7', label: 'Mbështetje', prefix: '' },
    { value: 2, suffix: ' Vjet', label: 'Garanci', prefix: '' }
  ]

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            {startCount ? (
              <>
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} />
                {stat.suffix}
              </>
            ) : (
              <>
                {stat.prefix}0{stat.suffix}
              </>
            )}
          </div>
          <div className="text-sm md:text-base text-blue-200">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
