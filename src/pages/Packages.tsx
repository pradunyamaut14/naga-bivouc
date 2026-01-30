import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Mountain, Music } from "lucide-react";
import { useState } from "react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { packages, TourPackage } from "@/data/packages";

const Packages = () => {
  const [filter, setFilter] = useState<"all" | "festival" | "adventure">("all");

  const filteredPackages = packages
    .filter((pkg) => filter === "all" || pkg.category === filter)
    .sort((a, b) => Number(b.featured === true) - Number(a.featured === true));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920" 
          alt="Northeast India Mountains"
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Tour Packages</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Festivals & Adventures Across Northeast India
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="gap-2"
          >
            All Packages
          </Button>
          <Button
            variant={filter === "festival" ? "default" : "outline"}
            onClick={() => setFilter("festival")}
            className="gap-2"
          >
            <Music className="h-4 w-4" />
            Festival Tours
          </Button>
          <Button
            variant={filter === "adventure" ? "default" : "outline"}
            onClick={() => setFilter("adventure")}
            className="gap-2"
          >
            <Mountain className="h-4 w-4" />
            Adventure Tours
          </Button>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PackageCard = ({ pkg }: { pkg: TourPackage }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-52">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {pkg.featured && (
            <Badge className="bg-primary">⭐ Signature</Badge>
          )}
          <Badge variant="secondary" className="capitalize">
            {pkg.category === "festival" ? <><Music className="h-3 w-3 mr-1" /> Festival</> : <><Mountain className="h-3 w-3 mr-1" /> Adventure</>}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge className="bg-background/90 text-foreground font-bold text-base px-3 py-1">
            {pkg.price}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg leading-tight line-clamp-2">{pkg.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {pkg.destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {pkg.groupSize}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 3).map((highlight, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {highlight}
            </Badge>
          ))}
          {pkg.highlights.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{pkg.highlights.length - 3} more
            </Badge>
          )}
        </div>

        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">View Details</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl">{pkg.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg" 
                />

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-secondary/40 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">{pkg.duration}</p>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">{pkg.groupSize}</p>
                      <p className="text-xs text-muted-foreground">Group Size</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">{pkg.destination}</p>
                      <p className="text-xs text-muted-foreground">Destination</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">{pkg.bestTime}</p>
                      <p className="text-xs text-muted-foreground">Best Time</p>
                    </div>
                  </div>
                </div>

                {/* Price Banner */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.priceNote}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary">{highlight}</Badge>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Day-wise Itinerary</h3>
                  <div className="space-y-3">
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="border-l-4 border-primary pl-4 py-2 bg-secondary/20 rounded-r">
                        <p className="font-semibold text-primary">Day {day.day}: {day.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">✓ Inclusions</h3>
                    <ul className="text-sm space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">✗ Exclusions</h3>
                    <ul className="text-sm space-y-1">
                      {pkg.excludes.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Book This Package</h3>
                  <WhatsAppInquiryForm destination={pkg.title} />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default Packages;
