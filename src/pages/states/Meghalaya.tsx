
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Meghalaya = () => {
  const attractions = [
    {
      name: "Living Root Bridges",
      description: "Unique bridges grown from rubber tree roots by the Khasi people over centuries.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      category: "Natural Wonder"
    },
    {
      name: "Cherrapunji",
      description: "One of the wettest places on Earth, famous for dramatic waterfalls and caves.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      category: "Climate"
    },
    {
      name: "Mawlynnong Village",
      description: "Asia's cleanest village, known for its community-driven cleanliness initiatives.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      category: "Cultural"
    },
    {
      name: "Dawki River",
      description: "Crystal clear river with water so transparent boats appear to float on air.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      category: "Natural"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=1920"
            alt="Meghalaya Living Root Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Shillong, Meghalaya</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Meghalaya</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Abode of Clouds - Where living bridges span rivers
          </p>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Natural <span className="text-primary">Marvels</span>
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
            <h3 className="text-2xl font-bold text-center mb-6">Plan Your Meghalaya Trip</h3>
            <WhatsAppInquiryForm destination="Meghalaya" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meghalaya;
