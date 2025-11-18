export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-slate-600">Start free. Upgrade when you're ready. No setup fees, cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-2 text-slate-600">For small schools getting started</p>
            <p className="mt-6"><span className="text-4xl font-extrabold text-slate-900">$99</span><span className="text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>Up to 300 students</li>
              <li>Email support</li>
              <li>Basic reports</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white font-semibold hover:bg-slate-800">Choose Starter</a>
          </div>

          {/* Growth */}
          <div className="relative rounded-2xl border-2 border-blue-600 bg-gradient-to-b from-blue-50 to-white p-8 shadow-sm">
            <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Popular</div>
            <h3 className="text-lg font-semibold text-slate-900">Growth</h3>
            <p className="mt-2 text-slate-600">For growing schools and districts</p>
            <p className="mt-6"><span className="text-4xl font-extrabold text-slate-900">$299</span><span className="text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>Up to 1500 students</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:shadow-blue-200/50">Choose Growth</a>
          </div>

          {/* Enterprise */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
            <p className="mt-2 text-slate-600">For large districts and groups</p>
            <p className="mt-6"><span className="text-4xl font-extrabold text-slate-900">Custom</span></p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>Unlimited students</li>
              <li>Dedicated CSM</li>
              <li>Custom SLAs & SSO</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white font-semibold hover:bg-slate-800">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
