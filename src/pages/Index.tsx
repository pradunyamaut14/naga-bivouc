import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatesOverview from "@/components/StatesOverview";
import SEOHead, { localBusinessJsonLd } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Naga Bivouac – Nagaland & Northeast India Tours, Trekking & Travel"
        description="Naga Bivouac is a local Nagaland travel company offering curated tours, trekking, Hornbill Festival trips, butterfly watching & adventure packages across all 8 states of Northeast India."
        keywords="Nagaland tours, Northeast India travel, Nagaland travel agency, Kohima tours, Dzukou Valley trek, Hornbill Festival, Khonoma village, trekking Nagaland, Meghalaya tours, butterfly watching Northeast India"
        canonicalPath="/"
        jsonLd={localBusinessJsonLd}
      />
      <Navigation />
      <main>
        <Hero />
        <StatesOverview />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
