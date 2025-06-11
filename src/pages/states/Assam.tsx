
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Assam = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Assam</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Gateway to Northeast - Coming Soon
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assam;
