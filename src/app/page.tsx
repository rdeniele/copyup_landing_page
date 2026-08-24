import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofScene from "@/components/ProofScene";
import BeliefScene from "@/components/BeliefScene";
import HowItHappensScene from "@/components/HowItHappensScene";
import EnginesScene from "@/components/EnginesScene";
import CtaScene from "@/components/CtaScene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProofScene />
        <BeliefScene />
        <HowItHappensScene />
        <EnginesScene />
        <CtaScene />
        <Footer />
      </main>
    </>
  );
}
