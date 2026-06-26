/**
 * Smooth-scroll to an in-page section without writing the hash to the URL.
 *
 * Attach to an anchor's onClick. For hrefs like "#contact" it prevents the
 * default jump (which would append "#contact" to the address bar), then
 * scrolls to the matching element. Non-hash links are left untouched.
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith('#')) return

  e.preventDefault()
  const id = href.slice(1)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else if (id === 'hero' || id === '') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
