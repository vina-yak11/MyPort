"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("is-loading");

    let value = 0;
    const tick = window.setInterval(() => {
      if (value < 92) {
        value += value < 60 ? 2 : 1;
        setProgress(value);
      }
    }, 28);

    const finish = window.setTimeout(() => {
      window.clearInterval(tick);
      const complete = window.setInterval(() => {
        if (value < 100) {
          value += 1;
          setProgress(value);
        } else {
          window.clearInterval(complete);
          setDone(true);
          document.body.classList.remove("is-loading");
        }
      }, 14);
    }, 1800);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(finish);
      document.body.classList.remove("is-loading");
    };
  }, []);

  return (
    <div className={`page-loader ${done ? "page-loader-done" : ""}`} aria-hidden={done}>
      <div className="page-loader-inner">
        <div className="loader-dots" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="loader-dot" style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
        <p className="loader-brand">{siteConfig.initials}</p>
        <p className="loader-title">{siteConfig.name}</p>
        <div className="loader-track">
          <div className="loader-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-percent">{progress}%</p>
        <div className="loader-ball" aria-hidden="true" />
      </div>
    </div>
  );
}
