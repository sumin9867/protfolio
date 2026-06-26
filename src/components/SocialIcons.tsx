import { socials } from '../data/content'

/** Inline SVG glyphs keyed by the icon name in `socials`. */
const icons: Record<string, JSX.Element> = {
  github: (
    <path d="M10 1.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1-2.9-1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.2 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.2 8.2 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.2-2 4-3.9 4.2.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4A8.5 8.5 0 0 0 10 1.5z" />
  ),
  linkedin: (
    <path d="M6 7.5H3.5V17H6V7.5zM4.75 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM17 17h-2.5v-4.9c0-1.2-.4-2-1.5-2a1.6 1.6 0 0 0-1.5 1.1 2 2 0 0 0-.1.7V17H8.9s0-8.4 0-9.5h2.5v1.3a2.5 2.5 0 0 1 2.3-1.3c1.7 0 2.9 1.1 2.9 3.4V17z" />
  ),
  email: (
    <path d="M3 4.5h14a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1zm.4 1.6 6.6 4.6 6.6-4.6H3.4zM16.5 7.4l-6.1 4.3a.7.7 0 0 1-.8 0L3.5 7.4v7h13v-7z" />
  ),
}

export function SocialIcons({ className = '', tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  const styles =
    tone === 'dark'
      ? 'bg-cream/10 text-cream hover:bg-cream/20'
      : 'bg-ink/5 text-ink hover:bg-ink hover:text-cream'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${styles}`}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
            {icons[s.icon]}
          </svg>
        </a>
      ))}
    </div>
  )
}
