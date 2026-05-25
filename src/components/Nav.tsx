const ORG = 'https://github.com/sheesh-host'

/** Sticky top bar. Carries a small text wordmark since the hero image scrolls away. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-shade bg-desk/90 backdrop-blur-sm">
      <nav
        aria-label="primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="font-display text-base font-extrabold tracking-tight text-ink"
        >
          sheesh<span className="text-orange-ink">.</span>host
        </a>
        <div className="flex items-center gap-5 text-sm text-ink-soft sm:gap-7">
          <a href="#try" className="hidden transition-colors hover:text-ink sm:inline">
            try it
          </a>
          <a href="#how" className="hidden transition-colors hover:text-ink sm:inline">
            how
          </a>
          <a href="#roadmap" className="hidden transition-colors hover:text-ink sm:inline">
            roadmap
          </a>
          <a
            href={ORG}
            className="font-medium text-ink transition-colors hover:text-orange-ink"
          >
            github ↗
          </a>
        </div>
      </nav>
    </header>
  )
}
