function Stats({ stats }) {
  return (
    <section id="impact" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
              <p className="text-3xl font-bold text-blue-900">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
