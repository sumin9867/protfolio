import { motion } from 'framer-motion'
import { asset } from '../lib/asset'

interface FloatingLogoProps {
  src: string
  alt: string
  /** Tailwind position classes, e.g. "left-[8%] top-[20%]". */
  position: string
  /** Tailwind width classes, e.g. "w-12 lg:w-16". */
  size: string
  rotate?: number
  /** Float distance in px and duration in s for the idle loop. */
  floatY?: number
  duration?: number
  delay?: number
}

/**
 * A brand logo that drifts gently in the hero background, mirroring the
 * float of the decorative 3D shapes. Pure decoration (aria-hidden).
 */
export function FloatingLogo({
  src,
  alt,
  position,
  size,
  rotate = 0,
  floatY = 16,
  duration = 6,
  delay = 0,
}: FloatingLogoProps) {
  return (
    <motion.img
      src={asset(src)}
      alt={alt}
      aria-hidden
      className={`pointer-events-none absolute z-10 select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)] ${position} ${size}`}
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 12 }}
      animate={{ opacity: 1, scale: 1, rotate, y: [0, -floatY, 0] }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        rotate: { duration: 0.8, delay },
        y: { duration, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
      }}
    />
  )
}
