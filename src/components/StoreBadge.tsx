/**
 * Official Play Store / App Store download badge linking to a listing.
 * Uses the real badge artwork from /public/badges.
 */
export function StoreBadge({ store, href }: { store: 'android' | 'ios'; href: string }) {
  const src = store === 'android' ? '/badges/google-play.png' : '/badges/app-store.svg'
  const label = store === 'android' ? 'Get it on Google Play' : 'Download on the App Store'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className="inline-block transition-transform duration-300 hover:scale-[1.03]"
    >
      <img src={src} alt={label} className="h-9 w-auto" loading="lazy" />
    </a>
  )
}
