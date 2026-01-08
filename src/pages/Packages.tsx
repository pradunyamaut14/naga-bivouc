
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
  // ===================== NAGALAND =====================

  {
    id: 1,
    title: "Nagaland Hornbill Festival Special",
    destination: "Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    price: "₹18,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    highlights: ["Hornbill Festival", "Kisama Heritage Village", "Kohima War Cemetery", "Khonoma Village"],
    itinerary: [
      { day: 1, title: "Arrival at Dimapur – Kohima", description: "Meet & greet at Dimapur. Drive to Kohima (approx 3 hrs). Check-in. Evening local market walk." },
      { day: 2, title: "Hornbill Festival", description: "Full day at Kisama Heritage Village enjoying tribal dances, food stalls, cultural shows & crafts." },
      { day: 3, title: "Kohima & Khonoma", description: "Visit War Cemetery, State Museum and Khonoma green village. Village walk & interaction." },
      { day: 4, title: "Dzükou Valley Excursion", description: "Early start for trek to Dzükou Valley. Explore streams, meadows & viewpoints. Return by evening." },
      { day: 5, title: "Departure", description: "After breakfast drive back to Dimapur for onward journey." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Guide", "Festival Pass"],
    bestTime: "December"
  },

  {
    id: 2,
    title: "Dzükou Valley Trekking & Camping",
    destination: "Nagaland",
    duration: "4 Days / 3 Nights",
    groupSize: "4-10 People",
    price: "₹12,500",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    highlights: ["Dzükou Valley", "Camping", "Japfu Viewpoint", "Nature Trails"],
    itinerary: [
      { day: 1, title: "Dimapur – Kohima", description: "Pickup from Dimapur, drive to Kohima. Evening trek briefing & rest." },
      { day: 2, title: "Trek to Dzükou", description: "Drive to trek point and start trek. Reach Dzükou Valley, explore & overnight camping." },
      { day: 3, title: "Explore & Return", description: "Morning valley walk & photography. Trek back and return to Kohima." },
      { day: 4, title: "Departure", description: "After breakfast drive back to Dimapur." }
    ],
    includes: ["Camping", "Meals", "Guide", "Permits", "Transport"],
    bestTime: "October - May"
  },

  {
    id: 3,
    title: "Mon & Longwa Konyak Headhunters Trail",
    destination: "Nagaland",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹26,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Longwa Village", "Konyak Tribe", "Myanmar Border", "Mon Villages"],
    itinerary: [
      { day: 1, title: "Dimapur – Mon", description: "Early morning scenic drive to Mon. Check-in & rest." },
      { day: 2, title: "Longwa Village", description: "Visit Indo-Myanmar border village. Explore chief’s house & village life." },
      { day: 3, title: "Konyak Villages", description: "Visit traditional villages, meet tattooed elders & explore morungs." },
      { day: 4, title: "Shangnyu & Hongphoi", description: "Visit monolith village & nearby cultural villages." },
      { day: 5, title: "Return Journey", description: "Drive back towards Dimapur. Overnight en-route." },
      { day: 6, title: "Departure", description: "Continue drive to Dimapur & drop." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Guide", "Permits"],
    bestTime: "October - April"
  },

  {
    id: 4,
    title: "Nagaland Heritage Villages Tour",
    destination: "Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    price: "₹17,500",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1593692716621-1b7f3f24f9b0?w=800",
    highlights: ["Khonoma", "Tuophema", "Kisama", "Mokokchung", "Ungma"],
    itinerary: [
      { day: 1, title: "Dimapur – Kohima", description: "Visit Kisama & Kohima local sightseeing." },
      { day: 2, title: "Khonoma & Tuophema", description: "Explore heritage villages, traditional houses & culture." },
      { day: 3, title: "Kohima – Mokokchung", description: "Drive to Ao heartland. Evening cultural interaction." },
      { day: 4, title: "Ungma Village", description: "Visit Nagaland’s oldest Ao village & local museum." },
      { day: 5, title: "Departure", description: "Drive back to Dimapur." }
    ],
    includes: ["Accommodation", "Meals", "Transport", "Guide"],
    bestTime: "September - April"
  },

  {
    id: 5,
    title: "Nagaland Nature & Wildlife Escape",
    destination: "Nagaland",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 People",
    price: "₹13,500",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    highlights: ["Intanki National Park", "Dzulekie", "Forest Trails"],
    itinerary: [
      { day: 1, title: "Dimapur – Intanki", description: "Transfer to Intanki National Park. Nature walk & bird watching." },
      { day: 2, title: "Intanki – Dzulekie", description: "Drive to Dzulekie village. Explore forest trails." },
      { day: 3, title: "Dzulekie – Kohima", description: "Scenic mountain drive & Kohima sightseeing." },
      { day: 4, title: "Departure", description: "Return to Dimapur." }
    ],
    includes: ["Accommodation", "Meals", "Transport", "Guide"],
    bestTime: "October - March"
  },

  {
    id: 6,
    title: "Kohima & Dzükou Short Escape",
    destination: "Nagaland",
    duration: "3 Days / 2 Nights",
    groupSize: "2-6 People",
    price: "₹9,500",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    highlights: ["Kohima", "Dzükou Valley", "War Cemetery"],
    itinerary: [
      { day: 1, title: "Dimapur – Kohima", description: "Visit War Cemetery & local market." },
      { day: 2, title: "Dzükou Trek", description: "Full day trek to Dzükou Valley." },
      { day: 3, title: "Departure", description: "Return to Dimapur." }
    ],
    includes: ["Accommodation", "Meals", "Transport", "Guide"],
    bestTime: "October - May"
  },

  {
    id: 7,
    title: "Eastern Nagaland Explorer (Tuensang & Longleng)",
    destination: "Nagaland",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹24,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1593692716621-1b7f3f24f9b0?w=800",
    highlights: ["Chang & Phom Tribes", "Eastern Hills", "Remote Villages"],
    itinerary: [
      { day: 1, title: "Dimapur – Tuensang", description: "Long scenic drive & rest." },
      { day: 2, title: "Chang Villages", description: "Village visits & cultural interaction." },
      { day: 3, title: "Tuensang – Longleng", description: "Drive to Phom tribal region." },
      { day: 4, title: "Phom Villages", description: "Explore villages & hill viewpoints." },
      { day: 5, title: "Return Journey", description: "Drive back towards Dimapur." },
      { day: 6, title: "Departure", description: "Drop at Dimapur." }
    ],
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Permits"],
    bestTime: "October - April"
  },

  {
    id: 8,
    title: "Nagaland Complete Grand Circuit",
    destination: "Nagaland",
    duration: "10 Days / 9 Nights",
    groupSize: "4-10 People",
    price: "₹42,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    highlights: ["Kohima", "Dzükou", "Mokokchung", "Mon", "Longwa", "Intanki"],
    itinerary: [
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Transfer & rest." },
      { day: 2, title: "Kohima & Khonoma", description: "Sightseeing & village tour." },
      { day: 3, title: "Dzükou Valley", description: "Trek & exploration." },
      { day: 4, title: "Kohima – Mokokchung", description: "Travel day." },
      { day: 5, title: "Ungma Village", description: "Ao culture exploration." },
      { day: 6, title: "Mokokchung – Mon", description: "Long drive." },
      { day: 7, title: "Longwa Village", description: "Border village exploration." },
      { day: 8, title: "Return Journey", description: "Drive back towards Dimapur." },
      { day: 9, title: "Intanki National Park", description: "Wildlife & forest trails." },
      { day: 10, title: "Departure", description: "Drop at Dimapur." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Guide", "Permits"],
    bestTime: "October - April"
  },

  // ===================== REST OF NORTHEAST =====================

  {
    id: 9,
    title: "Meghalaya Waterfalls & Root Bridges",
    destination: "Meghalaya",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹22,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    highlights: ["Nohkalikai Falls", "Double Decker Root Bridge", "Dawki River", "Mawsmai Cave"],
    itinerary: [
      { day: 1, title: "Guwahati – Shillong", description: "Drive to Shillong & evening at Police Bazaar." },
      { day: 2, title: "Shillong – Cherrapunji", description: "Visit waterfalls & caves." },
      { day: 3, title: "Nongriat Trek", description: "Trek to Double Decker Root Bridge." },
      { day: 4, title: "Dawki & Mawlynnong", description: "River boating & cleanest village." },
      { day: 5, title: "Shillong Sightseeing", description: "Peak, museum & lake." },
      { day: 6, title: "Departure", description: "Drop Guwahati." }
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Transport", "Guide"],
    bestTime: "October - April"
  },

  {
    id: 10,
    title: "Kaziranga Wildlife Safari",
    destination: "Assam",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 People",
    price: "₹15,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=800",
    highlights: ["Rhino Safari", "Elephant Safari", "Bird Watching"],
    itinerary: [
      { day: 1, title: "Arrival Kaziranga", description: "Transfer from Jorhat & rest." },
      { day: 2, title: "Safari Day", description: "Elephant safari morning, Jeep safari afternoon." },
      { day: 3, title: "Eastern Range Safari", description: "Jeep safari & Orchid Park." },
      { day: 4, title: "Departure", description: "Drop at Jorhat." }
    ],
    includes: ["Accommodation", "All meals", "Safaris", "Park Entry", "Transport"],
    bestTime: "November - April"
  },

  {
    id: 11,
    title: "Tawang Arunachal Explorer",
    destination: "Arunachal Pradesh",
    duration: "7 Days / 6 Nights",
    groupSize: "4-12 People",
    price: "₹32,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    highlights: ["Tawang Monastery", "Sela Pass", "Bumla Pass", "Madhuri Lake"],
    itinerary: [
      { day: 1, title: "Guwahati – Bhalukpong", description: "Drive & overnight." },
      { day: 2, title: "Dirang", description: "Hot springs & local sightseeing." },
      { day: 3, title: "Dirang – Tawang", description: "Sela Pass & Jaswant Garh." },
      { day: 4, title: "Tawang Sightseeing", description: "Monastery & market." },
      { day: 5, title: "Bumla Pass", description: "Border excursion & Madhuri Lake." },
      { day: 6, title: "Bomdila", description: "Return journey & monastery visit." },
      { day: 7, title: "Departure", description: "Drop Guwahati." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Permits", "Guide"],
    bestTime: "March - June, Sept - Nov"
  },

  {
    id: 12,
    title: "Sikkim Himalayan Spiritual Tour",
    destination: "Sikkim",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 People",
    price: "₹24,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    highlights: ["Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "MG Road"],
    itinerary: [
      { day: 1, title: "Bagdogra – Gangtok", description: "Evening free." },
      { day: 2, title: "Gangtok Sightseeing", description: "Monasteries & museum." },
      { day: 3, title: "Tsomgo & Nathula", description: "High altitude excursion." },
      { day: 4, title: "Gangtok – Pelling", description: "Scenic drive." },
      { day: 5, title: "Khecheopalri Lake", description: "Waterfalls & viewpoints." },
      { day: 6, title: "Departure", description: "Drop Bagdogra." }
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Transport", "Permits", "Guide"],
    bestTime: "March - June, Sept - Dec"
  },

  {
    id: 13,
    title: "Nagaland + Meghalaya Combo Explorer",
    destination: "Nagaland & Meghalaya",
    duration: "8 Days / 7 Nights",
    groupSize: "4-10 People",
    price: "₹34,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    highlights: ["Kohima", "Dzükou", "Shillong", "Cherrapunji", "Dawki"],
    itinerary: [
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Local sightseeing." },
      { day: 2, title: "Kohima & Khonoma", description: "Village tour." },
      { day: 3, title: "Dzükou Valley", description: "Trek." },
      { day: 4, title: "Kohima – Shillong", description: "Transfer day." },
      { day: 5, title: "Cherrapunji", description: "Waterfalls & caves." },
      { day: 6, title: "Dawki & Mawlynnong", description: "River boating & village." },
      { day: 7, title: "Shillong", description: "Local sightseeing." },
      { day: 8, title: "Departure", description: "Drop Guwahati." }
    ],
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Permits"],
    bestTime: "October - April"
  }
];

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Naga-inspired design */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')"
          }}
        >
          <div className="absolute inset-0 naga-gradient opacity-80" />
          <div className="absolute inset-0 naga-mist" />
        </div>
        {/* Tribal pattern accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 naga-border border-b-4" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-naga-gold font-medium tracking-widest uppercase mb-2">Explore the Unexplored</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Tour Packages</h1>
          <p className="text-xl opacity-90 font-body max-w-2xl mx-auto">
            Curated experiences through the mystical lands of Northeast India
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              Our Signature Journeys
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Each package is crafted with deep knowledge of the land, its people, and traditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 group">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-naga-black/70 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-naga-forest text-white border-0">
                    {pkg.destination}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-2xl font-bold text-white">{pkg.price}</p>
                    <p className="text-xs text-white/80">{pkg.priceNote}</p>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-display text-foreground">{pkg.title}</CardTitle>
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
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-accent/30 text-muted-foreground">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-t-4 border-t-accent">
                      <DialogHeader>
                        <p className="text-accent text-sm font-medium tracking-wide uppercase">{pkg.destination}</p>
                        <DialogTitle className="text-2xl font-display">{pkg.title}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div className="relative">
                          <img 
                            src={pkg.image} 
                            alt={pkg.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-1 naga-border border-b-4" />
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm bg-secondary/50 p-4 rounded-lg">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="font-medium">{pkg.duration}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-accent" />
                            <span className="font-medium">{pkg.groupSize}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-medium">{pkg.destination}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <IndianRupee className="h-4 w-4 text-accent" />
                            <span className="font-bold text-primary">{pkg.price}</span>
                            <span className="text-muted-foreground">{pkg.priceNote}</span>
                          </span>
                        </div>

                        <div>
                          <h4 className="font-display font-semibold mb-2 text-foreground">Best Time to Visit</h4>
                          <p className="text-muted-foreground bg-accent/10 px-3 py-2 rounded inline-block">{pkg.bestTime}</p>
                        </div>

                        <div>
                          <h4 className="font-display font-semibold mb-4 text-foreground">Day-wise Itinerary</h4>
                          <div className="space-y-4">
                            {pkg.itinerary.map((day) => (
                              <div key={day.day} className="border-l-4 border-accent pl-4 py-2 bg-secondary/20 rounded-r-lg">
                                <p className="font-semibold text-foreground">Day {day.day}: {day.title}</p>
                                <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display font-semibold mb-3 text-foreground">Package Includes</h4>
                          <div className="flex flex-wrap gap-2">
                            {pkg.includes.map((item, idx) => (
                              <Badge key={idx} variant="outline" className="border-naga-forest/50 text-naga-forest">{item}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-naga-forest/10 to-accent/10 p-6 rounded-lg border border-accent/20">
                          <h4 className="font-display font-semibold mb-3 text-foreground">Book This Package</h4>
                          <WhatsAppInquiryForm destination={`${pkg.title} - ${pkg.destination}`} />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA with Naga styling */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 naga-gradient opacity-90" />
        <div className="absolute inset-0 naga-mist" />
        <div className="absolute top-0 left-0 right-0 h-2 naga-border border-t-4" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-accent font-medium tracking-widest uppercase mb-2">Personalized Experiences</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Need a Custom Itinerary?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto font-body">
            Can't find what you're looking for? We specialize in creating personalized travel experiences. 
            Tell us your preferences and we'll craft the perfect Northeast India adventure for you.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                Request Custom Package
              </Button>
            </DialogTrigger>
            <DialogContent className="border-t-4 border-t-accent">
              <DialogHeader>
                <DialogTitle className="font-display text-xl">Custom Package Inquiry</DialogTitle>
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
