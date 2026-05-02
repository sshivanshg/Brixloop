import { FooterSection } from "@/components/landing/footer-section"
import { Navigation } from "@/components/landing/navigation"
import { SITE_DESCRIPTION } from "@/lib/site"
import { MOCK_BLOG_POSTS } from "@/lib/blog-mock-data"
import { BlogCard } from "@/components/blog/blog-card"

export function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative border-b border-foreground/10 px-6 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Blog
          </p>
          <h1 className="max-w-3xl font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ideas for teams shipping at speed
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {SITE_DESCRIPTION}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground/90 leading-relaxed">
            Field notes on product craft, launches, and the systems that keep creative teams aligned — so you can build, deploy, and scale without losing coherence.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 py-14 lg:px-12 lg:py-16">
        <div className="mb-10 flex flex-col gap-2 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Latest
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground md:text-3xl">
              From the studio
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Swap the feed below for your CMS or markdown pipeline — the card layout stays the same.
          </p>
        </div>

        <ul className="grid list-none gap-6 p-0 md:grid-cols-2 md:gap-8">
          {MOCK_BLOG_POSTS.map((post) => (
            <li key={post.slug} className="min-h-0">
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </section>

      <FooterSection />
    </main>
  )
}
