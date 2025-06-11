
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatesOverview from "@/components/StatesOverview";

const States = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Northeast India <span className="text-primary">States</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Discover the incredible diversity of Northeast India through its eight unique states, 
              each offering distinct cultures, landscapes, and adventures.
            </p>
          </div>
        </section>
        <StatesOverview />
      </div>
      <Footer />
    </div>
  );
};

export default States;
