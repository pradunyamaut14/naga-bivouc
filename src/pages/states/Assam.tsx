
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Mountain, Users, Coffee } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "@/components/TripEnquiryForm";

const Assam = () => {
  const attractions = [
    {
      name: "Kaziranga National Park",
      description: "UNESCO World Heritage site, home to two-thirds of the world's one-horned rhinoceros.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      category: "Wildlife"
    },
    {
      name: "Majuli Island",
      description: "World's largest river island, center of Assamese culture and Vaishnavite monasteries.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Cultural"
    },
    {
      name: "Tea Gardens",
      description: "Rolling hills covered with lush tea plantations producing world-famous Assam tea.",
      image: "https://images.unsplash.com/photo-1587735230901-b1d6bd87e696",
      category: "Plantation"
    },
    {
      name: "Kamakhya Temple",
      description: "Ancient Shakti Peeth temple dedicated to Goddess Kamakhya, one of the most sacred sites.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      category: "Spiritual"
    }
  ];

  const activities = [
    { icon: Camera, name: "Wildlife Safari", description: "Spot rhinos and tigers" },
    { icon: Coffee, name: "Tea Garden Tours", description: "Learn tea processing" },
    { icon: Users, name: "Cultural Experiences", description: "Traditional Assamese life" },
    { icon: Mountain, name: "River Cruises", description: "Brahmaputra adventures" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
            alt="Assam tea gardens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Guwahati, Assam</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Assam</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Gateway to Northeast - Land of tea gardens, one-horned rhinos, and the mighty Brahmaputra River
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Plan Your Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Plan Your Assam Adventure</DialogTitle>
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
              <div className="text-2xl font-bold text-primary mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Tea Gardens</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Nov-Apr</div>
              <div className="text-sm text-muted-foreground">Best Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">2,400</div>
              <div className="text-sm text-muted-foreground">Rhinos in Kaziranga</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">2,900km</div>
              <div className="text-sm text-muted-foreground">Brahmaputra Length</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Visit <span className="text-primary">Assam</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Wildlife & Tea Heritage</h3>
              <p className="text-muted-foreground mb-4">
                Assam is renowned for its incredible wildlife, particularly the one-horned rhinoceros in Kaziranga National Park, and its world-famous tea industry that produces some of the finest black tea.
              </p>
              <p className="text-muted-foreground mb-6">
                The state offers a perfect blend of natural beauty, cultural richness, and adventure, with the mighty Brahmaputra River flowing through its heart.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587735230901-b1d6bd87e696"
                alt="Assam tea plantation"
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
              Must-Visit <span className="text-primary">Destinations</span>
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
              Experiences in <span className="text-primary">Assam</span>
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

export default Assam;
