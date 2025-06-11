
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
