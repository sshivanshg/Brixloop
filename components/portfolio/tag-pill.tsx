import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function TagPill({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-transparent px-2.5 py-1 text-[11px] font-medium leading-none tracking-normal text-zinc-400",
        "transition-all duration-300 ease-out",
        "hover:border-brand-orange hover:bg-brand-orange hover:text-black hover:shadow-[0_0_20px_-8px_rgba(232,80,2,0.45)]",
        className,
      )}
    >
      {children}
    </span>
  )
}
