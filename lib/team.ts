/**
 * Leadership and team leads shown on /team.
 * Add photos under `public/` and set `imageSrc` (e.g. `/team/jane.jpg`).
 */
export type TeamSocialLinks = {
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio?: string
  imageSrc?: string
  social: TeamSocialLinks
}

export const teamMembers: TeamMember[] = [
  {
    id: "lead-1",
    name: "Alex Rivera",
    role: "Co-founder & CEO",
    bio: "Replace with a short bio. Drives product vision and partnerships.",
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: "lead-2",
    name: "Sam Okonkwo",
    role: "Co-founder & CTO",
    bio: "Replace with a short bio. Leads engineering and technical strategy.",
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    id: "lead-3",
    name: "Jordan Lee",
    role: "Head of Design",
    bio: "Replace with a short bio. Owns brand, UX, and design systems.",
    social: {
      linkedin: "https://www.linkedin.com/",
      website: "https://example.com",
    },
  },
]
