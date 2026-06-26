import { type ReactNode } from 'react'
import { RollingText } from './RollingText'
import { handleAnchorClick } from '../lib/scroll'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

/**
 * Pill button with the rolling-text hover. `solid` = ink on cream
 * inverted on hover feel; `outline` = bordered ghost button.
 */
export function Button({ href, children, variant = 'solid', className = '' }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tighter transition-colors duration-300 ease-smooth'

  const variants = {
    solid: 'bg-ink text-cream hover:bg-forest',
    outline: 'border border-line text-ink hover:bg-ink hover:text-cream',
  }

  return (
    <a
      href={href}
      onClick={(e) => handleAnchorClick(e, href)}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <RollingText>{children}</RollingText>
      <svg
        className="h-3.5 w-3.5 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M3 13L13 3M13 3H5M13 3V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
