"use client";

import { services } from "@/data/portfolio";

export function MarqueeServices() {
  const items = [...services, ...services];

  return (
    <div className="marquee-shell mt-10">
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />
      <div className="marquee-track">
        {items.map((service, index) => (
          <article key={`${service.title}-${index}`} className="marquee-card">
            <h4 className="text-base font-semibold">{service.title}</h4>
            <p className="mt-2 max-w-xs text-sm text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
