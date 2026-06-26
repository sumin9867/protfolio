import { experiences } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-24 lg:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="mb-12 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-none tracking-tightest md:mb-16">
            Experience
          </h2>
        </Reveal>

        <ol className="border-t border-line">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={`${exp.company}-${exp.period}`} delay={(i % 3) * 0.06}>
              <div className="grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-[1fr_1.4fr] md:gap-10 md:py-10">
                {/* Left: role + company + period */}
                <div>
                  <h3 className="text-xl font-semibold tracking-tighter md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base text-ink/70">{exp.company}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                    {exp.period}
                  </p>
                </div>

                {/* Right: responsibilities */}
                <ul className="space-y-2.5">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/80 md:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
