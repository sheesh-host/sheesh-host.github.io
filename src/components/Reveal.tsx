import type { ElementType, ReactNode } from 'react'

/** Wraps content so useReveal prints it in. `delay` staggers line-by-line. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
}) {
  return (
    <Tag className={`reveal ${className}`} data-delay={delay}>
      {children}
    </Tag>
  )
}
