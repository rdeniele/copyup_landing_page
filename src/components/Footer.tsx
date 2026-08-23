import Image from "next/image";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="reel-scene flex flex-col items-center justify-center gap-6 bg-[var(--surface)] px-6 py-20 text-center sm:py-28">
      <Image
        src="/brand/copyup-logo.png"
        alt="CopyUp.ai"
        width={220}
        height={62}
        className="h-10 w-auto sm:h-12"
      />
      <p className="max-w-sm font-display text-2xl font-semibold leading-snug text-[var(--text)] sm:text-3xl">
        {footer.tagline}
      </p>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-faint)]">On autopilot.</p>
    </footer>
  );
}
