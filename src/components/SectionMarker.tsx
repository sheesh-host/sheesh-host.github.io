/** Receipt line-number marker. A deliberate brand system (printouts number their items). */
export function SectionMarker({ no, label }: { no: string; label: string }) {
  return (
    <p className="font-mono text-sm tracking-[0.18em] text-orange-ink">
      <span className="text-ink-soft">no.</span> {no} <span className="text-ink-soft">/</span>{' '}
      {label}
    </p>
  )
}
