
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Mountain, Users, Utensils } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "@/components/TripEnquiryForm";

const Nagaland = () => {
  const attractions = [
    {
      name: "Hornbill Festival",
      description: "The 'Festival of Festivals' showcasing Naga culture, traditional dances, and handicrafts.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Festival"
    },
    {
      name: "Dzukou Valley",
      description: "Valley of flowers with stunning landscapes and seasonal blooms, perfect for trekking.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Nature"
    },
    {
      name: "Kohima War Cemetery",
      description: "Memorial honoring World War II heroes with historical significance and peaceful gardens.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      category: "Historical"
    },
    {
      name: "Mon District",
      description: "Experience authentic Konyak tribe culture and traditional village life.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Cultural"
    }
  ];

  const activities = [
    { icon: Mountain, name: "Trekking", description: "Explore scenic hills and valleys" },
    { icon: Camera, name: "Photography", description: "Capture tribal culture and landscapes" },
    { icon: Users, name: "Village Tours", description: "Visit traditional Naga villages" },
    { icon: Utensils, name: "Food Tours", description: "Taste authentic Naga cuisine" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Nagaland landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Kohima, Nagaland</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Nagaland</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Land of Festivals - Experience the vibrant tribal culture, pristine landscapes, and warm hospitality of the Naga people
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Plan Your Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Plan Your Nagaland Adventure</DialogTitle>
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
              <div className="text-2xl font-bold text-primary mb-2">16</div>
              <div className="text-sm text-muted-foreground">Tribes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Dec</div>
              <div className="text-sm text-muted-foreground">Best Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1,988m</div>
              <div className="text-sm text-muted-foreground">Highest Peak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">English</div>
              <div className="text-sm text-muted-foreground">Main Language</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Visit <span className="text-primary">Nagaland</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nagaland offers an authentic cultural experience unlike anywhere else in India, 
              with vibrant festivals, pristine nature, and welcoming communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Cultural Richness</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Home to 16 major tribes, each with distinct customs, languages, and traditions. 
                  The famous Hornbill Festival in December showcases this incredible diversity.
                </p>
                <p className="text-muted-foreground">
                  Experience traditional Naga villages, witness ancient customs, and participate 
                  in local festivals throughout the year.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Hornbill Festival</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Tribal Culture</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Traditional Crafts</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                alt="Naga cultural performance"
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
            <p className="text-xl text-muted-foreground">
              Discover the must-visit destinations in Nagaland
            </p>
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
              Things to <span className="text-primary">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Adventures and experiences waiting for you in Nagaland
            </p>
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

      {/* Best Time to Visit */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Best Time to <span className="text-primary">Visit</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">October - February</h3>
                <p className="text-sm text-muted-foreground">
                  Best weather with clear skies and comfortable temperatures. Perfect for sightseeing and festivals.
                </p>
                <div className="mt-4 text-primary font-medium">Recommended</div>
              </Card>
              
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">March - May</h3>
                <p className="text-sm text-muted-foreground">
                  Pleasant spring weather, blooming flowers in Dzukou Valley. Good for trekking.
                </p>
                <div className="mt-4 text-orange-500 font-medium">Good</div>
              </Card>
              
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">June - September</h3>
                <p className="text-sm text-muted-foreground">
                  Monsoon season with heavy rainfall. Limited outdoor activities but lush landscapes.
                </p>
                <div className="mt-4 text-muted-foreground font-medium">Avoid</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nagaland;
