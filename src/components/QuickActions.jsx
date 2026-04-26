import SectionTitle from './SectionTitle'

function QuickActions({ whatsappLink, phones, socialLinks }) {
  return (
    <section id="contact" className="bg-[#0a2463] py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          light
          eyebrow="Contact"
          title="Reach us quickly"
          description="Call, message, or visit our social pages to connect with Al Noor Trust."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${phones[0]}`}
            className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Call {phones[0]}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-500"
          >
            WhatsApp
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions
