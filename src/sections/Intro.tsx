import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'
import { Hero } from './Hero'
import { Bio } from './Bio'
import { asset } from '../lib/asset'

interface Rect {
  top: number
  left: number
  width: number
  height: number
}

/** Read an element's position relative to a container element. */
function readRect(el: HTMLElement, container: HTMLElement): Rect {
  const r = el.getBoundingClientRect()
  const c = container.getBoundingClientRect()
  return {
    top: r.top - c.top,
    left: r.left - c.left,
    width: r.width,
    height: r.height,
  }
}

/**
 * Hero + Bio share ONE portrait that travels between their two slots on
 * scroll. We MEASURE the real position of each slot (hero spacer + bio
 * spacer) and interpolate the image's document position between them as
 * the user scrolls — so it lands exactly where the layout reserves space,
 * at any screen size. It also scales up and rotates from edge-on to
 * upright along the way.
 */
export function Intro() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const heroSlotRef = useRef<HTMLDivElement>(null)
  const bioSlotRef = useRef<HTMLDivElement>(null)

  const [from, setFrom] = useState<Rect | null>(null)
  const [to, setTo] = useState<Rect | null>(null)

  useLayoutEffect(() => {
    const measure = () => {
      if (heroSlotRef.current && bioSlotRef.current && wrapRef.current) {
        setFrom(readRect(heroSlotRef.current, wrapRef.current))
        setTo(readRect(bioSlotRef.current, wrapRef.current))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Progress 0 → 1 across the hero+bio block.
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  })
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.6 })

  return (
    <div ref={wrapRef} className="relative">
      {from && to && (
        <TravellingPortrait p={p} from={from} to={to} />
      )}
      <Hero slotRef={heroSlotRef} />
      <Bio slotRef={bioSlotRef} />
    </div>
  )
}

function TravellingPortrait({
  p,
  from,
  to,
}: {
  p: MotionValue<number>
  from: Rect
  to: Rect
}) {
  // Interpolate the document-space center of the image between the two
  // slot centers. The image is absolutely positioned within the wrapper.
  const fromCx = from.left + from.width / 2
  const fromCy = from.top + from.height / 2
  const toCx = to.left + to.width / 2
  const toCy = to.top + to.height / 2

  const cx = useTransform(p, [0, 1], [fromCx, toCx])
  const cy = useTransform(p, [0, 1], [fromCy, toCy])

  // Size grows from the hero slot to the bio slot.
  const width = useTransform(p, [0, 1], [from.width, to.width])
  const height = useTransform(p, [0, 1], [from.height, to.height])

  // Subtle tilt mid-travel that resolves to perfectly upright at both
  // ends (hero start and bio landing), so the portrait never leans at rest.
  // `clamp` prevents the spring's overshoot from tilting it past upright.
  const rotate = useTransform(p, [0, 0.5, 1], [0, -6, 0], { clamp: true })

  // Convert centers to top-left offsets for absolute positioning.
  const left = useTransform([cx, width], ([c, w]: number[]) => c - w / 2)
  const top = useTransform([cy, height], ([c, h]: number[]) => c - h / 2)

  return (
    <motion.div
      style={{ top, left, width, height, rotate }}
      className="pointer-events-none absolute z-30 hidden origin-center overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:block"
    >
      <img
        src={asset('/hero/sumin.png')}
        alt="Portrait of Sumin"
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}
