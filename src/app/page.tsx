import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import GoogleAISection from "@/components/GoogleAISection";
import DistributionSection from "@/components/DistributionSection";
import TurboSection from "@/components/TurboSection";
import SixMonthPlanSection from "@/components/SixMonthPlanSection";
import CalendarSection from "@/components/CalendarSection";
import MultilingualSection from "@/components/MultilingualSection";
import MeasureSection from "@/components/MeasureSection";
import CtaScene from "@/components/CtaScene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <GoogleAISection />
        <DistributionSection />
        <TurboSection />
        <SixMonthPlanSection />
        <CalendarSection />
        <MultilingualSection />
        <MeasureSection />
        <CtaScene />
        <Footer />
      </main>
    </>
  );
}
