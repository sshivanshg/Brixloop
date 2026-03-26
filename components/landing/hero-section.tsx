"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { SITE_HERO_HEADLINE, SITE_HERO_SUBLINE } from "@/lib/site";

const heroMetrics = [
  { value: "100+", label: "clients served" },
  { value: "100%", label: "delivery success" },
  { value: "24/7", label: "partner alignment" },
  { value: "6 Weeks", label: "avg. launch velocity" },
  { value: "~30%", label: "avg. conversion lift" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Animated sphere background */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-40 lg:h-[800px] lg:w-[800px]">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/* Main hero: fills space above stats; centered vertically so stats never overlap */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 py-16 pt-28 pb-8 lg:px-12 lg:pt-32 lg:pb-12">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Welcome to Brixloop
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(2.25rem,8vw,6.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 md:text-[clamp(2.5rem,7.5vw,7rem)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {SITE_HERO_HEADLINE}
          </h1>
        </div>

        {/* Description */}
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-24">
          <p
            className={`max-w-xl text-xl leading-relaxed text-muted-foreground transition-all delay-200 duration-700 lg:text-2xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {SITE_HERO_SUBLINE}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col items-start gap-4 transition-all delay-300 duration-700 sm:flex-row ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="h-14 rounded-full bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90 group"
              asChild
            >
              <Link href="/services#inquiry-form">
                Start Your Build
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-brand-light-gray/30 px-8 text-base hover:border-brand-orange/40 hover:bg-brand-orange/10"
              asChild
            >
              <Link href="/#features">View Technical Capabilities</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats marquee — always below hero content (no absolute overlap on desktop) */}
      <div
        className={`relative z-10 shrink-0 w-full border-t border-foreground/5 py-8 pb-16 transition-all delay-500 duration-700 lg:py-10 lg:pb-20 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="marquee flex gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {heroMetrics.map((stat) => (
                <div key={`${stat.value}-${i}`} className="flex items-baseline gap-4">
                  <span className="text-4xl font-display lg:text-5xl">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
