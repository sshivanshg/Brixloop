"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { DesktopScaledSitePreview } from "@/components/portfolio/desktop-scaled-site-preview"

export const fallbackPreviewSvg =
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

/** Optional inner scale + grayscale→color when `group/card` hovers (portfolio tiles only). */
const cardAccentMedia =
  "origin-center scale-100 brightness-[0.9] contrast-[0.97] grayscale transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105 group-hover/card:brightness-110 group-hover/card:grayscale-0 group-hover/card:contrast-100"

function PreviewChrome({ trailing }: { trailing?: ReactNode }) {
  return (
    <div
      className="absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between gap-2 border-b border-white/10 bg-zinc-950/95 px-3 backdrop-blur-sm sm:px-4"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="presentation"
    >
      <div className="flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-red-400/90" />
        <span className="size-2.5 rounded-full bg-yellow-400/90" />
        <span className="size-2.5 rounded-full bg-green-400/90" />
      </div>
      {trailing}
    </div>
  )
}

export function ProjectCover({
  title,
  imageSrc,
  embedUrl,
  featured,
  className,
  cardMediaAccent = false,
}: {
  title: string
  imageSrc?: string
  embedUrl?: string
  featured?: boolean
  className?: string
  /** Portfolio grid: snapshot scales + grayscale→color on card hover. */
  cardMediaAccent?: boolean
}) {
  const [useSnapshot, setUseSnapshot] = useState(false)

  const showLiveEmbed = Boolean(embedUrl && !useSnapshot)
  const showImage = Boolean(imageSrc && (!embedUrl || useSnapshot))

  if (showLiveEmbed && embedUrl) {
    return (
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/80 shadow-inner shadow-black/20",
          className,
        )}
      >
        <PreviewChrome
          trailing={
            imageSrc ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setUseSnapshot(true)
                }}
                className="rounded-md border border-white/15 bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-200 transition-colors hover:border-brand-orange/50 hover:text-white"
              >
                Snapshot
              </button>
            ) : null
          }
        />
        <div className="absolute inset-0 top-9 overflow-hidden">
          <div
            className={cn(
              "h-full w-full overflow-hidden",
              cardMediaAccent && cardAccentMedia,
            )}
          >
              <div
                className={cn(
                  "h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/modal:-translate-y-[6%]",
                  cardMediaAccent
                    ? "group-hover/card:-translate-y-[5%]"
                    : "group-hover/card:-translate-y-[8%]",
                )}
              >
                <DesktopScaledSitePreview
                  embedUrl={embedUrl}
                  title={`${title} live preview`}
                  className="w-full min-w-0"
                />
              </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
      </div>
    )
  }

  if (showImage && imageSrc) {
    const isExternalImage = imageSrc.startsWith("http://") || imageSrc.startsWith("https://")

    return (
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/80 shadow-inner shadow-black/20",
          className,
        )}
      >
        <PreviewChrome
          trailing={
            embedUrl ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setUseSnapshot(false)
                }}
                className="rounded-md border border-white/15 bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-200 transition-colors hover:border-brand-orange/50 hover:text-white"
              >
                Live embed
              </button>
            ) : null
          }
        />
        <div className="absolute inset-0 top-9 overflow-hidden">
          <div
            className={cn(
              "h-full w-full overflow-hidden",
              cardMediaAccent && cardAccentMedia,
            )}
          >
            {isExternalImage ? (
              <img
                src={imageSrc}
                alt={`${title} live website preview`}
                className={cn(
                  "h-full w-full select-none object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/modal:translate-y-[-6%]",
                  cardMediaAccent
                    ? "group-hover/card:translate-y-[-5%]"
                    : "group-hover/card:translate-y-[-8%]",
                )}
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
              className={cn(
                  "select-none object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/modal:translate-y-[-6%]",
                  cardMediaAccent
                    ? "group-hover/card:translate-y-[-5%]"
                    : "group-hover/card:translate-y-[-8%]",
              )}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            )}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900",
        className,
      )}
      aria-hidden
    >
      <PreviewChrome />
      <div className="absolute inset-0 top-9 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(120,113,108,0.25),transparent_50%),linear-gradient(180deg,rgba(24,24,27,1),rgba(9,9,11,1))]" />
      <div className="absolute inset-0 top-9 overflow-hidden">
        <div className="mx-4 mt-4 h-full rounded-md border border-white/10 bg-zinc-900/90 p-4 transition-transform duration-700 ease-out group-hover/card:translate-y-[-8%]">
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
