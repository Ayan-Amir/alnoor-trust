import { useState } from 'react'

function Header({ navLinks, orgName }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-blue-900/70 bg-[#081c4b]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a className="flex items-center gap-3" href="#top">
          <img className="h-12 w-12 rounded-full bg-white p-1" src="/logo.png" alt={`${orgName} logo`} />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Charity Trust</p>
            <p className="text-lg font-semibold text-white">{orgName}</p>
          </div>
        </a>

        <button
          type="button"
          className="rounded border border-amber-300 px-3 py-2 text-sm font-semibold text-amber-300 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-amber-300" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="rounded-md bg-amber-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-amber-300"
                href="#donate"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-blue-900 bg-[#0a2360] px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <ul className="space-y-3 text-slate-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="block rounded px-2 py-1 hover:bg-blue-800" href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="mt-1 block rounded bg-amber-400 px-3 py-2 text-center font-semibold text-slate-900"
                href="#donate"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
