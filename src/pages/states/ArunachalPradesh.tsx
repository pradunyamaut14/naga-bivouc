
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Mountain, Users, TreePine } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "@/components/TripEnquiryForm";

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

  const activities = [
    { icon: Mountain, name: "Himalayan Trekking", description: "High-altitude adventures" },
    { icon: Camera, name: "Wildlife Photography", description: "Capture rare species" },
    { icon: Users, name: "Tribal Culture Tours", description: "Meet indigenous communities" },
    { icon: TreePine, name: "Forest Expeditions", description: "Explore pristine wilderness" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Arunachal Pradesh</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Land of Dawn-Lit Mountains - Where India's sun rises first, revealing untouched Himalayan beauty and ancient Buddhist culture
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Plan Your Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Plan Your Arunachal Pradesh Adventure</DialogTitle>
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
              <div className="text-2xl font-bold text-primary mb-2">26</div>
              <div className="text-sm text-muted-foreground">Major Tribes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Oct-Apr</div>
              <div className="text-sm text-muted-foreground">Best Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">7,817m</div>
              <div className="text-sm text-muted-foreground">Highest Peak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">ILP</div>
              <div className="text-sm text-muted-foreground">Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Visit <span className="text-primary">Arunachal Pradesh</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Himalayan Paradise</h3>
              <p className="text-muted-foreground mb-4">
                Experience the raw beauty of the Eastern Himalayas, where snow-capped peaks meet pristine valleys, and ancient monasteries dot the landscape at breathtaking altitudes.
              </p>
              <p className="text-muted-foreground mb-6">
                Home to diverse indigenous communities, Arunachal Pradesh offers authentic cultural experiences and the chance to witness India's first sunrise.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
                alt="Himalayan landscape"
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
              Top <span className="text-primary">Attractions</span>
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
              Adventure <span className="text-primary">Activities</span>
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

export default ArunachalPradesh;
