import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Partners | CopyUp.ai",
  description:
    "Build your own business on top of the CopyUp platform. Join the CopyUp Partner Program.",
};

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PartnersContent />
      </main>
      <Footer />
    </>
  );
}
