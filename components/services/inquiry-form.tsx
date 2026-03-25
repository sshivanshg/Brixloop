"use client"

import { useState } from "react"
import { Facebook, Linkedin, Twitter } from "lucide-react"
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

const inputClassName =
  "h-11 rounded-none border border-[#3b3b3b] bg-transparent text-sm text-[#f5f5f5] placeholder:text-[#8f8f8f] focus-visible:ring-0 focus-visible:border-[#e85002]"

const selectClassName =
  "h-11 w-full rounded-none border border-[#3b3b3b] bg-transparent text-sm text-[#f5f5f5] data-[placeholder]:text-[#8f8f8f] focus:ring-0 focus:border-[#e85002]"

type Person = {
  name: string
  role: string
  initials: string
}

const guests: Person[] = [
  { name: "Lisa Alvin", role: "Cofounder, Jea", initials: "LA" },
  { name: "Jenny Pick", role: "Head of Education, Jea", initials: "JP" },
  { name: "Peter Scott", role: "Founder, Jea", initials: "PS" },
]

const hosts: Person[] = [{ name: "Josh Jacob", role: "Educator, Web", initials: "JJ" }]

function PersonRow({ person }: { person: Person }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#e85002]/40 bg-[#1d1d1d] text-[10px] font-semibold tracking-wide text-[#f2c7ad]">
        {person.initials}
      </div>
      <div>
        <p className="text-[18px] font-medium leading-tight text-[#f5f5f5]">{person.name}</p>
        <p className="text-[12px] text-[#9a9a9a]">{person.role}</p>
      </div>
    </div>
  )
}

export function InquiryForm() {
  const [companySize, setCompanySize] = useState("")
  const [consent, setConsent] = useState(false)

  return (
    <div className="overflow-hidden border border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="grid lg:grid-cols-[1fr_300px]">
        <div className="border-r border-[#2a2a2a] px-6 py-8 md:px-12 md:py-12">
          <p className="font-mono text-xs text-[#8f8f8f]">March 17, 2021 12:00</p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-[#f5f5f5] md:text-6xl">
            The help of Augmented Reality and Holograms.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#b0b0b0]">
            Use Augmented Reality to keep students engaged and provide detailed explanations of models
            and course material. In a 3D, AR Lab, students can pinch, zoom, and rotate equipment
            related to the course, for a fully immersive learning experience.
          </p>

          <h3 className="mt-14 font-display text-4xl text-[#f5f5f5]">Join the event</h3>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs font-normal text-[#9a9a9a]">
                  First name
                </Label>
                <Input id="firstName" name="firstName" placeholder="Enter your first name" className={inputClassName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs font-normal text-[#9a9a9a]">
                  Last name
                </Label>
                <Input id="lastName" name="lastName" placeholder="Enter your last name" className={inputClassName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessEmail" className="text-xs font-normal text-[#9a9a9a]">
                  Business email
                </Label>
                <Input
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className={inputClassName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title" className="text-xs font-normal text-[#9a9a9a]">
                  Title
                </Label>
                <Input id="title" name="title" placeholder="What is your job title?" className={inputClassName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-xs font-normal text-[#9a9a9a]">
                  Company name
                </Label>
                <Input id="companyName" name="companyName" placeholder="Where do you work?" className={inputClassName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companySize" className="text-xs font-normal text-[#9a9a9a]">
                  Company size
                </Label>
                <Select value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger id="companySize" className={selectClassName}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1 - 10</SelectItem>
                    <SelectItem value="11-50">11 - 50</SelectItem>
                    <SelectItem value="51-200">51 - 200</SelectItem>
                    <SelectItem value="201-500">201 - 500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="learningGoal" className="text-xs font-normal text-[#9a9a9a]">
                What are you hoping to learn about?
              </Label>
              <Textarea
                id="learningGoal"
                name="learningGoal"
                placeholder="Where do you work?"
                className="min-h-20 rounded-none border border-[#3b3b3b] bg-transparent text-sm text-[#f5f5f5] placeholder:text-[#8f8f8f] focus-visible:ring-0 focus-visible:border-[#e85002]"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(Boolean(checked))}
                className="size-4 rounded-none border-[#686868] bg-transparent data-[state=checked]:bg-[#e85002] data-[state=checked]:text-white"
              />
              <Label htmlFor="consent" className="text-sm font-normal text-[#bcbcbc]">
                I would like to receive emails about future webinars
              </Label>
            </div>

            <Button
              type="submit"
              className="mt-5 h-14 rounded-none border border-[#e85002] bg-[#e85002] px-8 text-base font-semibold text-white hover:bg-[#cf4700]"
            >
              Register for this event
            </Button>
          </form>
        </div>

        <aside className="space-y-10 bg-[#111111] px-6 py-10 md:px-7">
          <div>
            <p className="text-sm text-[#bbbbbb]">Share</p>
            <div className="mt-3 flex items-center gap-3">
              <button type="button" className="text-[#8f8f8f] hover:text-[#e85002]" aria-label="Share on Facebook">
                <Facebook className="size-3.5" />
              </button>
              <button type="button" className="text-[#8f8f8f] hover:text-[#e85002]" aria-label="Share on Twitter">
                <Twitter className="size-3.5" />
              </button>
              <button type="button" className="text-[#8f8f8f] hover:text-[#e85002]" aria-label="Share on LinkedIn">
                <Linkedin className="size-3.5" />
              </button>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.38em] text-[#a7a7a7]">GUESTS</p>
            <div className="mt-4 space-y-4">
              {guests.map((guest) => (
                <PersonRow key={guest.name} person={guest} />
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.38em] text-[#a7a7a7]">HOSTED BY</p>
            <div className="mt-4 space-y-4">
              {hosts.map((host) => (
                <PersonRow key={host.name} person={host} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
