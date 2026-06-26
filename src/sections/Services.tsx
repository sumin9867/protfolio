import { services } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="mb-12 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-none tracking-tightest md:mb-16">
            Expertise
          </h2>
        </Reveal>

        <ul className="border-t border-line">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 4) * 0.06}>
              <div className="grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-center md:gap-10 md:py-10">
                <h3 className="text-2xl font-semibold tracking-tighter md:text-3xl">
                  {service.title}
                </h3>
                <ul className="flex flex-wrap gap-2 md:justify-end">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-ink/70 transition-colors hover:border-ink/30 hover:text-ink md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
