import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactAreas from "@/components/ImpactAreas";
import InvestmentModel from "@/components/InvestmentModel";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ImpactAreas />
        <InvestmentModel />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
