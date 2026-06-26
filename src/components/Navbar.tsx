import { useState } from 'react'
import { nav, site } from '../data/content'
import { handleAnchorClick } from '../lib/scroll'

/**
 * Centered floating black pill — matches the original Framer nav.
 * Brand on the left, a "…" toggle on the right that reveals the
 * section links in a dropdown panel.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-[420px]">
        <nav className="flex items-center justify-between rounded-full bg-ink px-5 py-3 text-cream shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <a
            href="#hero"
            onClick={(e) => handleAnchorClick(e, '#hero')}
            className="text-base font-semibold tracking-tighter"
          >
            {site.name}
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-9 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
          >
            {open ? (
              <span className="relative block h-3 w-3">
                <span className="absolute left-1/2 top-1/2 h-0.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cream" />
                <span className="absolute left-1/2 top-1/2 h-0.5 w-3.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-cream" />
              </span>
            ) : (
              <span className="flex gap-[3px]">
                <span className="h-1 w-1 rounded-full bg-cream" />
                <span className="h-1 w-1 rounded-full bg-cream" />
                <span className="h-1 w-1 rounded-full bg-cream" />
              </span>
            )}
          </button>
        </nav>

        {/* Dropdown panel */}
        <div
          className={`absolute inset-x-0 top-full mt-2 origin-top overflow-hidden rounded-3xl bg-ink p-2 text-cream shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 ease-smooth ${
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleAnchorClick(e, item.href)
                    setOpen(false)
                  }}
                  className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-cream/10 pt-1">
              <a
                href={`mailto:${site.email}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
