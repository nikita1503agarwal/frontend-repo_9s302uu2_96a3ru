import React from 'react'

export default function Overview() {
  return (
    <section id="overview" className="relative bg-[#0A0F1F] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="glitch-text text-3xl font-extrabold md:text-4xl">Game Overview</h2>
          <p className="text-cyan-100/90">
            Learn Python through contracts issued by the mysterious GuildNet. Build logic with a visual block editor, safely execute in a Secure Virtual Machine OS, and validate solutions with an AST-driven evaluator.
          </p>
          <p className="text-cyan-200/80">
            Earn CRYPTOKEN by solving missions and climb the classroom leaderboard each week.
          </p>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-cyan-400/40 bg-white/5 p-4 backdrop-blur">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <div className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-[#0B1329] to-[#0E1734] p-4">
              <div className="grid h-full grid-cols-12 gap-3">
                <div className="col-span-4 rounded-md bg-black/40 ring-1 ring-white/10" />
                <div className="col-span-8 space-y-3">
                  <div className="h-8 rounded-md bg-black/40 ring-1 ring-white/10" />
                  <div className="h-8 rounded-md bg-black/40 ring-1 ring-white/10" />
                  <div className="h-8 rounded-md bg-black/40 ring-1 ring-white/10" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
