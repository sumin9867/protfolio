import { valueProp } from '../data/content'
import { Reveal } from '../components/Reveal'

/**
 * Full-bleed centered statement with a two-tone treatment: the lead
 * is solid ink, the tail fades to muted gray — matching the original.
 */
export function ValueProp() {
  return (
    <section className="flex items-center py-16 md:min-h-[80vh] md:py-40">
      <div className="container-x">
        <Reveal>
          <p className="mx-auto max-w-5xl text-center text-[clamp(1.75rem,4.5vw,3.25rem)] font-medium leading-[1.2] tracking-tighter">
            <span className="text-ink">{valueProp.lead}</span>
            <span className="text-muted/70">{valueProp.tail}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
