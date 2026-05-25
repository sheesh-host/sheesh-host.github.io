import type { ReactNode } from 'react'

/**
 * A torn strip of receipt paper. Not a card: perforated top+bottom edges via the
 * `.perf` mask, hairline shade border, faint paper grain. `edge="bottom"` only
 * notches the bottom (used where a panel meets the page top).
 */
export function Receipt({
  children,
  className = '',
  edge = 'both',
}: {
  children: ReactNode
  className?: string
  edge?: 'both' | 'bottom'
}) {
  return (
    <div
      className={`paper-grain bg-paper ring-1 ring-paper-shade ${
        edge === 'both' ? 'perf' : 'perf-bottom'
      } ${className}`}
    >
      {children}
    </div>
  )
}
