export function PortfolioHero() {
  return (
    <section className="relative border-b border-foreground/10 px-6 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Work
        </p>
        <h1 className="max-w-3xl font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Portfolio
        </h1>
        {/* <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Case studies and shipped products. Extend the list in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground/90">
            lib/projects.ts
          </code>{" "}
          — add titles, summaries, tags, links, and optional cover images under{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground/90">
            public/
          </code>
          .
        </p> */}
      </div>
    </section>
  )
}
