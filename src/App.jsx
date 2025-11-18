import Nav from './components/Nav'
import Hero from './components/Hero'
import { Products, Network, CTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Network />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} EdgeShield. Inspired by the best of the modern edge.</p>
      </footer>
    </div>
  )
}

export default App
