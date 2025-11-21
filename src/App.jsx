import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Chat from './components/Chat'
import Pricing from './components/Pricing'

function App() {
  useEffect(() => {
    // Ensure Spline viewer script is available
    const id = 'spline-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.type = 'module'
      s.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js'
      document.body.appendChild(s)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-extrabold tracking-tight">BlaqGPT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-blue-200">
            <a href="#chat" className="hover:text-white">Chat</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl">Sign in</button>
        </header>

        <Hero />

        <div id="chat" className="mt-10 md:mt-16">
          <Chat />
        </div>

        <div id="pricing" className="mt-16 md:mt-24">
          <Pricing />
        </div>

        <footer className="mt-20 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} BlaqGPT • Accessible AI for everyone
        </footer>
      </div>
    </div>
  )
}

export default App
