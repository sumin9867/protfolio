import { type RefObject } from 'react'
import { bio } from '../data/content'
import { Reveal } from '../components/Reveal'
import { RollingText } from '../components/RollingText'
import { handleAnchorClick } from '../lib/scroll'

/** `slotRef` marks the portrait card slot the travelling image lands in. */
export function Bio({ slotRef }: { slotRef?: RefObject<HTMLDivElement> }) {
  return (
    <section id="bio" className="py-14 md:py-28 lg:py-40">
      <div className="container-x">
        {/* Three-column intro: heading + short bio | portrait | long bio + CTA */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Left: "Hey!" pinned top, short intro pinned bottom */}
          <Reveal className="flex flex-col justify-between gap-16">
            <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-tightest">
              {bio.heading}
            </h2>
            <p className="max-w-xs text-lg font-medium leading-snug tracking-tighter">
              {bio.intro}
            </p>
          </Reveal>

          {/* Center: portrait slot. Desktop only — an empty spacer where the
              shared travelling image (from <Intro>) lands. On mobile the
              portrait lives solely in the hero, so this is hidden to avoid
              showing the photo twice. */}
          <div ref={slotRef} className="hidden aspect-[4/5] md:block" />

          {/* Right: longer bio + CTA, pinned to bottom */}
          <Reveal delay={0.2} className="flex flex-col justify-end gap-6">
            <div className="space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
              {bio.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <a
              href={bio.cta.href}
              onClick={(e) => handleAnchorClick(e, bio.cta.href)}
              className="group inline-flex w-fit items-center gap-2 text-base font-medium tracking-tighter"
            >
              <RollingText>{bio.cta.label}</RollingText>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:bg-ink group-hover:text-cream">
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 13L13 3M13 3H5M13 3V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
