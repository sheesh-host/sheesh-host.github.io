import { Reveal } from '../components/Reveal'
import { CopyButton } from '../components/CopyButton'

const CMD = `git clone https://github.com/sheesh-host/box
cd box/examples/local
docker compose up`

const LINES = [
  'git clone https://github.com/sheesh-host/box',
  'cd box/examples/local',
  'docker compose up',
]

export function TryIt() {
  return (
    <section id="try" className="bg-term px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.18em] text-lime">
            <span className="text-term-soft">no.</span> 03{' '}
            <span className="text-term-soft">/</span> try it
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            see the loop in 60 seconds.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-term-soft">
            run the whole thing locally first, no aws. caddy plus git-sync in docker compose, so
            you watch git push become a served url before you touch the cloud.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-md border border-term-soft/25 bg-[oklch(0.18_0.012_60)] shadow-[0_24px_50px_oklch(0.1_0.01_60/0.5)]">
            <div className="flex items-center justify-between border-b border-term-soft/15 px-4 py-2.5">
              <span className="font-mono text-xs tracking-widest text-term-soft">
                local · docker compose
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-lime">
                <span className="inline-block h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
                no cloud
              </span>
            </div>

            <pre className="overflow-x-auto px-4 py-5 font-mono text-xs leading-relaxed sm:px-6 sm:text-sm">
              <code>
                {LINES.map((line) => (
                  <span key={line} className="block">
                    <span className="select-none text-lime">$ </span>
                    <span className="text-paper">{line}</span>
                  </span>
                ))}
                <span className="mt-2 block text-term-soft">
                  # → http://localhost:8080 — your gated artifact, served
                  <span className="caret" aria-hidden="true" />
                </span>
              </code>
            </pre>

            <div className="flex items-center justify-between border-t border-term-soft/15 px-4 py-2.5">
              <span className="font-mono text-xs text-term-soft">3 commands</span>
              <CopyButton text={CMD} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
