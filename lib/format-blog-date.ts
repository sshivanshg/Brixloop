/** Format `YYYY-MM-DD` for display in blog UI. */
export function formatBlogDate(isoDate: string): string {
  const d = new Date(isoDate + "T12:00:00")
  if (Number.isNaN(d.getTime())) return isoDate
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d)
}
