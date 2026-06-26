/**
 * Resolve a path under /public against Vite's base URL so assets work
 * both in local dev ('/') and on GitHub Pages ('/protfolio/').
 *
 * Pass a leading-slash path, e.g. asset('/hero/sumin.png').
 */
export function asset(path: string): string {
  // BASE_URL always ends with a slash ('/', '/protfolio/'); strip the
  // leading slash from `path` to avoid a double slash.
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
