"use client"

import { projects } from "@/lib/projects"
import { PortfolioProjectCard } from "@/components/portfolio/portfolio-project-card"

export function ProjectGrid() {
  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

  return (
    <div className="grid items-stretch gap-7 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
      {orderedProjects.map((project) => (
        <PortfolioProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
