import { Receipt } from '../components/Receipt'
import { Reveal } from '../components/Reveal'
import { SectionMarker } from '../components/SectionMarker'

export function WhatItIs() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Reveal>
        <Receipt className="px-6 py-10 sm:px-10">
          <SectionMarker no="01" label="what it is" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            publish a file, get a gated url.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            publish static html or markdown to a permanent, optionally auth-gated url. one small ec2 box serves your git content directly. git is the source of truth and the audit log; the
            box is a disposable projection of the repo, replaceable at any time.
          </p>

          <figure className="my-8 border-y-2 border-dotted border-ink-soft/40 py-6">
            <blockquote className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
              the box is replaceable. git is forever.
            </blockquote>
          </figure>

          <p className="font-mono text-sm text-ink-soft">
            not a build platform. not a global cdn. not multi-tenant saas. you bring built
            artifacts; sheesh serves them, on your infrastructure.
          </p>
        </Receipt>
      </Reveal>
    </section>
  )
}
