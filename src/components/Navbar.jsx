import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0F1F]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group inline-flex items-center gap-3">
          <span className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400/60 to-purple-500/60 ring-1 ring-white/20" />
          <span className="font-black tracking-wider text-white">GuildNet<span className="text-cyan-400">.EDU</span></span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-cyan-100/80 md:flex">
          <a href="#overview" className="hover:text-white">Overview</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#trailer" className="hover:text-white">Trailer</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#schools" className="hover:text-white">Schools</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="#join" className="relative hidden rounded-md px-4 py-2 text-sm font-semibold text-cyber-black md:inline-flex">
          <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#00E5FF] to-[#00B3CC] opacity-90 blur-[1px]" />
          <span className="relative">Join the GuildNet</span>
        </a>
      </div>
    </header>
  )
}
