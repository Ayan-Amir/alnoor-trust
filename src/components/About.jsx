import SectionTitle from './SectionTitle'

function About({ paragraphs, challenges }) {
  return (
    <section id="about" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Who We Are"
          title="A non-profit school serving local families"
          description="Al Noor Trust focuses on educational access, accountability, and long-term community uplift."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="text-xl font-semibold text-slate-900">Current Challenges</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {challenges.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
