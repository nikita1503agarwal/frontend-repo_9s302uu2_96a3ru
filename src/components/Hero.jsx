import React from 'react'
import Spline from '@splinetool/react-spline'

const NeonButton = ({ children, href = '#', variant = 'cyan' }) => {
  const color = variant === 'purple' ? 'from-[#9D4BFF] to-[#6E2BFF]' : 'from-[#00E5FF] to-[#00B3CC]'
  return (
    <a href={href} className="group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-semibold tracking-wide text-cyber-black transition-transform duration-200 active:scale-95">
      <span className={`absolute inset-0 rounded-md bg-gradient-to-r ${color} opacity-80 blur-[2px]`}></span>
      <span className={`relative z-10 rounded-md bg-gradient-to-r ${color} px-6 py-3 text-cyber-black shadow-[0_0_25px_rgba(0,229,255,0.65)] group-hover:shadow-[0_0_35px_rgba(0,229,255,0.95)] transition-shadow`}>{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-cyan-400/40"></span>
      <span className="pointer-events-none absolute inset-0 opacity-0 group-active:opacity-100">
        <span className="absolute inset-0 animate-ripple"></span>
      </span>
    </a>
  )
}

export default function Hero() {
  const title = 'CYBER CONTRACTOR: RISE OF THE GUILDNET'
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0F1F] text-white">
      {/* Cyber grid + particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(157,75,255,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(0,229,255,0.1),transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="scanlines pointer-events-none absolute inset-0 opacity-15 mix-blend-screen"></div>
      </div>

      {/* Spline 3D asset */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-90">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-28 md:pt-40">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-ping-slow rounded-full bg-cyan-400"></span>
            Classroom Edition // Access Granted
          </div>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] md:text-6xl">
            <span className="glitch-text block" data-text={title}>{title}</span>
          </h1>

          <p className="mt-4 md:text-lg text-cyan-100/90">
            A Cyberpunk Python Learning Simulator. Build logic, deploy into a safe virtual machine, and climb the weekly GuildNet leaderboard.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <NeonButton href="#trailer">Play Demo</NeonButton>
            <NeonButton href="#join" variant="purple">Join the GuildNet</NeonButton>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-500/30 ring-1 ring-white/20" />
            <div>
              <p className="text-sm text-cyan-100">Safe • COPPA-friendly • Built for classrooms</p>
              <p className="text-xs text-cyan-200/70">Students never pay. Teachers control the mission parameters.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0F1F] to-transparent" />
    </section>
  )
}
