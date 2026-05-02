import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { TeamHero } from "@/components/team/team-hero"
import { TeamGrid } from "@/components/team/team-grid"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Team — Brixloop",
  description: "Meet the people and leads behind Brixloop.",
}

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <TeamHero />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <TeamGrid />
      </div>
      <FooterSection />
    </main>
  )
}
