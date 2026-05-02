"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  type LucideIcon,
  Cpu,
  Gauge,
  Layers,
  Shield,
  Zap,
} from "lucide-react"
import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { fallbackPreviewSvg } from "@/components/portfolio/project-cover"
import { DesktopScaledSitePreview } from "@/components/portfolio/desktop-scaled-site-preview"
import { TagPill } from "@/components/portfolio/tag-pill"

const springChild = {
  type: "spring",
  stiffness: 400,
  damping: 33,
  mass: 0.82,
} as const

/** Rotate icons across focus bullets — safety, throughput, layering, systems, scale. */
const FOCUS_ICONS: LucideIcon[] = [Shield, Zap, Layers, Cpu, Gauge]

function splitYearScope(year?: string) {
  if (!year) return { timeline: "", region: "" }
  const parts = year.split(/\s*\/\s*/).map((s) => s.trim())
  return {
    timeline: parts[0] ?? "",
    region: parts[1] ?? "",
  }
}

function spotlightBullets(project: Project): string[] {
  return project.detailHighlights.slice(0, 5)
}

function SnapshotGallery({
  title,
  imageSrc,
  embedUrl,
}: {
  title: string
  imageSrc?: string
  embedUrl?: string
}) {
  const hasImage = Boolean(imageSrc)

  if (!embedUrl && !hasImage) {
    return (
      <div className="flex min-h-[320px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/35">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-3 p-6">
          {/* eslint-disable-next-line @next/next/no-img-element -- remote preview fallback */}
          <img src={fallbackPreviewSvg} alt="" className="h-32 w-auto opacity-50" />
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Preview unavailable · open live site below
          </p>
          <p className="truncate font-display text-lg text-white/75">{title}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[min(560px,calc(100dvh-10rem))] flex-col gap-3">
      <div className="relative min-h-[220px] flex-[2] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-inner shadow-black/50">
        {embedUrl ? (
          <DesktopScaledSitePreview
            embedUrl={embedUrl}
            title={`${title} live site preview`}
            withBottomGradient
            className="min-h-[220px] w-full"
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- remote mshots URL */}
            <img
              src={imageSrc}
              alt={`${title} primary snapshot`}
              className="h-full min-h-[220px] w-full object-cover object-top"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </>
        )}
        <p className="absolute bottom-4 left-4 right-4 font-display text-lg tracking-tight text-white/[0.97] line-clamp-2 md:text-xl">
          {title}
        </p>
      </div>
      {imageSrc && !embedUrl ? (
        <div className="grid flex-shrink-0 grid-cols-2 gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
            <img src={imageSrc} alt="" className="size-full object-cover object-[center_top]" loading="lazy" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageSrc} alt="" className="size-full object-cover object-[center_28%]" loading="lazy" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function MetadataField({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <div>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">{label}</span>
      <p className="mt-2.5 text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">{value}</p>
    </div>
  )
}

export function ProjectDetailView({ project }: { project: Project }) {
  const bullets = spotlightBullets(project)
  const { timeline, region } = splitYearScope(project.year)
  const categoryLabel = project.tags[0]
  const yearDisplay = timeline || project.year || ""
  const locationDisplay = region || ""

  /** Defer stagger until after hydration so SSR and first client render both use `hid` (fixes mismatch). */
  const [motionReady, setMotionReady] = useState(false)
  useEffect(() => {
    setMotionReady(true)
  }, [])

  return (
    <div
      key={project.id}
      className={cn(
        "flex w-full min-w-0 flex-col gap-10 overflow-x-hidden md:gap-14",
      )}
    >
      {/* Hero / gallery — deep black, no gradient */}
      <div className="w-full min-w-0">
        <div className="w-full rounded-3xl border border-white/[0.08] bg-zinc-950/40 p-2 sm:p-3 backdrop-blur-xl shadow-2xl shadow-black/50">
          <SnapshotGallery title={project.title} imageSrc={project.imageSrc} embedUrl={project.embedUrl} />
        </div>
      </div>

      {/* Case study body — separated band with subtle gradient */}
      <div className="min-w-0 pb-10">
        <div
          className={cn(
            "rounded-3xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/40 via-zinc-950/40 to-black/80 backdrop-blur-md shadow-2xl shadow-black/40",
            "px-6 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-10 lg:py-12 xl:px-12 xl:py-14",
          )}
        >
          <motion.div
            initial="hid"
            animate={motionReady ? "show" : "hid"}
            variants={{
              hid: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
            }}
            className="flex flex-col gap-16 md:gap-20"
          >
            {/* ~70 / ~30 case study header */}
            <motion.div
              variants={{
                hid: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: springChild },
              }}
              className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:gap-12 xl:gap-14"
            >
              <div className="min-w-0 space-y-6 lg:col-span-7">
                {project.featured ? (
                  <span className="inline-flex rounded-full border border-brand-orange/50 bg-brand-orange/[0.06] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-orange shadow-[0_0_28px_-12px_rgba(232,80,2,0.38)]">
                    Featured
                  </span>
                ) : null}

                <h1
                  className={cn(
                    "font-display font-bold tracking-[-0.035em] text-zinc-50",
                    "text-[2.25rem] leading-[1.05] sm:text-[2.75rem] md:text-[3.25rem] xl:text-[3.5rem]",
                  )}
                >
                  {project.title}
                </h1>

                <p className="max-w-2xl text-[1.05rem] leading-relaxed text-zinc-300 sm:text-[1.125rem] sm:leading-relaxed md:text-[1.15rem]">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </div>

              <aside className="flex flex-col gap-10 border-t border-white/10 pt-10 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
                {yearDisplay ? <MetadataField label="Year" value={yearDisplay} /> : null}
                {locationDisplay ? <MetadataField label="Location" value={locationDisplay} /> : null}
                {!yearDisplay && !locationDisplay && project.year ? (
                  <MetadataField label="Scope" value={project.year} />
                ) : null}
                {categoryLabel ? <MetadataField label="Category" value={categoryLabel} /> : null}
              </aside>
            </motion.div>

            {/* Engineering — feature cards */}
            <motion.section
              variants={{
                hid: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: springChild },
              }}
              aria-labelledby="project-engineering-heading"
              className="border-t border-white/[0.06] pt-16 md:pt-20"
            >
              <h2
                id="project-engineering-heading"
                className={cn(
                  "font-display text-2xl font-bold tracking-[-0.02em] text-zinc-50 md:text-3xl lg:text-[2rem] xl:text-[2.125rem]",
                )}
              >
                Engineering &amp; product focus
              </h2>

              <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-1 md:mt-12 md:gap-5">
                {bullets.map((text, i) => {
                  const Icon = FOCUS_ICONS[i % FOCUS_ICONS.length]
                  return (
                    <li key={text}>
                      <div
                        className={cn(
                          "group/focus flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 md:gap-5 md:p-6",
                          "hover:border-brand-orange/40 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_-12px_rgba(232,80,2,0.15)]",
                        )}
                      >
                        <div
                          className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-brand-orange/35 bg-brand-orange/[0.08] text-brand-orange shadow-[0_0_24px_-10px_rgba(232,80,2,0.45)] transition-colors duration-300 group-hover/focus:border-brand-orange/55 group-hover/focus:bg-brand-orange/[0.12]"
                          aria-hidden
                        >
                          <Icon className="size-[22px]" strokeWidth={1.75} />
                        </div>
                        <p className="min-w-0 flex-1 text-[15px] leading-relaxed text-[#9CA3AF] md:text-[15.5px]">
                          {text}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </motion.section>

            {project.liveHref ? (
              <motion.div
                variants={{
                  hid: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: springChild },
                }}
                className="flex justify-center border-t border-white/[0.06] pt-10 md:justify-end md:pt-12"
              >
                <Link
                  href={project.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group/cta relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#bf4502]/60 bg-brand-orange px-8 py-3.5 text-[15px] font-semibold tracking-tight text-white",
                    "transition-[box-shadow,transform,filter,border-color] duration-300",
                    "hover:shadow-[0_0_48px_-8px_rgba(232,80,2,0.55)] active:translate-y-px",
                  )}
                >
                  <span className="relative z-[1]">View Live Site</span>
                  <ArrowUpRight
                    className="relative z-[1] size-[18px] transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    strokeWidth={2.35}
                  />
                </Link>
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
