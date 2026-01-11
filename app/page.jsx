import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import ScrollCircle from "@/components/ScrollCircle";
import Journey from "@/components/Journey";
import Labs from "@/components/Labs"
import Certificate from "@/components/Certifications"
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Page() {
  return (
    <>
      <RevealObserver />
      <ScrollCircle />
      <Background />
      <Navbar />
      <MobileBottomNav />
      <Hero />
      <Focus />
      <Journey />
      <Projects />
      <Skills />
      <Labs />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}
