export default function Testimonials() {
  const quotes = [
    {
      quote: 'Easy.School transformed our operations. Teachers love the gradebook and parents finally feel in the loop.',
      name: 'Sarah Thompson',
      role: 'Principal, Oakridge High'
    },
    {
      quote: 'Onboarding was seamless and the support team is exceptional. We consolidated 7 tools into one.',
      name: 'David Chen',
      role: 'IT Director, Riverdale Schools'
    },
    {
      quote: 'Attendance and communication features are game changers. Our parent satisfaction scores jumped 30%.',
      name: 'Maria Lopez',
      role: 'Head of Primary, St. Helena Academy'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Loved by modern schools</h2>
          <p className="mt-4 text-lg text-slate-600">Trusted by hundreds of schools worldwide to run daily operations.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{q.name}</span> · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
