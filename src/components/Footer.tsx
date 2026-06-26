import { footer } from '../data/content'
import { handleAnchorClick } from '../lib/scroll'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="container-x relative z-10 pb-32 pt-14 md:pb-56 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Heading */}
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[0.95] tracking-tightest">
            {footer.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Quick links */}
          <div>
            <p className="mb-5 text-sm text-cream/50">/Quick links</p>
            <ul className="flex flex-wrap gap-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="inline-block rounded-xl bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:bg-cream/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-sm text-cream/50">/Contact</p>
            <a
              href={`mailto:${footer.email}`}
              className="text-base text-cream/90 transition-colors hover:text-cream"
            >
              {footer.email}
            </a>
          </div>
        </div>
      </div>

      {/* Oversized watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-0.18em] select-none text-center font-bold leading-none tracking-tightest text-cream/[0.04]"
        style={{ fontSize: 'clamp(7rem, 26vw, 26rem)' }}
      >
        {footer.watermark}
      </span>
    </footer>
  )
}
