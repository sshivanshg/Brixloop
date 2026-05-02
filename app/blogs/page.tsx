import type { Metadata } from "next"
import { BlogPage } from "@/components/blog/blog-page"

export const metadata: Metadata = {
  title: "Blogs — Brixloop",
  description: "Articles and updates from Brixloop.",
}

export default function BlogsRoutePage() {
  return <BlogPage />
}
