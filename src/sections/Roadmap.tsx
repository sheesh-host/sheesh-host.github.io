import { Receipt } from '../components/Receipt'
import { Reveal } from '../components/Reveal'
import { SectionMarker } from '../components/SectionMarker'

const MILESTONES = [
  {
    v: 'v0',
    status: 'shipping',
    scope: 'packer ami, single-node tf module, cli bootstrap, caddy + git-sync, basic auth, docker-compose try-it.',
  },
  {
    v: 'v0.1',
    status: 'next',
    scope: 'go api, sheesh publish file.html, on-disk versioning, rollback.',
  },
  {
    v: 'v0.2',
    status: 'planned',
    scope: 'oidc (oauth2-proxy + forward_auth), sheesh status / logs, file-type allowlist.',
  },
  {
    v: 'v0.3',
    status: 'the wedge',
    scope: 'inline comments stored as metadata. thin js render bundle. comments are versioned. zero special plumbing.',
    differentiator: true,
  },
  {
    v: 'v0.4+',
    status: 'later',
    scope: 'multi-site per box, optional cloudfront, comment-aware agent workflows.',
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Reveal>
        <Receipt className="px-6 py-10 sm:px-10">
          <SectionMarker no="05" label="roadmap" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            where it is going.
          </h2>

          <ol className="mt-8 space-y-5">
            {MILESTONES.map((m) => (
              <li
                key={m.v}
                className={
                  m.differentiator
                    ? 'border-l-0 bg-paper-shade/70 p-5 ring-1 ring-orange/40'
                    : 'px-1'
                }
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    className={`font-display font-extrabold ${
                      m.differentiator ? 'text-lg text-orange-ink' : 'text-base text-ink'
                    }`}
                  >
                    {m.v}
                  </span>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-ink-soft">
                    [{m.status}]
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink">{m.scope}</p>
                {m.differentiator ? (
                  <p className="mt-2 font-mono text-xs text-orange-ink">
                    ← git-native gated publishing with git-native inline comments. the thing
                    display.dev cannot match without rebuilding their backend.
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Receipt>
      </Reveal>
    </section>
  )
}
