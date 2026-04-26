import SectionTitle from './SectionTitle'

function DonationUse({ donationUse }) {
  return (
    <section id="donation-use" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Transparency"
          title="How your donation is used"
          description="Your support is directed toward student access, teaching quality, and safe school operations."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {donationUse.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DonationUse
