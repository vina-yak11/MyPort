"use client";

import { ChevronDown } from "lucide-react";

export function ScrollDownArrow({ target = "#about" }: { target?: string }) {
  return (
    <a href={target} className="scroll-down-arrow" aria-label="Scroll to about section">
      <span className="scroll-down-ring">
        <ChevronDown className="h-5 w-5" />
      </span>
    </a>
  );
}
