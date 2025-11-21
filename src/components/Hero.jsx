import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 text-center max-w-3xl mx-auto pt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          BlaqGPT
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100/90">
          An accessible, culturally-aware AI assistant. Chat, create, and build ideas affordably.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-8 md:mt-10 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
        <spline-viewer style={{ width: '100%', height: '360px' }} url="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"></spline-viewer>
      </div>
    </section>
  )
}

export default Hero
