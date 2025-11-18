import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D Spline scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live cyber protection at planet scale
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">
            Security, performance, and reliability for anything connected to the Internet
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70">
            A futuristic experience powered by GSAP and WebGL. Smooth scroll, animated reveals, and a cinematic 3D hero bring your brand to life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Start for free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-6 py-3 text-sm hover:bg-white/10 transition"
            >
              Explore products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
