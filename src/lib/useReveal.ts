import { useEffect } from 'react'

/**
 * Print-in reveal. The inline head script in index.html adds `reveal-ready` to
 * <html> only when the user has NOT requested reduced motion, so:
 *   - reduced motion / no JS  -> class absent -> CSS leaves everything visible
 *   - motion ok               -> class present -> .reveal starts hidden, this
 *     observer prints each block in as it enters the viewport (line-by-line via
 *     per-element data-delay stagger).
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('reveal-ready')) return

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
