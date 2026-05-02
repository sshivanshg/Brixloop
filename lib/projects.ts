/**
 * Add or edit entries here to show work on /portfolio.
 * Each project opens at `/project/{slug}` where `slug` is derived from `title`
 * (e.g. Lexvault → /project/lexvault). See `slugifyProjectTitle`.
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
  /** Long-form copy for the portfolio spotlight (paragraphs). */
  detailParagraphs: string[]
  /** Short capability bullets shown in the spotlight. */
  detailHighlights: string[]
}

/** Remote snapshot previews (WordPress mshots) — reliable when sites block iframe embeds. */
function mshot(url: string): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1600`
}

export const projects: Project[] = [
  {
    id: "tiny-tales-videos",
    title: "Tiny Tales Videos",
    summary:
      "Personalized animated storytelling for children — generative video pipelines, parent-safe workflows, and infrastructure tuned for viral traffic and repeat renders.",
    tags: ["AI Video", "Generative Media", "Consumer Scale", "Family Tech"],
    year: "2026 / Global",
    featured: true,
    embedUrl: "https://www.tinytalesvideos.com/",
    imageSrc: mshot("https://www.tinytalesvideos.com/"),
    liveHref: "https://www.tinytalesvideos.com/",
    detailParagraphs: [
      "Tiny Tales targets families who want bespoke animated stories without a production studio budget. The product couples prompt-style personalization with a constrained creative pipeline so outputs stay age-appropriate and on-brand.",
      "Technically, the hardest problems are render throughput and cost control when campaigns spike — classic viral curves where naive queueing collapses margin. We optimized for parallelized generation, caching of reusable assets, and graceful degradation when providers throttle.",
      "On the experience side, parents need clarity on what will be generated, how long it takes, and how to iterate safely. We built flows that separate preview, confirm, and paid render so trust stays high and chargebacks stay low.",
    ],
    detailHighlights: [
      "Personalization layer tuned for child-safe narratives and repeatable visual motifs",
      "Async generation pipeline with resilience under traffic spikes",
      "Separation of preview vs final render for predictable billing",
      "Operational hooks for monitoring failures and provider fallbacks",
    ],
  },
  {
    id: "lexvault",
    title: "Lexvault",
    summary:
      "India-focused legal workspace combining AI drafting, clause intelligence, collaborative editing, e-signatures, and contract lifecycle tooling — from NDAs to compliance-heavy agreements.",
    tags: ["LegalTech", "LLM Products", "Collaboration", "Compliance"],
    year: "2026 / India",
    featured: true,
    embedUrl: "https://www.lexvault.in/",
    imageSrc: mshot("https://www.lexvault.in/"),
    liveHref: "https://www.lexvault.in/",
    detailParagraphs: [
      "Lexvault treats contracts as living workflows rather than static Word files. Teams describe intent in natural language, then steer AI-generated drafts through structured review — critical where Indian statutes, parties, and indemnities vary by deal type.",
      "The surface combines a collaborative editor, clause libraries, risk callouts, and e-sign so legal, HR, and procurement stay inside one permissioned workspace instead of email attachments.",
      "Security and confidentiality positioning matters as much as model quality: enterprise buyers expect role-based access, audit trails, and clear data-handling guarantees alongside accurate drafting.",
    ],
    detailHighlights: [
      "Template-driven drafting with India-aware legal research hooks",
      "Real-time collaboration with tracked suggestions and ownership",
      "AI-assisted clause rewrite, explanation, and risk surfacing",
      "End-to-end path from draft → approve → sign → archive",
    ],
  },
  {
    id: "es-rentals-dubai",
    title: "ES Rentals",
    summary:
      "Premium luxury car rental in Dubai with date- and fleet-aware discovery, pickup flows, and promotional merchandising — hospitality-grade booking UX for high-ticket mobility.",
    tags: ["Booking UX", "Travel & Mobility", "UAE Market", "Conversion"],
    year: "2026 / UAE",
    embedUrl: "https://www.esrentacar.ae/",
    imageSrc: mshot("https://www.esrentacar.ae/"),
    liveHref: "https://www.esrentacar.ae/",
    detailParagraphs: [
      "Luxury mobility is a trust-heavy purchase: clarity on availability, pickup logistics, and pricing tiers decides conversion more than hero imagery. ES Rentals leads with inventory breadth — sports to SUVs — framed with Dubai-specific expectations.",
      "The booking layer needs fast filtering by duration and vehicle class while keeping calendars honest across peak seasons and promotions (Ramadan specials, limited fleets). Small UX gaps erode confidence on high-ticket rentals.",
      "Performance and mobile polish matter because travelers decide on phones at the airport or hotel. Lightweight critical paths and trustworthy confirmation states reduce drop-off before deposit.",
    ],
    detailHighlights: [
      "Search tuned around pickup windows, duration presets, and fleet taxonomy",
      "Promotional merchandising without breaking canonical pricing clarity",
      "Mobile-first reservation funnel with decisive confirmation UX",
      "UAE market positioning and luxury hospitality tone throughout",
    ],
  },
  {
    id: "wonder-creative-studio",
    title: "Wonder Creative Studio",
    summary:
      "Full-service digital partner spanning web and app builds, brand systems, SEO, performance marketing, and AI-driven sales automation — unified growth stack for 250+ client relationships.",
    tags: ["Full-Stack", "Marketing Automation", "AI Sales", "Brand & Growth"],
    year: "2024+ / Global",
    embedUrl: "https://www.wondercreativestudios.com/",
    imageSrc: mshot("https://www.wondercreativestudios.com/"),
    liveHref: "https://www.wondercreativestudios.com/",
    detailParagraphs: [
      "Wonder Creative Studio sells outcomes, not deliverables: acquisition sites, automation, and AI-assisted sales workflows bundled for SMBs and mid-market brands that cannot hire separate agencies for each lane.",
      "Their stack spans modern web (React/Next-class positioning), performance marketing, SEO, and tooling integrations — the site itself demonstrates motion-rich storytelling and proof density typical of high-touch consultancies.",
      "Automation narratives (digital workers, analytics dashboards) signal maturity beyond brochureware — useful when buyers compare agencies on operational leverage, not only aesthetics.",
    ],
    detailHighlights: [
      "Capability breadth: brand, web/app, SEO, paid, and automation",
      "AI-forward positioning for sales acceleration and operations",
      "Social proof and metrics-forward storytelling for credibility",
      "Tech stack transparency that resonates with technical buyers",
    ],
  },
  {
    id: "inarchdezign",
    title: "INARCHDEZIGN",
    summary:
      "Architecture, interior, and landscape practice with a cinematic portfolio site — emphasizing curated materials, passive-house thinking, and premium residential positioning.",
    tags: ["Creative Portfolio", "Architecture", "Interiors", "Editorial UX"],
    year: "2025 / Design",
    embedUrl: "https://www.inarchdezign.com/",
    imageSrc: mshot("https://www.inarchdezign.com/"),
    liveHref: "https://www.inarchdezign.com/",
    detailParagraphs: [
      "INARCHDEZIGN’s digital presence mirrors how studios win luxury residential work: restrained typography, generous whitespace, and editorial pacing instead of noisy grids.",
      "The narrative blends architecture, interior, and landscape — a holistic pitch that matches affluent clients who expect one coordinated vision rather than siloed trades.",
      "Passive-house and sustainability cues elevate differentiation in markets where energy performance is both ethics and asset value.",
    ],
    detailHighlights: [
      "Portfolio-forward UX with cinematic sequencing",
      "Clear service taxonomy across architecture, interiors, landscape",
      "Premium materials and sustainability storytelling",
      "Social proof via awards, tenure, and completion counts",
    ],
  },
  {
    id: "arth-saathi",
    title: "Arth Saathi",
    summary:
      "Staff operating system for Indian businesses: attendance, payroll, leave policies, and identity verification in one controlled surface — HR ops without spreadsheet chaos.",
    tags: ["HR Tech", "Payroll", "India SaaS", "Workforce Identity"],
    year: "2025 / India",
    embedUrl: "https://arthsaathi.co.in/",
    imageSrc: mshot("https://arthsaathi.co.in/"),
    liveHref: "https://arthsaathi.co.in/",
    detailParagraphs: [
      "SMB payroll in India is chronically fragmented — biometric attendance in one tool, Excel salary sheets in another, WhatsApp for approvals. Arth Saathi consolidates the daily operational truth into one Staff OS narrative.",
      "Identity verification and attendance integrity underpin statutory compliance and payout accuracy; surfacing present/absent/half-day states with immediate actions reduces HR firefighting.",
      "Salary dashboards that summarize headcount, increments, and monthly outflows speak directly to owners who think in rupees and roster stability, not HR buzzwords.",
    ],
    detailHighlights: [
      "Attendance as the source of truth with fast corrections",
      "Payroll visibility aligned to Indian workforce norms",
      "Leave policies and staffing signals in one glance",
      "Verification hooks appropriate for distributed teams",
    ],
  },
  {
    id: "leadup",
    title: "LeadUp",
    summary:
      "Two-sided marketplace connecting homeowners and offices with architects, interior designers, contractors, and Vastu consultants — requirement posting, matching, quotes, and inspiration galleries.",
    tags: ["Marketplace", "Matching Engine", "Pro Services", "Vercel"],
    year: "2025 / India",
    embedUrl: "https://leadup-ten.vercel.app/",
    imageSrc: mshot("https://leadup-ten.vercel.app/"),
    liveHref: "https://leadup-ten.vercel.app/",
    detailParagraphs: [
      "LeadUp refracts a noisy offline market — interiors and construction — into a guided discovery flow: intent capture, category-specific matching, and quote comparison before commitment.",
      "Including Vastu as a first-class category respects regional buyer behavior and widens TAM beyond generic “find an interior designer” aggregators.",
      "Gallery-led inspiration reduces blank-page anxiety for homeowners while keeping pathways toward posting a requirement and talking to vetted professionals.",
    ],
    detailHighlights: [
      "Structured intake for scope, budget, and timeline",
      "Multi-disciplinary marketplace (architects, designers, contractors)",
      "Comparison-oriented UX for quotes and portfolios",
      "Design ideas hub feeding top-of-funnel engagement",
    ],
  },
  {
    id: "ddesigno",
    title: "DDesigno",
    summary:
      "Premium home interior and modular kitchen brand web presence — consultancy funnels, package-led kitchen offers, B2C and bulk commercial positioning, and trust signals spanning residential, hospitality, and office fit-outs across India.",
    tags: ["Interior Design", "Brand Web", "India", "B2B Bulk"],
    year: "2014+ / India",
    featured: false,
    embedUrl: "https://www.ddesigno.com/",
    imageSrc: mshot("https://www.ddesigno.com/"),
    liveHref: "https://www.ddesigno.com/",
    detailParagraphs: [
      "DDesigno markets bespoke interiors and modular kitchens where purchase confidence comes from timelines, warranties, materials, and clear consultation paths—not generic gallery pages. The digital surface must carry premium craft language while answering practical buyer questions upfront.",
      "The site spans homeowner journeys (consultation booking, packaged kitchen pricing) and a distinct commercial lane (hotels, offices, bulk orders), each with appropriate proof density so both retail leads and specifier buyers recognize fit quickly.",
      "Indian interior buying still runs heavily on WhatsApp-style trust and showroom follow-up; the experience layers phone and email prominently, repeats service guarantees, and uses portfolio slices (kitchens, bedrooms, living) so visitors route to relevance before enquiry.",
    ],
    detailHighlights: [
      "Dual-track storytelling for residential consultations and bulk / enterprise interiors",
      "Package-forward modular kitchen offers with clear escalation to design consults",
      "Service proofs: tenure, timelines, throughput, warranty, and material positioning",
      "Portfolio segmentation by space type so inspiration maps to enquiry intent",
    ],
  },
]

/** URL segment from display title, e.g. `Lexvault` → `lexvault`, `/project/lexvault`. */
export function slugifyProjectTitle(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function projectPagePath(project: Pick<Project, "title">): string {
  return `/project/${slugifyProjectTitle(project.title)}`
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => slugifyProjectTitle(p.title) === slug)
}
