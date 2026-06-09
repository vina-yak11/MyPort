import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {year} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
        <Link href="#home" className="hover:text-accent transition-colors">
          Return to Home
        </Link>
      </div>
    </footer>
  );
}
