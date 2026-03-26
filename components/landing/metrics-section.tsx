"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number | string; suffix?: string; prefix?: string }) {
  // Support string "end" for non-numeric metrics (e.g., "6 Weeks")
  const [count, setCount] = useState(typeof end === "number" ? 0 : end);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (typeof end === "number") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    } else {
      setCount(end);
    }
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-6xl lg:text-8xl font-display tracking-tight">
      {typeof end === "number" ? (
        <>
          {prefix}
          {Number(count).toLocaleString()}
          {suffix}
        </>
      ) : (
        end
      )}
    </div>
  );
}

const metrics = [
  {
    value: "100%",
    suffix: "",
    prefix: "",
    label: "Technical Integrity",
    message:
      "We build production-grade foundations that eliminate technical debt from day one.",
  },
  {
    value: "6 Weeks",
    suffix: "",
    prefix: "",
    label: "Avg. Launch Velocity",
    message: "Bridging the gap from initial concept to a high-performance market launch.",
  },
  {
    value: 30,
    suffix: "%",
    prefix: "~",
    label: "Avg. Conversion Lift",
    message: 'The "Loop" effect: how much your tech helps their growth.',
  },
  {
    value: 4,
    suffix: "+ 24/7",
    prefix: "",
    label: "Partner Alignment",
    message: "You work across your 4 global timezones to support growth.",
  },
];

export function MetricsSection() {
  const [time, setTime] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize with current time on client only
    setTime(new Date().toLocaleTimeString());

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="studio" ref={sectionRef} className="relative py-24 lg:py-32 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Strategic impact
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Metrics that
              <br />
              drive your business.
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
            <span className="text-foreground/30">|</span>
            <span>{time || "00:00:00"}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter
                end={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
              />
              <div className="mt-4 text-lg text-foreground">{metric.label}</div>
              <div className="mt-2 text-sm text-muted-foreground">{metric.message}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
