import SectionTitle from './SectionTitle'

function Needs({ supportNeeds }) {
  return (
    <section id="needs" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Priority Needs"
          title="Additional areas where your support helps"
          description="Beyond tuition, these upgrades strengthen the school environment for students and teachers."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {supportNeeds.map((need) => (
            <li key={need} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
              {need}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Needs
