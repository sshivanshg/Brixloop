"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function InquiryForm() {
  const [projectType, setProjectType] = useState("")
  const [budgetRange, setBudgetRange] = useState("")
  const [timeline, setTimeline] = useState("")
  const [consent, setConsent] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur-sm">
      <div className="grid lg:grid-cols-[1fr_min(100%,320px)]">
        <div className="border-b border-border px-6 py-8 md:px-10 md:py-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Engagement</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Scope your next build
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Point us at <strong className="font-medium text-foreground">the Brix</strong> (infrastructure you
            need), <strong className="font-medium text-foreground">autonomous intelligence</strong> (AI in your
            stack), or <strong className="font-medium text-foreground">the Loop</strong> (growth and acquisition
            mechanics). Add constraints and success criteria—we&apos;ll reply with a technical read and next
            steps.
          </p>

          <h3 className="mt-10 font-display text-xl text-foreground md:text-2xl">Technical brief</h3>

          <form
            className="mt-6 space-y-5"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="inq-firstName">First name</Label>
                <Input id="inq-firstName" name="firstName" autoComplete="given-name" placeholder="Alex" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inq-lastName">Last name</Label>
                <Input id="inq-lastName" name="lastName" autoComplete="family-name" placeholder="Rivera" required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="inq-email">Work email</Label>
                <Input
                  id="inq-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inq-company">Company</Label>
                <Input id="inq-company" name="company" autoComplete="organization" placeholder="Company or studio" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inq-title">Role</Label>
                <Input id="inq-title" name="title" autoComplete="organization-title" placeholder="e.g. CTO, Head of Product" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="inq-projectType">Primary focus</Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger id="inq-projectType" name="projectType">
                    <SelectValue placeholder="Where should we lean first?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modular-infrastructure">
                      Modular infrastructure (The Brix)
                    </SelectItem>
                    <SelectItem value="autonomous-intelligence">Autonomous intelligence</SelectItem>
                    <SelectItem value="growth-engineering">Growth engineering (The Loop)</SelectItem>
                    <SelectItem value="multiple">Multiple lanes / not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="inq-budget">Budget range</Label>
                <Select value={budgetRange} onValueChange={setBudgetRange}>
                  <SelectTrigger id="inq-budget" name="budgetRange">
                    <SelectValue placeholder="Optional" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under $25k</SelectItem>
                    <SelectItem value="25-75k">$25k – $75k</SelectItem>
                    <SelectItem value="75-150k">$75k – $150k</SelectItem>
                    <SelectItem value="150k-plus">$150k+</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="inq-timeline">Target timeline</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger id="inq-timeline" name="timeline">
                    <SelectValue placeholder="When do you need to ship?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP / already started</SelectItem>
                    <SelectItem value="1-3mo">1 – 3 months</SelectItem>
                    <SelectItem value="3-6mo">3 – 6 months</SelectItem>
                    <SelectItem value="exploring">Exploring / no fixed date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="inq-brief">Technical brief</Label>
              <Textarea
                id="inq-brief"
                name="brief"
                className="min-h-32 resize-y"
                placeholder="Current stack, integrations, traffic or scale targets, compliance needs, links to repos or docs, and your definition of done."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inq-referral">How did you hear about us?</Label>
              <Input
                id="inq-referral"
                name="referral"
                placeholder="Referral, search, partner intro, etc. (optional)"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <Checkbox
                id="inq-consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(Boolean(checked))}
              />
              <Label htmlFor="inq-consent" className="text-sm font-normal leading-snug text-muted-foreground">
                I agree to be contacted about this inquiry and understand my information will be used only to
                scope and follow up on the project.
              </Label>
            </div>

            <Button type="submit" size="lg" className="mt-2 rounded-full px-8">
              Send technical inquiry
            </Button>
          </form>
        </div>

        <aside className="space-y-8 bg-muted/30 px-6 py-8 md:px-8 md:py-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">What happens next</p>
            <ol className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-mono text-xs text-primary">01</span>
                <span>We review your brief and confirm fit—usually within one to two business days.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-primary">02</span>
                <span>Short intro call to align on scope, stakeholders, and constraints.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-primary">03</span>
                <span>You receive a tailored proposal: approach, timeline, and investment.</span>
              </li>
            </ol>
          </div>
          <p className="border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            Prefer email? Reach the team at{" "}
            <a href="mailto:hello@brixloop.com" className="text-foreground underline-offset-4 hover:underline">
              hello@brixloop.com
            </a>
            .
          </p>
        </aside>
      </div>
    </div>
  )
}
