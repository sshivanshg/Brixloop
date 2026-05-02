/**
 * Preview content for `/blogs`. Replace this module with CMS or MDX fetching when ready.
 */
export type BlogPostPreview = {
  slug: string
  title: string
  excerpt: string
  /** ISO date string (`YYYY-MM-DD`) for formatting */
  publishedAt: string
  thumbnailSrc: string
  thumbnailAlt: string
}

export const MOCK_BLOG_POSTS: BlogPostPreview[] = [
  {
    slug: "design-systems-at-velocity",
    title: "Design systems that survive real shipping pressure",
    excerpt:
      "Why token discipline, regression-friendly components, and documentation habits matter when your team is moving fast — without freezing creativity.",
    publishedAt: "2026-04-12",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    thumbnailAlt: "Abstract gradient and geometric shapes on a dark UI mockup",
  },
  {
    slug: "from-prototype-to-production",
    title: "From prototype to production without the rewrite trap",
    excerpt:
      "A practical checklist for teams who need to iterate in public while keeping infra, observability, and accessibility on the roadmap from day one.",
    publishedAt: "2026-03-28",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    thumbnailAlt: "Laptop displaying analytics dashboards in a dark office",
  },
  {
    slug: "ai-workflows-your-team-can-own",
    title: "AI workflows your team can actually own",
    excerpt:
      "Grounding prompts, evaluating outputs, and shipping agentic features with clear ownership — so acceleration doesn’t become an operational liability.",
    publishedAt: "2026-03-06",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    thumbnailAlt: "Neural network abstract visualization",
  },
  {
    slug: "brand-and-engineering-in-sync",
    title: "When brand narrative and engineering roadmaps sync",
    excerpt:
      "How we align positioning, UX, and release cadence so launches feel coherent in-market — not like a scramble between disparate teams.",
    publishedAt: "2026-02-19",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    thumbnailAlt: "Team collaborating around a laptop in an open workspace",
  },
]

export function getBlogPostBySlug(slug: string): BlogPostPreview | undefined {
  return MOCK_BLOG_POSTS.find((p) => p.slug === slug)
}
