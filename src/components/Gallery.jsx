import React from 'react'

const items = [
  'SVM Desktop',
  'Workspace Block Editor',
  'Terminal',
  'Cryptomart',
  'Leaderboard',
  'Achievement Badges',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="glitch-text mb-8 text-3xl font-extrabold md:text-4xl">Screenshots</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((label) => (
            <div key={label} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0C1429] to-[#0A0F1F] p-3 ring-1 ring-cyan-400/20">
              <div className="aspect-video rounded-lg border border-white/10 bg-black/40"></div>
              <div className="mt-3 text-sm text-cyan-200/80">{label}</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 animate-glitch-scan bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
