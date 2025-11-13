import React from 'react'

export default function Schools() {
  const items = [
    'Classroom dashboard',
    'Auto-grading',
    'Weekly reset cycles',
    'Safe ads mode (COPPA compliant)',
    'Role-based access',
    'Cloud sync',
  ]
  return (
    <section id="schools" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="glitch-text mb-8 text-3xl font-extrabold md:text-4xl">Features for Schools</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4 ring-1 ring-cyan-400/20 backdrop-blur">
              <span className="text-cyan-100">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
