import { NextResponse } from "next/server"
import { Resend } from "resend"

type InquiryPayload = {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  title?: string
  projectType?: string
  budgetRange?: string
  timeline?: string
  brief?: string
  referral?: string
  consent?: boolean
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.INQUIRY_TO_EMAIL
  const fromEmail = process.env.INQUIRY_FROM_EMAIL || "BrixLoop <onboarding@resend.dev>"

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Missing required environment variables." },
      { status: 500 },
    )
  }

  const body = (await request.json()) as InquiryPayload

  if (!body.firstName || !body.lastName || !body.email || !body.brief || !body.consent) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const resend = new Resend(resendApiKey)

  const subject = "Thanks for contacting BrixLoop"
  const html = `
    <h2>Thanks for contacting BrixLoop, ${body.firstName}.</h2>
    <p>We received your inquiry and our team will review it carefully.</p>
    <p>We will get back to you within 48 hours.</p>
    <hr />
    <h3>Your submitted details</h3>
    <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Company:</strong> ${body.company || "-"}</p>
    <p><strong>Role:</strong> ${body.title || "-"}</p>
    <p><strong>Primary focus:</strong> ${body.projectType || "-"}</p>
    <p><strong>Budget range:</strong> ${body.budgetRange || "-"}</p>
    <p><strong>Timeline:</strong> ${body.timeline || "-"}</p>
    <p><strong>Referral:</strong> ${body.referral || "-"}</p>
    <p><strong>Consent:</strong> ${body.consent ? "Yes" : "No"}</p>
    <hr />
    <p><strong>Technical brief:</strong></p>
    <p>${body.brief.replace(/\n/g, "<br />")}</p>
    <hr />
    <p>— Team BrixLoop</p>
  `

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [body.email],
      ...(toEmail ? { bcc: [toEmail] } : {}),
      subject,
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send inquiry email." }, { status: 500 })
  }
}

