import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
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
        <HowItWorks />
        <AppFeatures />
        <Trust />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
