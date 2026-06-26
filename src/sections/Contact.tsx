import { useState } from 'react'
import { contact, site } from '../data/content'
import { Reveal } from '../components/Reveal'
import { SocialIcons } from '../components/SocialIcons'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel =
    status === 'sending'
      ? 'Sending…'
      : status === 'sent'
        ? 'Sent — thank you!'
        : status === 'error'
          ? 'Something went wrong — retry'
          : 'Submit'

  return (
    <section id="contact" className="py-16 md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Heading side */}
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-6 text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.95] tracking-tightest">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted">{contact.description}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block text-lg font-medium tracking-tighter underline decoration-line underline-offset-4 transition-colors hover:text-forest"
            >
              {site.email}
            </a>
            <SocialIcons className="mt-10" />
          </Reveal>

          {/* Form side */}
          <Reveal delay={0.1}>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+977 98XXXXXXXX"
                required={false}
              />
              {/* Subject helps the email arrive with a clear label */}
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio"
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="resize-none rounded-2xl border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="mt-2 w-full rounded-2xl bg-ink py-4 text-sm font-medium tracking-tighter text-cream transition-colors duration-300 ease-smooth hover:bg-forest disabled:opacity-70"
              >
                {buttonLabel}
              </button>

              {status === 'error' && (
                <p className="text-sm text-[#eb4d6d]">
                  Couldn’t send right now. You can also email{' '}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {!required && <span className="ml-1 text-muted">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-ink"
      />
    </div>
  )
}
