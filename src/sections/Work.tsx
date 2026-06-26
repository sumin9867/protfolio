import { projects, type Project } from '../data/content'
import { Reveal } from '../components/Reveal'
import { StoreBadge } from '../components/StoreBadge'

function AppCard({ title, category, description, tech, icon, android, ios }: Project) {
  return (
    <div className="group flex h-full flex-col gap-6 rounded-3xl border border-line bg-cream p-6 transition-colors duration-300 hover:border-ink/20 md:p-7">
      {/* Header: icon + name + category */}
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={`${title} app icon`}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-2xl border border-line object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold tracking-tighter">{title}</h3>
          <p className="text-sm text-muted">{category}</p>
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-ink/70">{description}</p>

      {/* Tech tags */}
      <ul className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/70"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* Store badges */}
      <div className="flex flex-wrap gap-2 border-t border-line pt-5">
        {android && <StoreBadge store="android" href={android} />}
        {ios && <StoreBadge store="ios" href={ios} />}
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-16">
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.95] tracking-tightest">
              Featured
              <br />
              Projects
            </h2>
            <p className="max-w-xs text-sm text-muted">
              Cross-platform apps shipped to the Play Store &amp; App Store.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.title} delay={(i % 3) * 0.08} className="h-full">
              <AppCard {...project} />
            </Reveal>
          ))}

          {/* ERC — not publicly available; realistic dashboard placeholder */}
          <Reveal as="article" delay={0.16} className="h-full">
            <ErcCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/**
 * ERC (Emergency Response Control) has no public store listing, so we
 * render a realistic municipality emergency-dashboard mock instead of
 * an app icon/store badges.
 */
function ErcCard() {
  return (
    <div className="group flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-line bg-ink p-6 text-cream md:p-7">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tighter">ERC</h3>
          <p className="text-sm text-cream/50">Emergency Response Control</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#eb4d6d]/15 px-2.5 py-1 text-xs font-medium text-[#eb4d6d]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#eb4d6d]" />
          LIVE
        </span>
      </div>

      {/* Mini dashboard mock */}
      <div className="flex-1 space-y-3">
        <div className="rounded-2xl bg-cream/[0.06] p-4">
          <p className="text-xs text-cream/50">Emergency Type</p>
          <p className="mt-1 text-base font-semibold">Fire · Ward 12</p>
        </div>
        <div className="relative h-24 overflow-hidden rounded-2xl bg-cream/[0.06]">
          {/* Faux live map grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(250,247,243,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(250,247,243,0.15) 1px,transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eb4d6d] shadow-[0_0_0_6px_rgba(235,77,109,0.3)]" />
          <span className="absolute bottom-2 left-3 text-[10px] text-cream/40">
            27.6710° N, 85.4298° E
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-cream/[0.06] p-3">
            <p className="text-xs text-cream/50">Sirens</p>
            <p className="text-sm font-semibold">8 active</p>
          </div>
          <div className="rounded-2xl bg-cream/[0.06] p-3">
            <p className="text-xs text-cream/50">Municipalities</p>
            <p className="text-sm font-semibold">5 connected</p>
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-2 border-t border-cream/10 pt-5">
        {['Flutter', 'Google Maps SDK', 'Real-Time'].map((t) => (
          <li key={t} className="rounded-full border border-cream/15 px-2.5 py-1 text-xs text-cream/70">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
