/** Single source for default SEO + home hero (keep in sync by editing here only). */
export const SITE_DESCRIPTION =
  "The creative platform for teams who innovate. Build, deploy, and scale with unprecedented velocity."

const firstSentenceBreak = SITE_DESCRIPTION.indexOf(". ")

export const SITE_HERO_HEADLINE =
  firstSentenceBreak === -1
    ? SITE_DESCRIPTION
    : SITE_DESCRIPTION.slice(0, firstSentenceBreak + 1)

export const SITE_HERO_SUBLINE =
  firstSentenceBreak === -1 ? "" : SITE_DESCRIPTION.slice(firstSentenceBreak + 2)
