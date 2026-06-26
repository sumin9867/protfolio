import { testimonials, type Testimonial } from '../data/content'
import { Reveal } from '../components/Reveal'

function Card({ quote, author, role, avatar }: Testimonial) {
  return (
    <figure className="flex h-full flex-col justify-between gap-12 rounded-3xl bg-ink p-7 text-cream">
      <blockquote className="text-base leading-relaxed tracking-tighter text-cream/90">
        {quote}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-sm font-semibold text-cream">
            {author.charAt(0)}
          </span>
        )}
        <span>
          <span className="block text-sm font-semibold">{author}</span>
          <span className="block text-xs text-cream/50">{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="mb-12 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-none tracking-tightest">
            Testimonials
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal as="div" key={t.author} delay={(i % 4) * 0.08} className="h-full">
              <Card {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
