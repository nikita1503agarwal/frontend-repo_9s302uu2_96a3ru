import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#090E1C] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400/60 to-purple-500/60 ring-1 ring-white/20" />
          <div>
            <p className="font-black tracking-wider">GuildNet.EDU</p>
            <p className="text-xs text-cyan-300/70">CYBER CONTRACTOR: Classroom Edition</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-cyan-100/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="mailto:contact@guildnet.edu" className="hover:text-white">contact@guildnet.edu</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.08),transparent_60%)]" />
    </footer>
  )
}
