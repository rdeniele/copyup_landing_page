"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import LanguageSelector from "./LanguageSelector";

export default function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-white/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? "/brand/copyup-logo.png" : "/brand/copyup-logo-white.png"}
            alt="CopyUp.ai"
            width={150}
            height={42}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--text-muted)] hover:text-[var(--text)]"
                  : "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.35)] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSelector dark={!scrolled} />
          <a
            href={`${siteUrl}/signup`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[var(--radius-pill)] bg-[var(--deep-navy)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-lift)] transition hover:brightness-110"
          >
            {t.hero.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}
