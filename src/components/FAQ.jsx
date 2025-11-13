import React from 'react'

const faqs = [
  {
    q: 'Is this safe for students?',
    a: 'Yes. The Classroom Edition runs in a sandboxed Secure Virtual Machine with COPPA-friendly settings and role-based access.'
  },
  {
    q: 'Does this use real Python?',
    a: 'Absolutely. Code is parsed with an AST-first evaluator and executed in the SVM with strict resource policies.'
  },
  {
    q: 'How does GuildNet CRYPTOKEN work?',
    a: 'Students earn classroom-only tokens for completed missions. Tokens reset weekly with the leaderboard.'
  },
  {
    q: 'Does it track data?',
    a: 'Only what is necessary for classroom functionality. No third-party tracking for students.'
  },
  {
    q: 'How often does leaderboard reset?',
    a: 'Weekly. Cycles keep competition fresh and fair for classrooms.'
  },
  {
    q: 'What devices are supported?',
    a: 'Modern browsers on laptops, Chromebooks, and tablets. Keyboard recommended for terminal missions.'
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="glitch-text mb-8 text-3xl font-extrabold md:text-4xl">FAQ</h2>
        <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-cyan-400/20 backdrop-blur">
          {faqs.map((f, i) => (
            <details key={f.q} className="group open:bg-white/5">
              <summary className="cursor-pointer list-none px-6 py-4 text-cyan-100 transition hover:bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{f.q}</span>
                  <span className="text-cyan-300">{i % 2 === 0 ? '▸' : '▾'}</span>
                </div>
              </summary>
              <div className="px-6 pb-5 text-sm text-cyan-200/80">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
