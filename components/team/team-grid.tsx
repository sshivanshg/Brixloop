"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { teamMembers, type TeamMember, type TeamSocialLinks } from "@/lib/team"
import { cn } from "@/lib/utils"

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0]![0]}${parts[parts.length - 1]![0]}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase() || "?"
}

const socialConfig: {
  key: keyof TeamSocialLinks
  label: string
  Icon: typeof Linkedin
}[] = [
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "twitter", label: "Twitter / X", Icon: Twitter },
  { key: "github", label: "GitHub", Icon: Github },
  { key: "website", label: "Website", Icon: Globe },
]

function SocialLinks({ social, className }: { social: TeamSocialLinks; className?: string }) {
  const items = socialConfig
    .map(({ key, label, Icon }) => {
      const href = social[key]
      if (!href) return null
      return (
        <Link
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/90 backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-primary/25 hover:text-white"
        >
          <Icon className="size-4" />
        </Link>
      )
    })
    .filter(Boolean)

  if (items.length === 0) {
    return (
      <p className={cn("text-xs text-white/50", className)}>
        Add social URLs in <span className="font-mono text-white/70">lib/team.ts</span>
      </p>
    )
  }

  return <div className={cn("flex flex-wrap gap-2", className)}>{items}</div>
}

/** Hover/focus: color image + warm overlay. Default: heavy black + grayscale. */
const cardInteractive =
  "group/card relative aspect-[3/4] w-full max-h-[min(72vh,640px)] overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/40 outline-none ring-offset-background transition-[box-shadow,transform] duration-500 hover:border-primary/35 hover:shadow-[0_0_0_1px_rgba(232,80,2,0.25),0_25px_50px_-12px_rgba(0,0,0,0.65)] focus-visible:ring-2 focus-visible:ring-primary/50"

const mediaBase =
  "absolute inset-0 size-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:scale-105 md:grayscale md:brightness-[0.45] md:contrast-[0.92] md:group-hover/card:scale-110 md:group-hover/card:grayscale-0 md:group-hover/card:brightness-100 md:group-hover/card:contrast-100 md:group-focus-within/card:scale-110 md:group-focus-within/card:grayscale-0 md:group-focus-within/card:brightness-100 md:group-focus-within/card:contrast-100 max-md:scale-105 max-md:brightness-[0.55]"

function TeamMemberSlide({ member }: { member: TeamMember }) {
  return (
    <article tabIndex={0} className={cardInteractive}>
      {/* Photo or placeholder */}
      {member.imageSrc ? (
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          className={mediaBase}
          sizes="(max-width: 768px) 88vw, 45vw"
          priority={false}
        />
      ) : (
        <div
          className={cn(
            mediaBase,
            "flex items-end justify-start bg-brand-gradient p-8 font-display text-5xl tracking-tight text-white/90 md:grayscale md:brightness-[0.35] md:group-hover/card:grayscale-0 md:group-hover/card:brightness-100 md:group-focus-within/card:grayscale-0 md:group-focus-within/card:brightness-100",
          )}
          aria-hidden
        >
          <span className="relative z-10 drop-shadow-lg">{initialsFromName(member.name)}</span>
          <div className="absolute inset-0 bg-black/45 md:bg-black/55 md:transition-opacity md:duration-500 md:group-hover/card:bg-black/20 md:group-focus-within/card:bg-black/20" />
        </div>
      )}

      {/* Black wash → colour wash on hover */}
      <div
        className="pointer-events-none absolute inset-0 bg-black/55 transition-all duration-500 md:group-hover/card:bg-gradient-to-t md:group-hover/card:from-black md:group-hover/card:via-black/35 md:group-hover/card:to-primary/35 md:group-focus-within/card:bg-gradient-to-t md:group-focus-within/card:from-black md:group-focus-within/card:via-black/35 md:group-focus-within/card:to-primary/35 max-md:bg-gradient-to-t max-md:from-black/80 max-md:via-black/45 max-md:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,80,2,0.45),transparent_55%)] md:group-hover/card:opacity-100 md:group-focus-within/card:opacity-100 max-md:opacity-40"
        aria-hidden
      />

      {/* Readable text band */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/85 to-transparent opacity-95 md:opacity-90 md:transition-opacity md:duration-500 md:group-hover/card:opacity-100 md:group-focus-within/card:opacity-100"
        aria-hidden
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="pointer-events-auto">
          <h2 className="font-display text-2xl tracking-tight text-white md:text-3xl">
            {member.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-primary md:text-base">{member.role}</p>

          {member.bio ? (
            <p
              className={cn(
                "mt-3 max-w-prose text-sm leading-relaxed text-white/85 transition-all duration-500 md:translate-y-1 md:opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-focus-within/card:opacity-100 max-md:opacity-100 max-md:translate-y-0",
              )}
            >
              {member.bio}
            </p>
          ) : null}

          <div
            className={cn(
              "mt-5 transition-all duration-500 delay-75 md:translate-y-2 md:opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 md:group-focus-within/card:translate-y-0 md:group-focus-within/card:opacity-100 max-md:translate-y-0 max-md:opacity-100",
            )}
          >
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Connect
            </p>
            <SocialLinks social={member.social} />
          </div>
        </div>
      </div>
    </article>
  )
}

export function TeamGrid() {
  return (
    <div className="relative mx-auto w-full max-w-[1200px] px-2 md:px-10">
      <Carousel
        opts={{
          align: "start",
          loop: teamMembers.length > 1,
          dragFree: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-5">
          {teamMembers.map((member) => (
            <CarouselItem
              key={member.id}
              className="pl-3 md:pl-5 basis-[88%] sm:basis-[78%] md:basis-[56%] lg:basis-[48%]"
            >
              <TeamMemberSlide member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center gap-3">
          <CarouselPrevious
            variant="outline"
            className="static top-auto left-auto size-11 translate-y-0 border-white/20 bg-background/90 text-foreground shadow-lg backdrop-blur-md hover:border-primary hover:bg-primary hover:text-primary-foreground"
          />
          <CarouselNext
            variant="outline"
            className="static top-auto right-auto size-11 translate-y-0 border-white/20 bg-background/90 text-foreground shadow-lg backdrop-blur-md hover:border-primary hover:bg-primary hover:text-primary-foreground"
          />
        </div>
      </Carousel>
    </div>
  )
}
