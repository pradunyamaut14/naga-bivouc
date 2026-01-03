
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Sikkim = () => {
  const attractions = [
    {
      name: "Kanchenjunga",
      description: "Third highest mountain in the world, visible from various viewpoints.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      category: "Mountain"
    },
    {
      name: "Gangtok",
      description: "Capital city with monasteries, cable cars, and Himalayan views.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      category: "Urban"
    },
    {
      name: "Yumthang Valley",
      description: "Valley of flowers with hot springs and rhododendron blooms.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      category: "Natural"
    },
    {
      name: "Rumtek Monastery",
      description: "One of the most significant monasteries with ancient Buddhist architecture.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      category: "Spiritual"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920"
            alt="Sikkim Himalayas with Kanchenjunga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Gangtok, Sikkim</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Sikkim</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hidden Paradise - Where mighty Kanchenjunga guards ancient monasteries
          </p>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover <span className="text-primary">Sikkim</span>
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

      {/* Inquiry Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Plan Your Sikkim Trip</h3>
            <WhatsAppInquiryForm destination="Sikkim" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sikkim;
