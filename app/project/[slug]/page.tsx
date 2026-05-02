import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { ProjectDetailView } from "@/components/portfolio/project-detail-view"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, projects, slugifyProjectTitle } from "@/lib/projects"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugifyProjectTitle(p.title) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return { title: "Project — Brixloop" }
  }
  return {
    title: `${project.title} — Brixloop Portfolio`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-20 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="mb-10 lg:mb-12">
          <Button variant="outline" className="rounded-full border-white/[0.12] bg-transparent text-zinc-200 hover:bg-white/[0.05]" asChild>
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 size-4" />
              Back to portfolio
            </Link>
          </Button>
        </div>
        <ProjectDetailView project={project} />
      </div>
      <FooterSection />
    </main>
  )
}
