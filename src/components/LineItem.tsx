import type { ReactNode } from 'react'

/** Receipt line-item: label, dotted leader, value. The grammar that replaces a card grid. */
export function LineItem({
  label,
  value,
  note,
  emphasis = false,
}: {
  label: ReactNode
  value: ReactNode
  note?: ReactNode
  emphasis?: boolean
}) {
  return (
    <li className="list-none py-3">
      <div className="leader">
        <span
          className={`shrink-0 ${
            emphasis ? 'font-display font-bold text-ink' : 'text-ink'
          }`}
        >
          {label}
        </span>
        <span className="leader-fill" aria-hidden="true" />
        <span
          className={`shrink-0 text-right tabular-nums ${
            emphasis ? 'font-display font-extrabold text-orange-ink' : 'text-ink-soft'
          }`}
        >
          {value}
        </span>
      </div>
      {note ? <p className="mt-1 text-sm text-ink-soft">{note}</p> : null}
    </li>
  )
}
