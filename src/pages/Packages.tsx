
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PackageBookingModal from "@/components/PackageBookingModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, MapPin, Star } from "lucide-react";
import { useState } from "react";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const packages = [
    {
      id: 1,
      name: "Northeast Grand Circuit",
      duration: "14 Days",
      groupSize: "2-8 People",
      price: "₹45,000",
      originalPrice: "₹55,000",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      description: "Complete Northeast India experience covering all 8 states with cultural immersion and natural wonders.",
      highlights: ["All 8 states", "Hornbill Festival", "Tea gardens", "Living root bridges", "Kanchenjunga views"],
      category: "Complete Tour"
    },
    {
      id: 2,
      name: "Meghalaya Explorer",
      duration: "7 Days",
      groupSize: "2-6 People", 
      price: "₹22,000",
      originalPrice: "₹28,000",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      description: "Discover the wettest place on earth, living root bridges, and Asia's cleanest village.",
      highlights: ["Cherrapunji", "Living root bridges", "Mawlynnong village", "Dawki river", "Shillong"],
      category: "Nature & Adventure"
    },
    {
      id: 3,
      name: "Sikkim Himalayan Trek",
      duration: "10 Days",
      groupSize: "4-10 People",
      price: "₹35,000",
      originalPrice: "₹42,000",
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      description: "Himalayan adventure with Kanchenjunga views, monasteries, and alpine lakes.",
      highlights: ["Kanchenjunga base camp", "Rumtek monastery", "Tsomgo lake", "Gangtok city", "Yumthang valley"],
      category: "Trekking"
    },
    {
      id: 4,
      name: "Assam Wildlife Safari",
      duration: "6 Days",
      groupSize: "2-8 People",
      price: "₹18,000",
      originalPrice: "₹23,000",
      rating: 4.6,
      reviews: 152,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      description: "Wildlife photography tour featuring one-horned rhinos, tigers, and river dolphins.",
      highlights: ["Kaziranga National Park", "Manas National Park", "River cruise", "Tea garden visit", "Majuli island"],
      category: "Wildlife"
    },
    {
      id: 5,
      name: "Nagaland Cultural Journey",
      duration: "5 Days",
      groupSize: "2-12 People",
      price: "₹16,000",
      originalPrice: "₹20,000",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "Immersive cultural experience with tribal villages, festivals, and traditional crafts.",
      highlights: ["Hornbill Festival", "Traditional villages", "Dzukou valley", "War cemetery", "Local cuisine"],
      category: "Cultural"
    },
    {
      id: 6,
      name: "Arunachal Monastery Circuit",
      duration: "8 Days",
      groupSize: "2-6 People",
      price: "₹28,000",
      originalPrice: "₹34,000",
      rating: 4.9,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Spiritual journey through ancient monasteries and pristine mountain landscapes.",
      highlights: ["Tawang monastery", "Madhuri lake", "Bumla pass", "Ziro valley", "Buddhist culture"],
      category: "Spiritual"
    }
  ];

  const categories = ["All", "Complete Tour", "Nature & Adventure", "Trekking", "Wildlife", "Cultural", "Spiritual"];

  const filteredPackages = selectedCategory === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tour <span className="text-primary">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Carefully curated Northeast India tour packages for every type of traveler. 
            From cultural immersion to adventure trekking, find your perfect journey.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {pkg.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 text-xs px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{pkg.rating}</span>
                      <span className="text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-medium text-primary mb-2">Package Highlights:</div>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs bg-secondary px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                    <PackageBookingModal packageName={pkg.name}>
                      <Button size="sm" className="group">
                        Book Now
                      </Button>
                    </PackageBookingModal>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find the Perfect Package?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create a custom itinerary tailored to your preferences and interests.
          </p>
          <Button size="lg" variant="secondary">
            Request Custom Package
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
