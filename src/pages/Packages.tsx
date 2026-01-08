
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, IndianRupee } from "lucide-react";
import { useState } from "react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const packages = [
  {
    id: 1,
    title: "Nagaland Hornbill Festival",
    destination: "Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    price: "₹18,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    highlights: ["Hornbill Festival", "Kohima War Cemetery", "Khonoma Village", "Local Cuisine"],
    itinerary: [
      { day: 1, title: "Arrival in Dimapur", description: "Pickup from Dimapur airport/station. Drive to Kohima (74 km, ~3 hrs). Check-in and evening at leisure." },
      { day: 2, title: "Hornbill Festival", description: "Full day at Kisama Heritage Village for Hornbill Festival. Witness tribal performances, traditional games, and local food stalls." },
      { day: 3, title: "Kohima Exploration", description: "Visit Kohima War Cemetery, State Museum, and local markets. Evening cultural show." },
      { day: 4, title: "Khonoma Village", description: "Day trip to Khonoma, Asia's first green village. Trek through the village, interact with locals." },
      { day: 5, title: "Departure", description: "Morning at leisure. Transfer to Dimapur for departure." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Guide", "Festival entry"],
    bestTime: "December (Festival dates)"
  },
  {
    id: 2,
    title: "Meghalaya Waterfalls & Caves",
    destination: "Meghalaya",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹22,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    highlights: ["Living Root Bridges", "Nohkalikai Falls", "Dawki River", "Mawsmai Caves"],
    itinerary: [
      { day: 1, title: "Arrival in Shillong", description: "Pickup from Guwahati airport. Drive to Shillong (100 km, ~3 hrs). Evening walk at Police Bazaar." },
      { day: 2, title: "Cherrapunji", description: "Visit Nohkalikai Falls, Seven Sisters Falls, Mawsmai Caves, and Eco Park." },
      { day: 3, title: "Double Decker Root Bridge", description: "Trek to the famous Double Decker Living Root Bridge in Nongriat (3500 steps down and up)." },
      { day: 4, title: "Dawki & Mawlynnong", description: "Crystal clear Dawki river, boat ride at India-Bangladesh border. Visit Mawlynnong - Asia's cleanest village." },
      { day: 5, title: "Shillong Sightseeing", description: "Elephant Falls, Shillong Peak, Don Bosco Museum, Cathedral." },
      { day: 6, title: "Departure", description: "Transfer to Guwahati airport for departure." }
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Transport", "Guide", "Boat ride"],
    bestTime: "October - April"
  },
  {
    id: 3,
    title: "Arunachal Adventure",
    destination: "Arunachal Pradesh",
    duration: "7 Days / 6 Nights",
    groupSize: "4-12 People",
    price: "₹32,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    highlights: ["Tawang Monastery", "Sela Pass", "Bomdila", "War Memorial"],
    itinerary: [
      { day: 1, title: "Guwahati to Bhalukpong", description: "Drive to Bhalukpong (230 km, ~6 hrs). ILP check. Overnight stay." },
      { day: 2, title: "Bhalukpong to Dirang", description: "Drive through beautiful landscapes to Dirang (140 km, ~5 hrs). Visit hot springs." },
      { day: 3, title: "Dirang to Tawang", description: "Cross Sela Pass (13,700 ft), visit Jaswant Garh War Memorial. Reach Tawang by evening." },
      { day: 4, title: "Tawang Exploration", description: "Visit Tawang Monastery (largest in India), Urgelling Monastery, local market." },
      { day: 5, title: "Bumla Pass & Madhuri Lake", description: "Day trip to Bumla Pass (India-China border) and PT Tso (Madhuri Lake). Permit required." },
      { day: 6, title: "Tawang to Bomdila", description: "Drive back to Bomdila. Visit Bomdila Monastery and craft center." },
      { day: 7, title: "Departure", description: "Drive to Guwahati for departure." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "ILP & Permits", "Guide"],
    bestTime: "March - June, September - November"
  },
  {
    id: 4,
    title: "Kaziranga Wildlife Safari",
    destination: "Assam",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 People",
    price: "₹15,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=800",
    highlights: ["Rhino Safari", "Elephant Safari", "Bird Watching", "Tea Gardens"],
    itinerary: [
      { day: 1, title: "Arrival at Kaziranga", description: "Pickup from Jorhat airport. Drive to Kaziranga (97 km, ~2.5 hrs). Evening nature walk." },
      { day: 2, title: "Safari Day", description: "Early morning elephant safari in Central Range. Jeep safari in Western Range. Spot one-horned rhinos, elephants, and birds." },
      { day: 3, title: "Eastern Range & Orchid Park", description: "Morning jeep safari in Eastern Range. Visit Kaziranga Orchid Park and tea garden." },
      { day: 4, title: "Departure", description: "Morning bird watching. Transfer to Jorhat airport." }
    ],
    includes: ["Accommodation", "All meals", "Safaris", "Park entry", "Transport"],
    bestTime: "November - April"
  },
  {
    id: 5,
    title: "Sikkim Spiritual Journey",
    destination: "Sikkim",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 People",
    price: "₹24,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    highlights: ["Rumtek Monastery", "Tsomgo Lake", "Nathula Pass", "Gangtok MG Road"],
    itinerary: [
      { day: 1, title: "Arrival in Gangtok", description: "Pickup from Bagdogra airport. Drive to Gangtok (125 km, ~4 hrs). Evening at MG Road." },
      { day: 2, title: "Gangtok Sightseeing", description: "Visit Rumtek Monastery, Do Drul Chorten, Namgyal Institute of Tibetology, Flower Show." },
      { day: 3, title: "Tsomgo & Nathula", description: "Excursion to Tsomgo Lake and Nathula Pass (Indo-China border). Baba Harbhajan Singh Temple." },
      { day: 4, title: "Pelling", description: "Drive to Pelling (130 km, ~5 hrs). Visit Pemayangtse Monastery, Rabdentse Ruins." },
      { day: 5, title: "Pelling & Khecheopalri", description: "Visit Khecheopalri Lake, Kanchenjunga Falls. Evening sunset point." },
      { day: 6, title: "Departure", description: "Drive to Bagdogra airport for departure." }
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Transport", "Permits", "Guide"],
    bestTime: "March - June, September - December"
  },
  {
    id: 6,
    title: "Manipur Cultural Experience",
    destination: "Manipur",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    price: "₹16,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800",
    highlights: ["Loktak Lake", "Keibul Lamjao", "INA Memorial", "Sangai Festival"],
    itinerary: [
      { day: 1, title: "Arrival in Imphal", description: "Pickup from Imphal airport. Visit Kangla Fort and Ima Keithel (Women's Market)." },
      { day: 2, title: "Loktak Lake", description: "Full day at Loktak Lake - the floating lake. Visit Keibul Lamjao National Park (home of Sangai deer)." },
      { day: 3, title: "War Memorials", description: "Visit INA Memorial, Moirang, and World War II sites. Shree Govindajee Temple." },
      { day: 4, title: "Ukhrul", description: "Day trip to Ukhrul - land of Shirui Lily. Scenic drive through hills." },
      { day: 5, title: "Departure", description: "Morning shopping for handicrafts. Transfer to airport." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Guide", "Entry fees"],
    bestTime: "October - March"
  }
];

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')"
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl opacity-90">Curated experiences across Northeast India</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {pkg.destination}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {pkg.groupSize}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                      <p className="text-xs text-muted-foreground">{pkg.priceNote}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedPackage(pkg)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{pkg.title}</DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <img 
                            src={pkg.image} 
                            alt={pkg.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-primary" />
                              {pkg.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-primary" />
                              {pkg.groupSize}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              {pkg.destination}
                            </span>
                            <span className="flex items-center gap-1">
                              <IndianRupee className="h-4 w-4 text-primary" />
                              {pkg.price} {pkg.priceNote}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                            <p className="text-muted-foreground">{pkg.bestTime}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Day-wise Itinerary</h4>
                            <div className="space-y-3">
                              {pkg.itinerary.map((day) => (
                                <div key={day.day} className="border-l-2 border-primary pl-4">
                                  <p className="font-medium">Day {day.day}: {day.title}</p>
                                  <p className="text-sm text-muted-foreground">{day.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Package Includes</h4>
                            <div className="flex flex-wrap gap-2">
                              {pkg.includes.map((item, idx) => (
                                <Badge key={idx} variant="outline">{item}</Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-secondary/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-3">Book This Package</h4>
                            <WhatsAppInquiryForm destination={`${pkg.title} - ${pkg.destination}`} />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Itinerary?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We specialize in creating personalized travel experiences. 
            Tell us your preferences and we'll craft the perfect Northeast India adventure for you.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Custom Package
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Custom Package Inquiry</DialogTitle>
              </DialogHeader>
              <WhatsAppInquiryForm destination="Custom Northeast India Tour" />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
