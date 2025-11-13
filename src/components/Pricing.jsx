import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="glitch-text mb-8 text-3xl font-extrabold md:text-4xl">Pricing (Schools & Teachers)</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-cyan-400/20 backdrop-blur">
            <h3 className="text-xl font-semibold text-cyan-100">Free</h3>
            <p className="text-sm text-cyan-200/80">Students do not pay. Ever.</p>
            <ul className="mt-4 space-y-2 text-sm text-cyan-100">
              <li>• Single teacher</li>
              <li>• Max 10 students</li>
              <li>• Basic features</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0C1429] to-[#0A0F1F] p-6 ring-1 ring-cyan-400/40">
            <h3 className="text-xl font-semibold text-cyan-100">Pro School</h3>
            <p className="text-sm text-cyan-200/80">Unlock powerful controls for classrooms.</p>
            <ul className="mt-4 space-y-2 text-sm text-cyan-100">
              <li>• Unlimited students</li>
              <li>• Custom tasks</li>
              <li>• Analytics dashboard</li>
              <li>• Priority reset cycles</li>
              <li>• Custom domain</li>
              <li>• Safe Ads disabled (optional)</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-cyan-300/70">Note: Students DO NOT pay anything.</p>
      </div>
    </section>
  )
}
