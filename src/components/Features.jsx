import { Users, CalendarCheck2, FileSpreadsheet, MessagesSquare, CreditCard, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Admissions & CRM',
    desc: 'Streamlined enquiries, applications, and enrolments with automated workflows.'
  },
  {
    icon: CalendarCheck2,
    title: 'Attendance',
    desc: 'Real-time attendance tracking for classes, events and buses.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Assessments & Grades',
    desc: 'Flexible gradebooks, report cards and curriculum planning.'
  },
  {
    icon: MessagesSquare,
    title: 'Parent Communication',
    desc: 'Announcements, messages and mobile push notifications.'
  },
  {
    icon: CreditCard,
    title: 'Fees & Finance',
    desc: 'Online payments, invoicing and financial reporting in one place.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Enterprise-grade access control with full audit logs.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything schools need</h2>
          <p className="mt-4 text-lg text-slate-600">Replace dozens of tools with one secure, integrated platform that staff and parents love.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  )
}
