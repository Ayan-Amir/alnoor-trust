import SectionTitle from './SectionTitle'

function FeeTable({ feeTable }) {
  return (
    <section id="sponsorship" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Sponsor a Child"
          title="Fee structure for student sponsorship"
          description="Choose a class level and sponsor monthly or annually."
        />

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left">
            <thead className="bg-blue-900 text-sm uppercase tracking-[0.1em] text-white">
              <tr>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Monthly (PKR)</th>
                <th className="px-4 py-3">Annually (PKR)</th>
              </tr>
            </thead>
            <tbody>
              {feeTable.map((row) => (
                <tr key={row.className} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.className}</td>
                  <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                  <td className="px-4 py-3 text-slate-700">{row.annually}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default FeeTable
