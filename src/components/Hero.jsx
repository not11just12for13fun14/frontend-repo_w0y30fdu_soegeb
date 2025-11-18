import { CheckCircle2, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-48 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">All-in-one platform for schools</div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Run your entire school on one beautiful platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Easy.School brings admissions, attendance, grading, finance and communication together, so your staff can do more of what matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:shadow-blue-200/50 transition-all">Start free trial</a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50">
                <PlayCircle className="h-5 w-5 text-blue-600" /> Watch demo
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> 14-day free trial</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> No credit card</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> SOC 2 compliant</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> 24/7 support</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-transparent blur-2xl rounded-3xl" />
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1400&auto=format&fit=crop" alt="Dashboard preview" className="rounded-xl object-cover aspect-[16/10]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {['Admissions','Attendance','Grades'].map((t) => (
                <div key={t} className="rounded-lg border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 shadow-sm">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
