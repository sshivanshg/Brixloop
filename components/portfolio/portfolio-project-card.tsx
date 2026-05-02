"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type Project, projectPagePath } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { ProjectCover } from "@/components/portfolio/project-cover"
import { TagPill } from "@/components/portfolio/tag-pill"

const easePremium = [0.22, 1, 0.36, 1] as const

const staggerParent = {
  rest: {},
  hover: {
    transition: { staggerChildren: 0.055, delayChildren: 0.02 },
  },
}

const staggerItem = {
  rest: { opacity: 1, y: 0 },
  hover: {
    opacity: 1,
    y: -4,
    transition: { duration: 0.32, ease: easePremium },
  },
}

export function PortfolioProjectCard({ project }: { project: Project }) {
  const detailHref = projectPagePath(project)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 460, damping: 32 }}
      className="h-full"
    >
      <Card
        className={cn(
          "group/card relative flex h-full min-h-0 flex-col gap-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/[0.32] py-0 shadow-none backdrop-blur-md",
          "transition-[border-color,box-shadow] duration-500 ease-out",
          "hover:border-brand-orange/30 hover:shadow-[0_28px_90px_-40px_rgba(232,80,2,0.22)]",
        )}
      >
        {/* Brand inner-glow border-beam */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-[1px] z-[3] rounded-[15px] opacity-0 transition-opacity duration-500",
            "ring-1 ring-inset ring-brand-orange/25 shadow-[inset_0_0_56px_-16px_rgba(232,80,2,0.18)]",
            "group-hover/card:opacity-100",
          )}
        />

        <motion.div
          className="flex min-h-0 flex-1 flex-col"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={staggerParent}
        >
          <div className="p-2 md:p-3 pb-0 relative z-[20] pointer-events-none [&_button]:pointer-events-auto">
            <ProjectCover
              title={project.title}
              imageSrc={project.imageSrc}
              embedUrl={project.embedUrl}
              featured={project.featured}
              cardMediaAccent
            />
          </div>

          <CardHeader className="pointer-events-none flex flex-col gap-y-3 p-5 pt-4 select-none">
            <motion.div variants={staggerItem} className="pointer-events-auto flex min-w-0 flex-col gap-2">
              {project.year ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[11px]">
                  {project.year}
                </span>
              ) : null}
              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                {project.tags.map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="pointer-events-auto">
              <CardTitle className="font-display text-xl font-semibold leading-snug tracking-tight text-zinc-50 md:text-[1.35rem]">
                <Link
                  href={detailHref}
                  className="outline-none before:absolute before:inset-0 before:z-[10] focus-visible:ring-2 focus-visible:ring-brand-orange/45 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-2xl"
                  aria-label={`View project: ${project.title}`}
                >
                  {project.title}
                </Link>
              </CardTitle>
            </motion.div>

            <motion.div variants={staggerItem}>
              <CardDescription className="line-clamp-3 text-[14px] leading-snug text-zinc-400 md:line-clamp-4 md:leading-relaxed">
                {project.summary}
              </CardDescription>
            </motion.div>
          </CardHeader>
        </motion.div>

        <CardFooter className="relative z-[20] mt-auto flex flex-wrap items-center gap-2 border-t border-white/[0.08] bg-zinc-950/20 px-5 py-[0.875rem]">
          {project.liveHref ? (
            <Button
              size="sm"
              className={cn(
                "relative isolate overflow-hidden rounded-full border border-brand-orange bg-brand-orange px-5 font-semibold text-white",
                "shadow-[0_0_28px_-12px_rgba(232,80,2,0.55)] hover:bg-brand-orange hover:brightness-105",
              )}
              asChild
            >
              <Link href={project.liveHref} target="_blank" rel="noreferrer">
                <span className="relative z-[1]">View Live</span>
                <ArrowUpRight className="relative z-[1] ml-1 size-3.5" />
              </Link>
            </Button>
          ) : null}
          {project.repoHref ? (
            <Button
              size="sm"
              variant="outline"
              className="rounded-xl border-white/[0.12] bg-transparent text-zinc-200 hover:bg-white/[0.05]"
              asChild
            >
              <Link href={project.repoHref} target="_blank" rel="noreferrer">
                Technical Deep Dive
                <ArrowUpRight className="ml-1 size-3.5 opacity-70" />
              </Link>
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
