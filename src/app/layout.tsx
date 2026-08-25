import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Rubik } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-hebrew",
  subsets: ["latin", "hebrew"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CopyUp.ai | One Hour. Six Months of Organic Marketing.",
  description:
    "CopyUp is the organic marketing operating system. Set up your business once, and CopyUp builds your strategy, creates content in your brand voice, publishes it across your channels, measures what works and keeps improving.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--page-bg)] text-[var(--text)] font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
