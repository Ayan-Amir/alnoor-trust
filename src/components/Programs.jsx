import SectionTitle from './SectionTitle'

function Programs({ sponsorshipOptions }) {
  return (
    <section id="programs" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Programs"
          title="Ways to help students succeed"
          description="Sponsor a child and directly reduce education barriers for families in need."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {sponsorshipOptions.map((option) => (
            <article key={option.title} className="rounded-xl border border-blue-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{option.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{option.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
