/**
 * Add or edit entries here to show work on /portfolio.
 * Optional `imageSrc` is a path under `public/` (e.g. `/images/project.jpg`).
 */
export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  /** Path under public/, e.g. `/portfolio/my-cover.jpg` */
  imageSrc?: string
  liveHref?: string
  repoHref?: string
  year?: string
}

export const projects: Project[] = [
  {
    id: "example-ship-dashboard",
    title: "Ship dashboard",
    summary:
      "Internal analytics and release tracking for product teams. Replace this copy with your real project description.",
    tags: ["Next.js", "Product", "Design system"],
    year: "2025",
    liveHref: "#",
    repoHref: "#",
  },
  {
    id: "example-api-platform",
    title: "API platform",
    summary:
      "Developer-facing docs and playground for a REST API. Swap in your stack, links, and imagery.",
    tags: ["TypeScript", "API", "Docs"],
    year: "2024",
    liveHref: "#",
  },
  {
    id: "example-brand-site",
    title: "Marketing site",
    summary:
      "Landing experience with motion and content blocks. Add `imageSrc` when you have a cover image in `public/`.",
    tags: ["Web", "Brand", "Motion"],
    year: "2024",
    repoHref: "#",
  },
]
