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

function ProjectCover({
  title,
  imageSrc,
  className,
}: {
  title: string
  imageSrc?: string
  className?: string
}) {
  if (imageSrc) {
    return (
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border/60 bg-muted [&>img]:select-none",
          className,
        )}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-end overflow-hidden rounded-lg border border-primary/20 bg-brand-gradient p-6",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-background/55" />
      <span className="relative font-display text-2xl tracking-tight text-foreground/90 md:text-3xl">
        {title}
      </span>
    </div>
  )
}

export function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="group border-border/60 bg-card/80 py-0 shadow-none backdrop-blur-sm transition-colors hover:border-primary/35"
        >
          <CardHeader className="gap-4 p-6 pb-0">
            <ProjectCover title={project.title} imageSrc={project.imageSrc} />
            <div className="flex flex-wrap items-center gap-2">
              {project.year ? (
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              ) : null}
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardTitle className="font-display text-xl font-normal tracking-tight md:text-2xl">
              {project.title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {project.summary}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-3 border-t border-border/50 px-6 py-4">
            {project.liveHref ? (
              <Button
                size="sm"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href={project.liveHref} target="_blank" rel="noreferrer">
                  View live
                  <ArrowUpRight className="ml-1 size-3.5 opacity-80" />
                </Link>
              </Button>
            ) : null}
            {project.repoHref ? (
              <Button size="sm" variant="outline" className="rounded-full" asChild>
                <Link href={project.repoHref} target="_blank" rel="noreferrer">
                  Source
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
