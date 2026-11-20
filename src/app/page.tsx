import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SystemOverview from "@/components/SystemOverview";
import SmartBidet from "@/components/SmartBidet";
import AppFeatures from "@/components/AppFeatures";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <SystemOverview />
        <SmartBidet />
        <AppFeatures />
        <HowItWorks />
        <Trust />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
