
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Mountain, Users, Droplets } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "@/components/TripEnquiryForm";

const Meghalaya = () => {
  const attractions = [
    {
      name: "Living Root Bridges",
      description: "Unique bridges grown from rubber tree roots by the Khasi people over centuries.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      category: "Natural Wonder"
    },
    {
      name: "Cherrapunji",
      description: "One of the wettest places on Earth, famous for its dramatic waterfalls and caves.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      category: "Climate"
    },
    {
      name: "Mawlynnong Village",
      description: "Asia's cleanest village, known for its community-driven cleanliness initiatives.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Cultural"
    },
    {
      name: "Dawki River",
      description: "Crystal clear river with water so transparent that boats appear to float on air.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Natural"
    }
  ];

  const activities = [
    { icon: Mountain, name: "Cave Exploration", description: "Discover limestone caves" },
    { icon: Camera, name: "Waterfall Photography", description: "Capture stunning falls" },
    { icon: Users, name: "Village Tourism", description: "Meet local communities" },
    { icon: Droplets, name: "River Adventures", description: "Crystal clear waters" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="Meghalaya waterfalls"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Shillong, Meghalaya</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Meghalaya</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Abode of Clouds - Where living bridges span rivers and waterfalls cascade from every hill
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Plan Your Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Plan Your Meghalaya Adventure</DialogTitle>
              </DialogHeader>
              <TripEnquiryForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Waterfalls</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Oct-May</div>
              <div className="text-sm text-muted-foreground">Best Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">11,777mm</div>
              <div className="text-sm text-muted-foreground">Annual Rainfall</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Caves</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Visit <span className="text-primary">Meghalaya</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Natural Wonders</h3>
              <p className="text-muted-foreground mb-4">
                Meghalaya is home to some of the world's most unique natural phenomena, including living root bridges that have been grown by indigenous communities over hundreds of years.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 1,200 waterfalls, crystal-clear rivers, and extensive cave systems, Meghalaya offers unparalleled natural beauty and adventure opportunities.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                alt="Living root bridge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Natural <span className="text-primary">Marvels</span>
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-xs px-2 py-1 rounded-full">
                      {attraction.category}
                    </span>
                  </div>
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

      {/* Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Adventures in <span className="text-primary">Meghalaya</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <activity.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meghalaya;
