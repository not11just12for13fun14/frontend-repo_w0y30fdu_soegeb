import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />

        {/* Footer */}
        <footer className="border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-600">© {new Date().getFullYear()} Easy.School — All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <a href="#" className="hover:text-blue-600">Privacy</a>
                <a href="#" className="hover:text-blue-600">Terms</a>
                <a href="#" className="hover:text-blue-600">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
