import { useEffect, useRef } from 'react'
import { Shield, Globe, Zap, Rocket, Server, Lock } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    items.forEach((item, i) => {
      gsap.set(item, { y: 24, opacity: 0 })
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.05,
        ease: 'power3.out',
      })
    })
  }, [])
  return ref
}

function ProductCard({ icon: Icon, title, desc }) {
  return (
    <div data-reveal className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

export function Products() {
  const ref = useReveal()
  return (
    <section id="products" ref={ref} className="relative bg-black py-24">
      <div className="container mx-auto px-6">
        <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Build on a global edge network</h2>
        <p data-reveal className="mt-3 text-white/70 max-w-2xl">Protect, accelerate, and observe apps with a unified platform. Designed for developers and loved by enterprises.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard icon={Shield} title="DDoS & WAF" desc="Always-on protection blocks threats before they reach your origin." />
          <ProductCard icon={Rocket} title="Edge Compute" desc="Run serverless functions close to users for blazing fast responses." />
          <ProductCard icon={Globe} title="Smart CDN" desc="Global anycast routes traffic across our ultra-available backbone." />
          <ProductCard icon={Server} title="Zero Trust" desc="Secure access for apps, users, and devices with least privilege." />
          <ProductCard icon={Zap} title="Load Balancing" desc="Keep services resilient with multi-region failover and health checks." />
          <ProductCard icon={Lock} title="TLS & Identity" desc="Automatic certs, mTLS, and identity-aware policies built-in." />
        </div>
      </div>
    </section>
  )
}

export function Network() {
  const ref = useReveal()
  return (
    <section id="network" ref={ref} className="relative bg-gradient-to-b from-black to-[#07070a] py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 data-reveal className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The network that never sleeps</h2>
            <p data-reveal className="mt-4 text-white/70">Hundreds of points of presence, tens of Tbps capacity, and real-time intelligence keep your apps fast and safe anywhere on earth.</p>
            <ul className="mt-6 space-y-3 text-white/70">
              <li data-reveal>• 300+ cities • 100+ countries • Single Anycast IP</li>
              <li data-reveal>• Built-in caching, routing, and protocol optimizations</li>
              <li data-reveal>• AI-powered bot mitigation and anomaly detection</li>
            </ul>
          </div>
          <div>
            <div data-reveal className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  const ref = useReveal()
  return (
    <section ref={ref} className="relative bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-purple-500/10 p-10 text-center">
          <h3 data-reveal className="text-3xl font-bold text-white">Ready to ship at light speed?</h3>
          <p data-reveal className="mt-3 text-white/70 max-w-2xl mx-auto">Deploy to the edge in seconds. No servers to manage. No tradeoffs on security.</p>
          <a data-reveal href="#" className="inline-block mt-8 rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90">Create your free account</a>
        </div>
      </div>
    </section>
  )
}
