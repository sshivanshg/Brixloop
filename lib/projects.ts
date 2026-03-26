/**
 * Add or edit entries here to show work on /portfolio.
 *
 * Preview options (pick what fits each project):
 * - `embedUrl` — live page in an iframe (blocked by many sites via X-Frame-Options / CSP).
 * - `imageSrc` — screenshot path under `public/` or an HTTPS image URL (reliable).
 * - Open Graph: fetch `og:image` server-side in a Route Handler if you need rich cards without iframe.
 */
export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  featured?: boolean
  /** HTTPS URL to embed in the browser mockup (may be blank if the site forbids framing). */
  embedUrl?: string
  /** Path under public/ or remote image URL — screenshot / OG-style preview. */
  imageSrc?: string
  liveHref?: string
  repoHref?: string
  year?: string
}

export const projects: Project[] = [
  {
    id: "tiny-tales-videos",
    title: "Tiny Tales Videos",
    summary:
      "An AI-powered video generator for children. We engineered the core generative engine and a viral loop architecture that handles high-traffic rendering at scale.",
    tags: ["AI Engineering", "Next.js", "MLOps", "Global Scale"],
    year: "2026 / Global",
    featured: true,
    embedUrl: "https://tinytalesvideos.com",
    imageSrc:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftinytalesvideos.com?w=1600",
    liveHref: "https://tinytalesvideos.com",
    repoHref: "https://tinytalesvideos.com",
  },
  {
    id: "example-growth-dashboard",
    title: "Growth command center",
    summary:
      "Real-time campaign intelligence platform with multi-channel attribution and operator-first automation dashboards.",
    tags: ["Product Analytics", "Automation", "Realtime"],
    year: "2025 / North America",
    liveHref: "#",
    repoHref: "#",
  },
  {
    id: "example-conversion-lab",
    title: "Conversion lab",
    summary:
      "Experimentation workspace for high-performing landing pages, audience segments, and rapid hypothesis validation.",
    tags: ["CRO", "Experimentation", "Design Ops"],
    year: "2024 / Remote",
    liveHref: "#",
    repoHref: "#",
  },
]
