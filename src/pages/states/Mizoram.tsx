
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const Mizoram = () => {
  const attractions = [
    {
      name: "Blue Mountain",
      description: "Phawngpui, the highest peak offering panoramic views and rare blue orchids.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Mountain"
    },
    {
      name: "Aizawl",
      description: "Capital city perched on ridges with stunning valley views.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      category: "Urban"
    },
    {
      name: "Champhai",
      description: "Border town known as 'Rice Bowl of Mizoram' with scenic landscapes.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Cultural"
    },
    {
      name: "Palak Lake",
      description: "Largest natural lake in Mizoram surrounded by lush green hills.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Natural"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in visiting Mizoram. Please share tour details.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="Mizoram blue mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Aizawl, Mizoram</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Mizoram</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Land of Blue Mountains - Where rolling hills meet the sky
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
            Explore <span className="text-primary">Mizoram</span>
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

export default Mizoram;
