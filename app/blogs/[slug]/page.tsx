import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"
import { getBlogPostBySlug, MOCK_BLOG_POSTS } from "@/lib/blog-mock-data"
import { formatBlogDate } from "@/lib/format-blog-date"
import { ArrowLeft } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return MOCK_BLOG_POSTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: "Post — Brixloop" }
  return {
    title: `${post.title} — Brixloop`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <article className="relative mx-auto max-w-[900px] px-6 pb-20 pt-28 md:pt-32 lg:px-12">
        <Link
          href="/blogs"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All posts
        </Link>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          Article
        </p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
          {post.title}
        </h1>
        <time
          dateTime={post.publishedAt}
          className="mt-4 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          {formatBlogDate(post.publishedAt)}
        </time>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
          <Image
            src={post.thumbnailSrc}
            alt={post.thumbnailAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>

        <p className="mt-10 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Replace this body with full article content from your CMS or MDX. Markdown, portable text,
          or HTML snippets all drop in here while reusing the same hero and metadata helpers.
        </p>
      </article>

      <FooterSection />
    </main>
  )
}
