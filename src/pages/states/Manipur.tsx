
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Mountain, Users, Music } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "@/components/TripEnquiryForm";

const Manipur = () => {
  const attractions = [
    {
      name: "Loktak Lake",
      description: "Largest freshwater lake in Northeast India, famous for floating phumdis and Keibul Lamjao National Park.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Natural"
    },
    {
      name: "Imphal",
      description: "Historic capital city with war memorials, markets, and the famous Manipuri dance performances.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Cultural"
    },
    {
      name: "Kangla Fort",
      description: "Ancient seat of Manipur's rulers, now a archaeological site with temples and museums.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      category: "Historical"
    },
    {
      name: "Andro Village",
      description: "Traditional village known for pottery, heritage sites, and cultural preservation.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Heritage"
    }
  ];

  const activities = [
    { icon: Music, name: "Classical Dance", description: "Learn Manipuri dance" },
    { icon: Camera, name: "Lake Photography", description: "Capture floating islands" },
    { icon: Users, name: "Cultural Tours", description: "Traditional crafts" },
    { icon: Mountain, name: "Hill Station Visits", description: "Scenic hill towns" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Manipur</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Jewel of India - Land of classical dance, floating lakes, and rich cultural heritage
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Plan Your Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Plan Your Manipur Adventure</DialogTitle>
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
              <div className="text-2xl font-bold text-primary mb-2">34</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Oct-Mar</div>
              <div className="text-sm text-muted-foreground">Best Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">287km²</div>
              <div className="text-sm text-muted-foreground">Loktak Lake</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Manipuri</div>
              <div className="text-sm text-muted-foreground">Classical Dance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Discover <span className="text-primary">Manipur</span>
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
              Cultural <span className="text-primary">Experiences</span>
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

export default Manipur;
