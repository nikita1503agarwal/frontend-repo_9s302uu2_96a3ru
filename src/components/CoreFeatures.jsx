import React from 'react'

const features = [
  { title: 'Visual Code Block Editor', icon: '🧩' },
  { title: 'Secure Virtual Machine OS', icon: '🛡️' },
  { title: 'AST Python Evaluator', icon: '🧠' },
  { title: 'Cyberpunk Terminal Simulator', icon: '⌨️' },
  { title: 'Weekly Leaderboard & CRYPTOKEN', icon: '🏆' },
  { title: 'Marketplace & Dual Currency', icon: '🛒' },
]

export default function CoreFeatures() {
  return (
    <section id="features" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="glitch-text mb-8 text-3xl font-extrabold md:text-4xl">Core Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 ring-1 ring-cyan-400/20 backdrop-blur transition shadow-[0_0_0px_rgba(0,229,255,0)] hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]">
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-100">{f.title}</h3>
              <div className="pointer-events-none absolute -inset-px opacity-0 mix-blend-screen transition group-hover:opacity-100">
                <div className="absolute -inset-px animate-glitch-scan bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
