export default function CTA() {
  return (
    <section id="cta" className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Everything your school needs. One subscription.</h2>
            <p className="mt-4 text-blue-100 text-lg">Get started in minutes with our guided onboarding. No credit card required.</p>
            <form className="mt-8 sm:flex gap-3">
              <input type="email" required placeholder="Work email" className="w-full sm:max-w-xs rounded-lg border-0 px-4 py-3 text-slate-900 placeholder:text-slate-500 shadow-sm focus:ring-2 focus:ring-white/80" />
              <button className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm hover:bg-blue-50">Start free</button>
            </form>
            <p className="mt-3 text-sm text-blue-100">By signing up you agree to our terms and privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
