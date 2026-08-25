"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();
  const footer = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] px-6 pb-10 pt-20 sm:pt-24">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/brand/copyup-logo.png"
              alt="CopyUp.ai"
              width={200}
              height={56}
              className="h-9 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm text-[var(--text-muted)]">{footer.tagline}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-faint)]">
            {footer.autopilot}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
            {footer.productHeading}
          </p>
          <nav className="mt-4 flex flex-col gap-3">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
            {footer.followHeading}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] transition hover:border-[var(--accent)]"
              >
                <Image src={social.icon} alt="" width={16} height={16} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-[var(--border)] pt-6">
        <p className="text-center text-xs text-[var(--text-faint)]">
          {footer.copyrightPrefix} {year} {footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
}
