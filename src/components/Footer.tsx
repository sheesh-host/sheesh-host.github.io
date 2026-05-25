const ORG = 'https://github.com/sheesh-host'

/** Receipt tear-off bottom: license, links, abuse contact, barcode motif. */
export function Footer() {
  return (
    <footer className="bg-desk px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="border-t-2 border-dotted border-ink-soft/50 pt-8 text-center font-mono text-sm text-ink-soft">
          <p className="font-display text-base font-bold text-ink">
            * * * thank you * * *
          </p>
          <p className="mt-3">infrastructure dumbed down.</p>

          {/* barcode motif (decorative) */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 flex h-12 w-56 items-stretch justify-center gap-px overflow-hidden opacity-80"
          >
            {BARS.map((w, i) => (
              <span
                key={i}
                className="bg-ink"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>
          <p className="mt-2 tracking-[0.35em] text-ink">SHEESH·HOST·V0</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href={ORG} className="transition-colors hover:text-ink">
              github.com/sheesh-host
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              className="transition-colors hover:text-ink"
            >
              apache 2.0
            </a>
            <span aria-hidden="true">·</span>
            <a href="mailto:contact@sheesh.host" className="transition-colors hover:text-ink">
              contact@sheesh.host
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const BARS = [3, 1, 1, 2, 1, 4, 1, 1, 2, 3, 1, 1, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2, 1, 1, 4, 1, 2, 3, 1, 1, 2, 1, 4, 1, 1, 2, 1, 3, 1, 2]
