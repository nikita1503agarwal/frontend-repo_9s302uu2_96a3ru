import React from 'react'

const steps = [
  { title: 'Accept Contract', desc: 'Choose a mission issued by the GuildNet and review the specs.' },
  { title: 'Build Logic', desc: 'Use the visual block editor or write Python directly in the safe SVM.' },
  { title: 'Run → Grade → Earn →', desc: 'Submit to the AST evaluator, earn CRYPTOKEN, and climb the board.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="glitch-text mb-8 text-3xl font-extrabold md:text-4xl">How It Works</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-xl border border-white/10 bg-white/5 p-6 ring-1 ring-cyan-400/20 backdrop-blur">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400/30 to-purple-500/30 text-sm ring-1 ring-white/20">{i + 1}</div>
              <h3 className="text-lg font-semibold text-cyan-100">{s.title}</h3>
              <p className="mt-1 text-sm text-cyan-200/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
