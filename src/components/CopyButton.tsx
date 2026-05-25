import { useState } from 'react'

/** Copies the given text; announces state. Used in the terminal try-it block. */
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="font-mono text-xs uppercase tracking-widest text-term-soft transition-colors hover:text-lime focus-visible:text-lime"
    >
      {copied ? 'copied ✓' : 'copy'}
    </button>
  )
}
