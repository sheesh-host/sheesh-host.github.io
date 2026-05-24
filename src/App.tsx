/**
 * PLACEHOLDER ONLY.
 *
 * This is intentionally minimal — it exists to prove the Vite + Tailwind +
 * GitHub Pages pipeline. The real landing page is built in "Phase B" by the
 * `impeccable` skill (`/impeccable craft landing page`) after the agent is
 * relaunched. See HANDOVER.md and docs/brief.md.
 */
function App() {
  return (
    <main className="min-h-svh bg-[#F6F1E7] text-[#1A1A1A] font-mono flex flex-col items-center justify-center gap-6 p-8 text-center">
      <img src="/printer.webp" alt="sheesh.host" width={160} height={160} />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        <span className="text-[#FF6A1A]">&lt;/&gt;</span> sheesh.host
      </h1>
      <p className="text-lg">git push. instant https.</p>
      <p className="max-w-prose text-sm opacity-70">
        Self-hostable, git-native gated publishing for static artifacts. Landing
        page under construction.
      </p>
      <a
        className="underline decoration-[#FF6A1A] decoration-2 underline-offset-4 hover:text-[#FF6A1A]"
        href="https://github.com/sheesh-host"
      >
        github.com/sheesh-host
      </a>
    </main>
  )
}

export default App
