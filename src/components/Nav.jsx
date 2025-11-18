import { useEffect, useState } from 'react'
import { Menu, Shield, Globe, Zap, X } from 'lucide-react'

function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('site-nav')
      if (!nav) return
      if (window.scrollY > 10) {
        nav.classList.add('bg-black/60', 'backdrop-blur', 'border-b', 'border-white/10')
      } else {
        nav.classList.remove('bg-black/60', 'backdrop-blur', 'border-b', 'border-white/10')
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="site-nav" className="fixed inset-x-0 top-0 z-30 transition-colors">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <Shield className="h-6 w-6 text-emerald-400" />
          <span className="font-semibold">EdgeShield</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#network" className="hover:text-white transition">Network</a>
          <a href="#customers" className="hover:text-white transition">Customers</a>
          <a href="#developers" className="hover:text-white transition">Developers</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="text-white/80 hover:text-white text-sm">Log in</a>
          <a href="#signup" className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90">Sign up</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur text-white">
          <div className="px-6 py-4 space-y-3">
            <a href="#products" className="block">Products</a>
            <a href="#network" className="block">Network</a>
            <a href="#customers" className="block">Customers</a>
            <a href="#developers" className="block">Developers</a>
            <div className="pt-3 flex items-center gap-3">
              <a href="#login" className="text-white/80">Log in</a>
              <a href="#signup" className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold">Sign up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
