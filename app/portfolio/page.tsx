import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { ProjectGrid } from "@/components/portfolio/project-grid"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio — Brixloop",
  description:
    "Selected projects and case studies. Add your work in lib/projects.ts.",
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <PortfolioHero />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <ProjectGrid />
        <div className="mt-16 flex justify-center border-t border-foreground/10 pt-12">
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
      <FooterSection />
    </main>
  )
}
