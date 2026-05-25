import { Receipt } from '../components/Receipt'
import { Reveal } from '../components/Reveal'
import { LineItem } from '../components/LineItem'
import { SectionMarker } from '../components/SectionMarker'

export function WhyGitNative() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Reveal>
        <Receipt className="px-6 py-10 sm:px-10">
          <SectionMarker no="02" label="why git-native" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            the wedge, itemized.
          </h2>

          <ul className="mt-7 divide-y divide-dotted divide-ink-soft/30">
            <LineItem label="your aws, your region" value="included" />
            <LineItem
              label="auth: sso, any idp"
              value="$5/mo flat"
              note="google workspace, okta, azure ad. not just gh org membership."
            />
            <LineItem label="vs gh enterprise auth" value="~$21/user/mo" />
            <LineItem
              label="audit log"
              value="git history"
              note="tamper-evident, line-level attribution, instant rollback."
            />
            <LineItem label="vendor lock-in" value="$0" />
            <LineItem label="the whole thing" value="forkable" />
          </ul>

          <div className="mt-2 border-t-2 border-ink pt-4">
            <LineItem label="total ownership" value="yours" emphasis />
          </div>
        </Receipt>
      </Reveal>
    </section>
  )
}
