import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { Button } from "@/components/ui/button"
import { InquiryForm } from "@/components/services/inquiry-form"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Services — Brixloop",
  description:
    "BrixLoop bridges the gap between advanced engineering (The Brix) and next-level market growth (The Loop). Build and grow with expert solutions and AI innovation.",
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <section className="relative border-b border-foreground/10 px-6 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <h1 className="max-w-3xl font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Engineered to Build. Marketed to Win.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            BrixLoop is a hybrid agency for the modern era. We bridge the gap between complex engineering (<span className="text-foreground/90">The Brix</span>) and aggressive market growth (<span className="text-foreground/90">The Loop</span>). We don&apos;t just deliver projects; we architect growth engines.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-6 lg:px-12 lg:pb-8">
        <div className="grid gap-4 border-y border-border py-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
          <div className="md:pr-10 lg:pr-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The Brix</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground md:text-3xl">
              Full-Stack Engineering
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              High-performance backends, custom web/mobile apps, and scalable cloud infrastructure designed to handle your first 10,000 users without breaking.
            </p>
          </div>
          <div className="md:pl-10 lg:pl-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The Loop</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground md:text-3xl">
              Performance Marketing
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Data-driven acquisition, SEO-ready architecture, and GTM strategies that ensure your technology directly converts into revenue.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              The Brix
            </p>
            <h3 className="mt-2 font-display text-xl tracking-tight text-foreground md:text-2xl">
              Full-Stack Engineering
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              High-performance backends, custom web/mobile apps, and scalable cloud infrastructure designed to handle your first 10,000 users without breaking.
            </p>
          </li>
          <li className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Intelligence
            </p>
            <h3 className="mt-2 font-display text-xl tracking-tight text-foreground md:text-2xl">
              Autonomous AI Solutions
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Integrating agentic AI and LLM workflows into your business logic to automate operations and drive technical innovation.
            </p>
          </li>
          <li className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              The Loop
            </p>
            <h3 className="mt-2 font-display text-xl tracking-tight text-foreground md:text-2xl">
              Performance Marketing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Data-driven acquisition, SEO-ready architecture, and GTM strategies that ensure your technology directly converts into revenue.
            </p>
          </li>
        </ul>
      </section>

      <section id="inquiry-form" className="relative z-10 mx-auto max-w-[1400px] px-6 py-14 lg:px-12 lg:py-16">
        <InquiryForm />
      </section>

      <div className="relative z-10 mx-auto flex max-w-[1400px] justify-center px-6 pb-16 lg:px-12">
        <Button variant="outline" className="rounded-full" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to home
          </Link>
        </Button>
      </div>
      <FooterSection />
    </main>
  )
}
