import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | CopyUp.ai",
  description: "Get in touch with the CopyUp team.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
