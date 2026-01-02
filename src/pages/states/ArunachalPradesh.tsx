
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Mountain, Users, TreePine, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const ArunachalPradesh = () => {
  const attractions = [
    {
      name: "Tawang Monastery",
      description: "Largest monastery in India, perched at 10,000 feet with stunning Himalayan views.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Spiritual"
    },
    {
      name: "Bomdila",
      description: "Scenic hill station offering panoramic views of snow-capped peaks and Buddhist culture.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      category: "Hill Station"
    },
    {
      name: "Namdapha National Park",
      description: "Biodiversity hotspot with tigers, leopards, and over 1,000 bird species.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      category: "Wildlife"
    },
    {
      name: "Ziro Valley",
      description: "UNESCO World Heritage site known for its unique Apatani culture and music festival.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      category: "Cultural"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in visiting Arunachal Pradesh. Please share tour details.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Arunachal Pradesh mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Itanagar, Arunachal Pradesh</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Arunachal Pradesh</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Land of Dawn-Lit Mountains - Where India's sun rises first
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
            Top <span className="text-primary">Attractions</span>
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

export default ArunachalPradesh;
