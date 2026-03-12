import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Features />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
