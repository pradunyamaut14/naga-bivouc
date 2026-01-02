
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const Manipur = () => {
  const attractions = [
    {
      name: "Loktak Lake",
      description: "Largest freshwater lake in Northeast India, famous for floating phumdis.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Natural"
    },
    {
      name: "Imphal",
      description: "Historic capital city with war memorials and Manipuri dance performances.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Cultural"
    },
    {
      name: "Kangla Fort",
      description: "Ancient seat of Manipur's rulers, now an archaeological site.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      category: "Historical"
    },
    {
      name: "Andro Village",
      description: "Traditional village known for pottery and cultural preservation.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Heritage"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in visiting Manipur. Please share tour details.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Manipur Loktak Lake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Imphal, Manipur</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Manipur</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jewel of India - Land of classical dance and floating lakes
          </p>
          
          <Button size="lg" onClick={handleWhatsAppClick}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Plan Your Visit
          </Button>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover <span className="text-primary">Manipur</span>
          </h2>

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
                  <p className="text-sm text-muted-foreground">{attraction.description}</p>
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

export default Manipur;
