import { type ReactNode } from 'react'

/**
 * Recreates Framer's "RollingTextHover" effect: on hover the current
 * label rolls up and out while a duplicate rolls in from below.
 * Pure CSS transforms — no JS, fully accessible (real text stays in DOM).
 */
export function RollingText({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={`group/roll relative inline-block overflow-hidden align-bottom ${className}`}>
      <span className="block transition-transform duration-500 ease-smooth group-hover/roll:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-smooth group-hover/roll:translate-y-0"
      >
        {children}
      </span>
    </span>
  )
}
