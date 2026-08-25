import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingContent from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing | CopyUp.ai",
  description:
    "Choose your CopyUp plan: Digital Presence, Business Momentum, or Agencies. 8 languages, 12 platforms, 7 days free.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
