import React from 'react'

export default function JoinCTA() {
  return (
    <section id="join" className="relative bg-[#0A0F1F] py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-400/40 bg-white/5 p-8 text-center ring-1 ring-cyan-400/20 backdrop-blur">
        <h3 className="glitch-text text-2xl font-extrabold md:text-3xl">Join the GuildNet</h3>
        <p className="mt-2 text-cyan-200/80">Teachers: request early access and deploy missions to your classroom.</p>
        <form className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input className="col-span-2 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-1 ring-cyan-400/20 placeholder:text-cyan-300/40" placeholder="Your school email" />
          <button className="rounded-md bg-gradient-to-r from-[#00E5FF] to-[#00B3CC] px-6 py-3 font-semibold text-cyber-black shadow-[0_0_20px_rgba(0,229,255,0.45)] transition hover:shadow-[0_0_28px_rgba(0,229,255,0.75)] active:scale-95">Request Access</button>
        </form>
      </div>
    </section>
  )
}
