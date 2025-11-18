import { Menu, School, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <School className="h-5 w-5" />
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-800">Easy<span className="text-blue-600">.School</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1">Resources <ChevronDown className="h-4 w-4" /></a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors">Sign in</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-sm hover:shadow md:hover:shadow-blue-200/50 transition-all">Get Started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}
