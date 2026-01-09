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
  // ===================== FEATURED KHONOMA SIGNATURE =====================

  {
    id: 0,
    title: "Khonoma Heritage Village & Kohima Explorer (Signature Tour)",
    destination: "Nagaland",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 People",
    price: "₹14,500",
    priceNote: "per person",
    image: "https://c.ndtvimg.com/2025-04/v0stofeg_village_625x300_08_April_25.jpg?im=FeatureCrop,algorithm=dnn,width=773,height=435",
    highlights: [
      "Khonoma Green Village",
      "Traditional Angami Houses",
      "Kohima War Cemetery",
      "Dzulekie Forest Trails",
      "Local Food & Culture"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Dimapur – Kohima",
        description: "Pickup from Dimapur. Drive to Kohima. Visit Kohima War Cemetery and local market. Overnight in Kohima."
      },
      {
        day: 2,
        title: "Kohima – Khonoma Heritage Village",
        description: "Drive to Khonoma (Asia’s first green village). Guided village walk, traditional Angami houses, morungs, forts, terraced fields. Local food experience. Overnight in Khonoma homestay."
      },
      {
        day: 3,
        title: "Khonoma – Dzulekie Nature Trails",
        description: "Morning forest walk and birding around Khonoma & Dzulekie. Free afternoon for photography and village life experience."
      },
      {
        day: 4,
        title: "Khonoma – Dimapur Departure",
        description: "After breakfast drive back to Dimapur for onward journey."
      }
    ],
    includes: [
      "Accommodation (Hotel + Heritage Homestay)",
      "All Meals",
      "Local Guide",
      "All Transfers",
      "Village Entry & Local Support"
    ],
    bestTime: "October - April",
    featured: true
  },

  // ===================== OTHER PACKAGES =====================

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
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Transfer to Kohima. Evening market walk." },
      { day: 2, title: "Hornbill Festival", description: "Full day at Kisama Heritage Village." },
      { day: 3, title: "Kohima & Khonoma", description: "War Cemetery, State Museum, Khonoma village." },
      { day: 4, title: "Dzükou Valley", description: "Trek to Dzükou Valley." },
      { day: 5, title: "Departure", description: "Return to Dimapur." }
    ],
    includes: ["Accommodation", "All meals", "Transport", "Guide", "Festival Pass"],
    bestTime: "December"
  },

  {
    id: 2,
    title: "Meghalaya Waterfalls & Root Bridges",
    destination: "Meghalaya",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹22,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    highlights: ["Nohkalikai Falls", "Double Decker Root Bridge", "Dawki River"],
    itinerary: [
      { day: 1, title: "Guwahati – Shillong", description: "Drive to Shillong." },
      { day: 2, title: "Cherrapunji", description: "Waterfalls & caves." },
      { day: 3, title: "Nongriat Trek", description: "Double Decker Root Bridge trek." },
      { day: 4, title: "Dawki & Mawlynnong", description: "River & village visit." },
      { day: 5, title: "Shillong", description: "Local sightseeing." },
      { day: 6, title: "Departure", description: "Drop Guwahati." }
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Transport", "Guide"],
    bestTime: "October - April"
  }
];

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')"
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">Explore the Unexplored</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Curated experiences from our homeland Nagaland & Northeast India
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages
            .sort((a, b) => (b.featured === true) - (a.featured === true))
            .map((pkg) => (

              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {pkg.featured ? (
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      ⭐ Signature Tour
                    </Badge>
                  ) : (
                    <Badge className="absolute top-4 left-4 bg-secondary text-white">
                      {pkg.destination}
                    </Badge>
                  )}

                  <div className="absolute bottom-4 left-4">
                    <p className="text-2xl font-bold text-white">{pkg.price}</p>
                    <p className="text-xs text-white/80">{pkg.priceNote}</p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{pkg.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" />{pkg.groupSize}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => setSelectedPackage(pkg)} className="w-full bg-primary">
                        View Details
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{pkg.title}</DialogTitle>
                      </DialogHeader>

                      <div className="space-y-4">
                        <img src={pkg.image} className="w-full h-64 object-cover rounded" />

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div><b>Duration:</b> {pkg.duration}</div>
                          <div><b>Group:</b> {pkg.groupSize}</div>
                          <div><b>Destination:</b> {pkg.destination}</div>
                          <div><b>Price:</b> {pkg.price} {pkg.priceNote}</div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Itinerary</h4>
                          {pkg.itinerary.map((d) => (
                            <div key={d.day} className="border-l-4 border-primary pl-3 mb-2">
                              <b>Day {d.day}: {d.title}</b>
                              <p className="text-sm text-muted-foreground">{d.description}</p>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Includes</h4>
                          <div className="flex flex-wrap gap-2">
                            {pkg.includes.map((i, idx) => (
                              <Badge key={idx} variant="outline">{i}</Badge>
                            ))}
                          </div>
                        </div>

                        <WhatsAppInquiryForm destination={pkg.title} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
