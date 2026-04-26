function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-amber-300' : 'text-blue-800'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold md:text-4xl ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 max-w-3xl ${light ? 'text-slate-200' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle
