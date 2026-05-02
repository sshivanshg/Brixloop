import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Blogs — Brixloop",
  description: "Articles and updates from Brixloop.",
}

export default function BlogsPage() {
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
            Blogs
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Add posts here (CMS, MDX, or a list component). This page is a placeholder so the nav link
            works until you wire up content.
          </p>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
