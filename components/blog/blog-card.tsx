import Image from "next/image"
import Link from "next/link"
import type { BlogPostPreview } from "@/lib/blog-mock-data"
import { formatBlogDate } from "@/lib/format-blog-date"

type BlogCardProps = {
  post: BlogPostPreview
}

export function BlogCard({ post }: BlogCardProps) {
  const href = `/blogs/${post.slug}`

  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/30 shadow-sm backdrop-blur-sm transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-[0_0_0_1px_rgba(232,80,2,0.12)]">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={post.thumbnailSrc}
          alt={post.thumbnailAlt}
          fill
          className="object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.03] group-hover/card:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <time
          dateTime={post.publishedAt}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          {formatBlogDate(post.publishedAt)}
        </time>

        <h2 className="mt-3 font-display text-xl leading-snug tracking-tight text-foreground md:text-[1.35rem]">
          <Link
            href={href}
            className="underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
          {post.excerpt}
        </p>

        <div className="mt-5 border-t border-border/80 pt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary/90"
          >
            Read more
            <span aria-hidden className="transition-transform group-hover/card:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
