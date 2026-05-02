"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/** Width the embedded page uses for layout (media queries) — scales down visually to fit the card/modal. */
const DESKTOP_LAYOUT_W = 1600
const DESKTOP_LAYOUT_H = 900

export function DesktopScaledSitePreview({
  embedUrl,
  title,
  className,
  withBottomGradient = false,
}: {
  embedUrl: string
  title: string
  className?: string
  withBottomGradient?: boolean
}) {
  const shellRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const shell = shellRef.current
    if (!shell) return
    const measure = () => {
      const w = shell.clientWidth
      if (w <= 0) return
      setScale(w / DESKTOP_LAYOUT_W)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(shell)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={shellRef}
      className={cn("relative aspect-video w-full overflow-hidden bg-zinc-950", className)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none absolute left-0 top-0 border-0"
          style={{
            width: DESKTOP_LAYOUT_W,
            height: DESKTOP_LAYOUT_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        />
      </div>
      {withBottomGradient ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      ) : null}
    </div>
  )
}
