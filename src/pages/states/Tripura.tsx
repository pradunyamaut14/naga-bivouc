
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Camera, Users, TreePine } from "lucide-react";

const Tripura = () => {
  const attractions = [
    {
      name: "Ujjayanta Palace",
      description: "Former royal palace now serving as a museum showcasing Tripura's rich history.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      category: "Historical"
    },
    {
      name: "Neermahal",
      description: "Water palace in the middle of Rudrasagar Lake, a unique architectural marvel.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Palace"
    },
    {
      name: "Sepahijala Wildlife Sanctuary",
      description: "Home to spectacled langurs and diverse bird species in natural habitat.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      category: "Wildlife"
    },
    {
      name: "Unakoti",
      description: "Archaeological site with ancient rock carvings and sculptures dating to 8th-9th century.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Archaeological"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
            alt="Tripura palace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Agartala, Tripura</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Tripura</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Land of Diversity - Where royal palaces meet ancient sculptures and wildlife sanctuaries
          </p>
          
          <Button size="lg">Plan Your Visit</Button>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Heritage of <span className="text-primary">Tripura</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tripura;
