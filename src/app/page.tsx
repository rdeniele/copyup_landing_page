import Hero from "@/components/Hero";
import ProofScene from "@/components/ProofScene";
import BeliefScene from "@/components/BeliefScene";
import HowItHappensScene from "@/components/HowItHappensScene";
import CtaScene from "@/components/CtaScene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProofScene />
      <BeliefScene />
      <HowItHappensScene />
      <CtaScene />
      <Footer />
    </main>
  );
}
