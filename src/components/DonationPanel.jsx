import SectionTitle from './SectionTitle'

function DonationPanel({ donation }) {
  return (
    <section id="donate" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Donation Details"
          title="Direct bank support for Al Noor Trust"
          description="Use the details below for transfer or cheque-based contributions."
        />

        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2">
          <div className="space-y-2 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Bank Name:</span> {donation.bankName}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Account Title:</span> {donation.accountTitle}
            </p>
            <p>
              <span className="font-semibold text-slate-900">IBAN:</span> {donation.iban}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Account Number:</span> {donation.accountNumber}
            </p>
            <p className="pt-1 text-sm">{donation.chequeNote}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Contact & Social</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              {donation.contacts.map((phone) => (
                <li key={phone}>
                  <a className="hover:text-blue-800" href={`tel:${phone}`}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              {donation.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-blue-200 px-3 py-2 text-sm font-medium text-blue-900 transition hover:bg-blue-900 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationPanel
