import { Reveal } from '../components/Reveal'

const BOX = 'https://github.com/sheesh-host/box'
const ORG = 'https://github.com/sheesh-host'

const HERO_ALT =
  'a black thermal receipt printer printing a receipt. the receipt reads "SHEESH.HOST" then a ' +
  'checklist: EC2, Caddy, git-sync, HTTPS, cheap, all ticked, then "TOTAL: $<5/mo" and ' +
  '"thank you :)". below the printer an orange brushstroke wordmark "sheesh.host" and the ' +
  'tagline "share first. organize later."'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20"
    >
      <div className="order-2 lg:order-1">
        <Reveal as="p" delay={0} className="font-mono text-sm tracking-[0.2em] text-ink-soft">
          self-hosted · cli-first · git-backed
        </Reveal>

        <Reveal as="h1" delay={80} className="mt-5">
          <span className="block font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Share it.
          </span>
          <span className="mt-1 block font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Sheesh it.
            <span
              aria-hidden="true"
              className="ml-2 inline-block h-[0.82em] w-[0.5ch] translate-y-[0.06em] bg-orange align-baseline"
            />
          </span>
        </Reveal>

        <Reveal as="p" delay={160} className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          self-hosted, git-native gated publishing. push a file, share a clean rendered url. your aws, your auth, your fork.
        </Reveal>

        <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={BOX}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 font-display text-sm font-bold text-paper shadow-[3px_3px_0_0_var(--color-orange)] transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_var(--color-orange)]"
          >
            <span className="text-orange">$</span> get the box
          </a>
          <a
            href={ORG}
            className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-ink/30 px-6 py-3 font-mono text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper-shade"
          >
            view the org ↗
          </a>
        </Reveal>

        <Reveal as="p" delay={320} className="mt-6 font-mono text-sm text-ink-soft">
          one t4g.nano · ~$5/mo · runs in your aws account
        </Reveal>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <img
          src="/hero.png"
          alt={HERO_ALT}
          width={376}
          height={392}
          fetchPriority="high"
          className="feed h-auto w-full max-w-[340px] drop-shadow-[0_18px_30px_oklch(0.255_0.007_60/0.16)] sm:max-w-[376px]"
        />
      </div>
    </section>
  )
}
