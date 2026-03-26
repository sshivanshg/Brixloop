"use client";

import { useEffect, useState, useRef } from "react";

const deliveryHubs = [
  {
    name: "United States",
    description: "Strategic Engineering",
    status: "Shipped",
  },
  {
    name: "Dubai, UAE",
    description: "Enterprise Innovation",
    status: "Deployed",
  },
  {
    name: "New Zealand",
    description: "Performance Foundations",
    status: "Shipped",
  },
  {
    name: "India",
    description: "Scale & Optimization",
    status: "Deployed",
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHub, setActiveHub] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHub((prev: number) => (prev + 1) % deliveryHubs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Global Reach
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Global Trust.
              <br />
              Proven Scale.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We don’t just build for local markets; we engineer for the world. With successful deployments across the US, UAE, NZ, and India, BrixLoop turns ambitious ideas into market-dominant products. Your growth has no borders—and neither does our expertise.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Delivery Success</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Partner Alignment</div>
              </div>
            </div>
          </div>

          {/* Right: Global Delivery Hubs List */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Global Delivery Hubs</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active Partnerships
                </span>
              </div>

              {/* Delivery Hubs List */}
              <div>
                {deliveryHubs.map((hub, index) => (
                  <div
                    key={hub.name}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex flex-col transition-all duration-300 ${
                      activeHub === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeHub === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{hub.name}</div>
                        <div className="text-sm text-muted-foreground">{hub.description}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{hub.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
