import React from 'react'

interface StatItem {
  number: string
  label: string
}

const stats: StatItem[] = [
  { number: '5+', label: 'Years Experience' },
  { number: '90+', label: 'Satisfied Clients' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '10+', label: 'Skilled Workforce' },
]

export default function Stats() {
  return (
    <section className="w-full bg-color-azure-34 px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-8 border border-color-azure-34">
              <div className="text-5xl font-bold text-white leading-tight mb-3">
                {stat.number}
              </div>
              <div className="text-white text-base font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
