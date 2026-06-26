import { motion } from 'framer-motion'
import { type RefObject } from 'react'
import { hero, site } from '../data/content'
import { FloatingLogo } from '../components/FloatingLogo'
import { asset } from '../lib/asset'

/**
 * Centered, slightly-tilted display hero matching the original:
 * a 4-point star (top-left) and lightning bolt (bottom-right) frame
 * the oversized "SOFTWARE / ENGINEER" wordmark, with a portrait
 * centered below and meta labels pinned to the bottom corners.
 *
 * `slotRef` marks the empty portrait slot the shared travelling image
 * (rendered by <Intro>) starts from on desktop.
 */
export function Hero({ slotRef }: { slotRef?: RefObject<HTMLDivElement> }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      {/* Decorative 3D shapes */}
      <motion.img
        src={asset('/hero/shape-b.png')}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[22%] w-20 select-none md:w-28 lg:w-36"
        initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
        animate={{ opacity: 1, scale: 1, rotate: -12 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      <motion.img
        src={asset('/hero/shape-a.png')}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[7%] top-[55%] w-20 select-none md:w-28 lg:w-36"
        initial={{ opacity: 0, scale: 0.6, rotate: 25 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      />

      {/* Floating brand logos — Flutter / Dart / stores / Apple */}
      <FloatingLogo
        src="/logos/flutter.svg"
        alt="Flutter"
        position="left-[10%] top-[16%]"
        size="w-10 md:w-14 lg:w-16"
        rotate={-10}
        floatY={18}
        duration={6}
        delay={0.6}
      />
      <FloatingLogo
        src="/logos/dart.svg"
        alt="Dart"
        position="left-[14%] bottom-[20%]"
        size="w-9 md:w-12 lg:w-14"
        rotate={8}
        floatY={14}
        duration={7}
        delay={0.8}
      />
      <FloatingLogo
        src="/logos/firebase.svg"
        alt="Firebase"
        position="left-[6%] top-[46%]"
        size="w-8 md:w-10 lg:w-12"
        rotate={-6}
        floatY={20}
        duration={8}
        delay={1}
      />
      <FloatingLogo
        src="/logos/googleplay.svg"
        alt="Google Play"
        position="right-[12%] top-[20%]"
        size="w-9 md:w-12 lg:w-14"
        rotate={10}
        floatY={16}
        duration={6.5}
        delay={0.7}
      />
      <FloatingLogo
        src="/logos/appstore.svg"
        alt="App Store"
        position="right-[8%] bottom-[26%]"
        size="w-9 md:w-12 lg:w-14"
        rotate={-8}
        floatY={18}
        duration={7.5}
        delay={0.9}
      />
      <FloatingLogo
        src="/logos/apple.svg"
        alt="Apple / iOS"
        position="right-[16%] bottom-[14%]"
        size="w-8 md:w-10 lg:w-12"
        rotate={6}
        floatY={14}
        duration={6}
        delay={1.1}
      />

      {/* Tilted wordmark */}
      <h1 className="relative z-10 -rotate-[4deg] text-center text-[clamp(3.5rem,15vw,13rem)] font-bold leading-[0.85] tracking-tightest">
        {hero.title.split(' ').map((word, i) => (
          <motion.span
            key={word}
            className="block"
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Portrait slot. Desktop: empty spacer — the shared travelling image
          (rendered by <Intro>) occupies this spot and animates away on
          scroll. Mobile: a static image, since there's no scroll travel. */}
      <div ref={slotRef} className="relative z-10 mt-10 h-44 w-36 md:h-52 md:w-40">
        <motion.img
          src={asset('/hero/sumin.png')}
          alt="Portrait of Sumin"
          className="h-full w-full overflow-hidden rounded-2xl object-cover md:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        />
      </div>

      {/* Bottom corner meta labels */}
      <div className="container-x absolute inset-x-0 bottom-10 z-10 flex items-end justify-between">
        <span className="text-4xl font-bold tracking-tightest md:text-5xl">{site.year}</span>
        <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted md:text-sm">
          {site.since}
        </span>
      </div>
    </section>
  )
}
