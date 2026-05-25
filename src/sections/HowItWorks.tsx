import { Reveal } from '../components/Reveal'
import { SectionMarker } from '../components/SectionMarker'

const STEPS = [
  { k: 'git push', d: 'you push to tracked branch.' },
  { k: 'git-sync', d: 'polls branch every ~30s, flips an atomic symlink.' },
  { k: 'caddy', d: 'serves /var/www/current. acme tls, optional auth.' },
  { k: 'visitors', d: 'hit your gated https url. that is the loop.' },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-2xl">
        <SectionMarker no="04" label="how it works" />
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          one box. four moving parts.
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-4 lg:grid-cols-4 lg:gap-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.k} delay={i * 90} className="relative">
            <div className="flex h-full flex-col gap-2 bg-paper-shade/60 p-5 lg:gap-3">
              <span className="font-display text-sm font-extrabold text-orange-ink">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-lg font-bold text-ink">{step.k}</span>
              <span className="text-sm leading-relaxed text-ink-soft">{step.d}</span>
            </div>
            {i < STEPS.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-full z-10 -translate-x-1/2 font-display text-xl font-bold text-orange lg:left-full lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </span>
            ) : null}
          </Reveal>
        ))}
      </ol>

      <Reveal className="mx-auto mt-8 max-w-2xl">
        <p className="font-mono text-sm text-ink-soft">
          a ~30s poll on a $5/mo box is indistinguishable from instant for the
          push-then-refresh loop. tunable down to ~5s.
        </p>
      </Reveal>
    </section>
  )
}
