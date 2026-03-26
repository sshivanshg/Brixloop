"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

const fallbackPreviewSvg =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000'>
      <defs>
        <linearGradient id='g' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stop-color='#111215'/>
          <stop offset='100%' stop-color='#09090b'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <rect x='48' y='48' width='1504' height='904' rx='10' fill='#101114' stroke='#26272b'/>
      <g opacity='0.55'>
        <rect x='86' y='100' width='540' height='14' rx='4' fill='#2d2f34'/>
        <rect x='86' y='126' width='410' height='14' rx='4' fill='#2d2f34'/>
        <rect x='86' y='152' width='690' height='14' rx='4' fill='#2d2f34'/>
        <rect x='86' y='220' width='1428' height='11' rx='4' fill='#24262b'/>
        <rect x='86' y='245' width='1320' height='11' rx='4' fill='#24262b'/>
        <rect x='86' y='270' width='1385' height='11' rx='4' fill='#24262b'/>
        <rect x='86' y='295' width='1190' height='11' rx='4' fill='#24262b'/>
        <rect x='86' y='320' width='1260' height='11' rx='4' fill='#24262b'/>
      </g>
      <rect x='86' y='860' width='460' height='40' rx='7' fill='#0f1013' stroke='#2a2b30'/>
      <text x='112' y='886' fill='#9ca3af' font-family='monospace' font-size='16' letter-spacing='2'>LIVE PREVIEW LOADING...</text>
    </svg>`,
  )

function ProjectCover({
  title,
  imageSrc,
  embedUrl,
  featured,
  className,
}: {
  title: string
  imageSrc?: string
  embedUrl?: string
  featured?: boolean
  className?: string
}) {
  const [useSnapshot, setUseSnapshot] = useState(false)

  const showLiveEmbed = Boolean(embedUrl && !useSnapshot)
  const showImage = Boolean(imageSrc && (!embedUrl || useSnapshot))

  if (showLiveEmbed && embedUrl) {
    return (
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900",
          className,
        )}
      >
        <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between gap-2 border-b border-white/10 bg-zinc-950/90 px-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400/90" />
            <span className="size-2.5 rounded-full bg-yellow-400/90" />
            <span className="size-2.5 rounded-full bg-green-400/90" />
          </div>
          {imageSrc ? (
            <button
              type="button"
              onClick={() => setUseSnapshot(true)}
              className="rounded-md border border-white/15 bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300 transition-colors hover:border-orange-400/50 hover:text-zinc-100"
            >
              Snapshot
            </button>
          ) : null}
        </div>
        <div className="absolute inset-0 top-9 overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:-translate-y-[10%]">
              <iframe
                src={embedUrl}
                title={`${title} live preview`}
                className="pointer-events-none block h-[140%] min-h-[20rem] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
      </div>
    )
  }

  if (showImage && imageSrc) {
    const isExternalImage = imageSrc.startsWith("http://") || imageSrc.startsWith("https://")

    return (
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900",
          className,
        )}
      >
        <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between gap-2 border-b border-white/10 bg-zinc-950/90 px-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400/90" />
            <span className="size-2.5 rounded-full bg-yellow-400/90" />
            <span className="size-2.5 rounded-full bg-green-400/90" />
          </div>
          {embedUrl ? (
            <button
              type="button"
              onClick={() => setUseSnapshot(false)}
              className="rounded-md border border-white/15 bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300 transition-colors hover:border-orange-400/50 hover:text-zinc-100"
            >
              Live embed
            </button>
          ) : null}
        </div>
        <div className="absolute inset-0 top-9 overflow-hidden">
          {isExternalImage ? (
            <img
              src={imageSrc}
              alt={`${title} live website preview`}
              className="h-full w-full select-none object-cover object-top transition-transform duration-700 ease-out group-hover:translate-y-[-10%]"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackPreviewSvg
              }}
            />
          ) : (
            <Image
              src={imageSrc}
              alt={`${title} live website preview`}
              fill
              className="select-none object-cover object-top transition-transform duration-700 ease-out group-hover:translate-y-[-10%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-2 border-b border-white/10 bg-zinc-950/90 px-4">
        <span className="size-2.5 rounded-full bg-red-400/90" />
        <span className="size-2.5 rounded-full bg-yellow-400/90" />
        <span className="size-2.5 rounded-full bg-green-400/90" />
      </div>
      <div className="absolute inset-0 top-9 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(120,113,108,0.3),transparent_50%),linear-gradient(180deg,rgba(24,24,27,1),rgba(9,9,11,1))]" />
      <div className="absolute inset-0 top-9 overflow-hidden">
        <div className="mx-4 mt-4 h-full rounded-md border border-white/10 bg-zinc-900/90 p-4 transition-transform duration-700 ease-out group-hover:translate-y-[-10%]">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-3 rounded-sm bg-white/5",
                  i % 5 === 0 && "col-span-2 bg-orange-300/15",
                  i % 7 === 0 && "col-span-3 bg-white/10",
                )}
              />
            ))}
          </div>
          <div className="mt-4 rounded-md border border-white/10 bg-black/30 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            Live Preview Loading...
          </div>
        </div>
      </div>
      <span className="absolute bottom-4 left-4 right-4 font-display text-lg tracking-tight text-white/80 md:text-xl">
        {featured ? "Featured: " : ""}
        {title}
      </span>
    </div>
  )
}

export function ProjectGrid() {
  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

  return (
    <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
      {orderedProjects.map((project) => (
        <Card
          key={project.id}
          className={cn(
            "group relative py-0 transition-all duration-300",
            "border border-white/10 bg-zinc-950/50 shadow-none backdrop-blur-sm",
            "hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:border-orange-400/80 hover:shadow-[0_0_20px_-5px_rgba(251,146,60,0.3)]",
          )}
        >
          <CardHeader className="gap-4 p-6 pb-0">
            <ProjectCover
              title={project.title}
              imageSrc={project.imageSrc}
              embedUrl={project.embedUrl}
              featured={project.featured}
            />
            <div className="flex flex-wrap items-center gap-2">
              {project.year ? (
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-400">
                  {project.year}
                </span>
              ) : null}
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-white/10 bg-black/20 text-zinc-300">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardTitle className="font-display text-xl font-normal tracking-tight text-zinc-100 md:text-2xl">
              {project.title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed text-zinc-400">
              {project.summary}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-4">
            {project.liveHref ? (
              <Button
                size="sm"
                className="rounded-full bg-orange-400 text-black hover:bg-orange-300"
                asChild
              >
                <Link href={project.liveHref} target="_blank" rel="noreferrer">
                  View Live
                  <ArrowUpRight className="ml-1 size-3.5 opacity-80" />
                </Link>
              </Button>
            ) : null}
            {project.repoHref ? (
              <Button size="sm" variant="outline" className="rounded-full border-white/20 bg-transparent text-zinc-200 hover:bg-white/5" asChild>
                <Link href={project.repoHref} target="_blank" rel="noreferrer">
                  Technical Deep Dive
                  <ArrowUpRight className="ml-1 size-3.5 opacity-70" />
                </Link>
              </Button>
            ) : null}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
