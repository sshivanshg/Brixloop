export function TeamHero() {
  return (
    <section className="relative border-b border-foreground/10 px-6 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          People
        </p>
        <h1 className="max-w-3xl font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Team
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Leads behind Brixloop — swipe or use the arrows. On desktop, hover a card for full colour and
          details. Edit people in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground/90">
            lib/team.ts
          </code>
          ; add photos under{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground/90">
            public/
          </code>{" "}
          as <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground/90">imageSrc</code>.
        </p>
      </div>
    </section>
  )
}
