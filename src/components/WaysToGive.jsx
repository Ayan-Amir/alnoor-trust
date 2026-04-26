import SectionTitle from './SectionTitle'

function WaysToGive({ giving }) {
  return (
    <section id="ways-to-give" className="bg-[#0a2463] py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          light
          eyebrow="Ways To Give"
          title="Make your support count today"
          description={giving.zakatSadqah}
        />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-white/15 bg-white/10 p-6">
            <h3 className="text-lg font-semibold text-white">Donation Channels</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {giving.channels.map((channel) => (
                <li key={channel}>- {channel}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-white/15 bg-white/10 p-6">
            <h3 className="text-lg font-semibold text-white">Support Options</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {giving.supportTypes.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default WaysToGive
