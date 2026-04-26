function CtaStrip({ title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  return (
    <section className="bg-amber-400 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-slate-800">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="rounded-md bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="rounded-md border border-slate-900 px-4 py-2 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaStrip
