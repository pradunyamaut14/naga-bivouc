// ======================== IMPORTS ========================
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

// ======================== PACKAGES DATA ========================

const packages = [
  {
    id: 0,
    featured: true,
    title: "Khonoma Heritage Village & Kohima Explorer (Signature Tour)",
    destination: "Nagaland",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 People",
    price: "₹14,500",
    priceNote: "per person",
    image: "https://footloosedev.com/wp-content/uploads/KHONOMA-1024x491.jpg",
    highlights: ["Khonoma Green Village", "Angami Culture", "Kohima War Cemetery", "Dzulekie Forest"],
    itinerary: [
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Meet & greet at Dimapur. Drive to Kohima (3–3.5 hrs). Check-in. Visit Kohima War Cemetery & local market. Overnight Kohima." },
      { day: 2, title: "Kohima – Khonoma", description: "Drive to Khonoma. Guided heritage walk, morungs, forts & Angami houses. Traditional dinner & overnight in homestay." },
      { day: 3, title: "Dzulekie Forest Trails", description: "Guided forest walk, birding, streams & viewpoints. Evening village life experience." },
      { day: 4, title: "Return to Dimapur", description: "Drive back and departure." }
    ],
    includes: ["Hotel + Homestay", "All Meals", "Guide", "Transport"],
    bestTime: "October - April"
  },

  {
    id: 1,
    title: "Nagaland Hornbill Festival Cultural Tour",
    destination: "Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    price: "₹19,500",
    priceNote: "per person",
    image: "https://api.breakbag.com/storage/images/hornbill-festival-tour-package-p52mi15ouw20crfl-1755862727125.webp",
    highlights: ["Hornbill Festival", "Kisama", "Kohima", "Khonoma"],
    itinerary: [
      { day: 1, title: "Arrival Kohima", description: "Transfer from Dimapur. Evening local market." },
      { day: 2, title: "Hornbill Festival", description: "Full day at Kisama Heritage Village." },
      { day: 3, title: "Kohima Sightseeing", description: "War Cemetery, Museum, Cathedral Church." },
      { day: 4, title: "Khonoma Village", description: "Heritage village tour & culture." },
      { day: 5, title: "Departure", description: "Return to Dimapur." }
    ],
    includes: ["Hotel", "Meals", "Transport", "Guide", "Festival Pass"],
    bestTime: "December"
  },

  {
    id: 2,
    title: "Mon & Longwa Konyak Headhunters Trail",
    destination: "Nagaland",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹27,000",
    priceNote: "per person",
    image: "https://api.breakbag.com/storage/images/the-last-head-hunters-of-nagal-z54ln5ladigq9yaa-1761642150728.webp",
    highlights: ["Longwa", "Konyak Tribe", "Myanmar Border"],
    itinerary: [
      { day: 1, title: "Dimapur – Mon", description: "Long scenic drive & rest." },
      { day: 2, title: "Longwa Village", description: "Border village & chief’s house." },
      { day: 3, title: "Shangnyu", description: "Monoliths & villages." },
      { day: 4, title: "Cultural Day", description: "Village life & traditions." },
      { day: 5, title: "Return Journey", description: "Drive back." },
      { day: 6, title: "Departure", description: "Dimapur drop." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport", "Permits"],
    bestTime: "October - April"
  },

  {
    id: 3,
    title: "Nagaland Grand Tribal Circuit",
    destination: "Nagaland",
    duration: "9 Days / 8 Nights",
    groupSize: "4-10 People",
    price: "₹38,000",
    priceNote: "per person",
    image: "https://dulcimertours.com/wp-content/uploads/2024/12/ChatGPT-Image-Nov-17-2025-01_00_50-PM.png",
    highlights: ["Kohima", "Khonoma", "Mokokchung", "Mon", "Intanki"],
    itinerary: [
      { day: 1, title: "Dimapur – Kohima", description: "Sightseeing." },
      { day: 2, title: "Khonoma", description: "Village experience." },
      { day: 3, title: "Mokokchung", description: "Ao heartland." },
      { day: 4, title: "Ungma", description: "Oldest Ao village." },
      { day: 5, title: "Mon", description: "Konyak region." },
      { day: 6, title: "Longwa", description: "Border village." },
      { day: 7, title: "Return", description: "Travel day." },
      { day: 8, title: "Intanki", description: "Wildlife & forest." },
      { day: 9, title: "Departure", description: "Dimapur drop." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport", "Permits"],
    bestTime: "October - April"
  },

  {
    id: 4,
    title: "Tawang High Passes Explorer",
    destination: "Arunachal Pradesh",
    duration: "7 Days / 6 Nights",
    groupSize: "4-10 People",
    price: "₹32,000",
    priceNote: "per person",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tawang_Gate.jpg/1280px-Tawang_Gate.jpg",
    highlights: ["Tawang", "Sela Pass", "Bumla Pass"],
    itinerary: [
      { day: 1, title: "Guwahati – Bhalukpong", description: "Drive & ILP." },
      { day: 2, title: "Dirang", description: "Hot springs & monastery." },
      { day: 3, title: "Tawang", description: "Via Sela Pass." },
      { day: 4, title: "Tawang", description: "Monastery & market." },
      { day: 5, title: "Bumla Pass", description: "Border excursion." },
      { day: 6, title: "Bomdila", description: "Return." },
      { day: 7, title: "Departure", description: "Guwahati." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport", "Permits"],
    bestTime: "March - June, Sept - Nov"
  },

  {
    id: 5,
    title: "Anini & Dibang Valley Expedition",
    destination: "Arunachal Pradesh",
    duration: "8 Days / 7 Nights",
    groupSize: "4-8 People",
    price: "₹36,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    highlights: ["Anini", "Dibang Valley", "Mayodia Pass"],
    itinerary: [
      { day: 1, title: "Dibrugarh – Roing", description: "Drive & rest." },
      { day: 2, title: "Mayodia Pass", description: "High mountain crossing." },
      { day: 3, title: "Anini", description: "Scenic valley." },
      { day: 4, title: "Anini", description: "Villages & rivers." },
      { day: 5, title: "Buffer", description: "Weather / leisure." },
      { day: 6, title: "Return", description: "Drive back." },
      { day: 7, title: "Dibrugarh", description: "Return journey." },
      { day: 8, title: "Departure", description: "Drop." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport", "Permits"],
    bestTime: "October - April"
  },

  {
    id: 6,
    title: "Kaziranga Wildlife Safari",
    destination: "Assam",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 People",
    price: "₹15,000",
    priceNote: "per person",
    image: "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2024/04/kaziranga-safari-zones.jpg",
    highlights: ["Rhino Safari", "Elephant Safari"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Check-in & leisure." },
      { day: 2, title: "Safari Day", description: "Elephant + Jeep safari." },
      { day: 3, title: "Eastern Range", description: "Jeep safari & Orchid Park." },
      { day: 4, title: "Departure", description: "Jorhat/Guwahati drop." }
    ],
    includes: ["Resort", "Meals", "Safaris", "Transport"],
    bestTime: "November - April"
  },

  {
    id: 7,
    title: "Meghalaya Waterfalls & Root Bridges",
    destination: "Meghalaya",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹22,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    highlights: ["Cherrapunji", "Nongriat", "Dawki"],
    itinerary: [
      { day: 1, title: "Shillong", description: "Arrival & Police Bazaar." },
      { day: 2, title: "Cherrapunji", description: "Waterfalls & caves." },
      { day: 3, title: "Nongriat", description: "Double decker trek." },
      { day: 4, title: "Dawki", description: "Boat ride & Mawlynnong." },
      { day: 5, title: "Shillong", description: "Sightseeing." },
      { day: 6, title: "Departure", description: "Guwahati drop." }
    ],
    includes: ["Hotel", "Breakfast & Dinner", "Guide", "Transport"],
    bestTime: "October - April"
  },

  {
    id: 8,
    title: "Sikkim Himalayan Spiritual Tour",
    destination: "Sikkim",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹24,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200",
    highlights: ["Gangtok", "Tsomgo", "Nathula"],
    itinerary: [
      { day: 1, title: "Gangtok", description: "Arrival & MG Road." },
      { day: 2, title: "Sightseeing", description: "Monasteries & museums." },
      { day: 3, title: "Tsomgo & Nathula", description: "High altitude lakes." },
      { day: 4, title: "Pelling", description: "Scenic drive." },
      { day: 5, title: "Pelling", description: "Lakes & waterfalls." },
      { day: 6, title: "Departure", description: "Bagdogra drop." }
    ],
    includes: ["Hotel", "Breakfast & Dinner", "Guide", "Transport"],
    bestTime: "March - June, Sept - Dec"
  },

  {
    id: 9,
    title: "Manipur Floating Lake & Culture Tour",
    destination: "Manipur",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    price: "₹17,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200",
    highlights: ["Loktak Lake", "Imphal", "Ukhrul"],
    itinerary: [
      { day: 1, title: "Imphal", description: "Arrival & Kangla Fort." },
      { day: 2, title: "Loktak", description: "Floating lake & Keibul Lamjao." },
      { day: 3, title: "Ukhrul", description: "Hill district." },
      { day: 4, title: "Imphal", description: "War cemeteries & temples." },
      { day: 5, title: "Departure", description: "Airport drop." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport"],
    bestTime: "October - March"
  },

  {
    id: 10,
    title: "Mizoram Blue Mountains Escape",
    destination: "Mizoram",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    price: "₹19,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    highlights: ["Aizawl", "Reiek", "Champhai"],
    itinerary: [
      { day: 1, title: "Aizawl", description: "Arrival & city tour." },
      { day: 2, title: "Reiek", description: "Hilltop village & trek." },
      { day: 3, title: "Champhai", description: "Border town." },
      { day: 4, title: "Aizawl", description: "Culture & shopping." },
      { day: 5, title: "Departure", description: "Airport drop." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport"],
    bestTime: "October - March"
  },

  {
    id: 11,
    title: "Tripura Royal Heritage Tour",
    destination: "Tripura",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 People",
    price: "₹14,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200",
    highlights: ["Ujjayanta Palace", "Neermahal"],
    itinerary: [
      { day: 1, title: "Agartala", description: "Arrival & palace visit." },
      { day: 2, title: "Neermahal", description: "Lake palace excursion." },
      { day: 3, title: "Local Tour", description: "Temples & museums." },
      { day: 4, title: "Departure", description: "Airport drop." }
    ],
    includes: ["Hotel", "Meals", "Guide", "Transport"],
    bestTime: "October - March"
  }
];

// ======================== COMPONENT ========================

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-[45vh] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Tour Packages</h1>
          <p className="text-lg mt-2">From Nagaland to the Heart of Northeast India</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.sort((a, b) => (b.featured === true) - (a.featured === true)).map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-xl">
            <div className="relative h-52">
              <img src={pkg.image} className="w-full h-full object-cover" />
              {pkg.featured && <Badge className="absolute top-3 left-3 bg-primary">⭐ Signature</Badge>}
            </div>
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">View Details</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{pkg.title}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <img src={pkg.image} className="w-full h-64 object-cover rounded-lg" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-secondary/40 p-4 rounded-lg">
                      <div><b>Duration:</b> {pkg.duration}</div>
                      <div><b>Group:</b> {pkg.groupSize}</div>
                      <div><b>Destination:</b> {pkg.destination}</div>
                      <div><b>Price:</b> {pkg.price}</div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Day-wise Itinerary</h3>
                      <div className="space-y-3">
                        {pkg.itinerary.map((day) => (
                          <div key={day.day} className="border-l-4 border-primary pl-4 py-2 bg-secondary/20 rounded-r">
                            <p className="font-semibold">Day {day.day}: {day.title}</p>
                            <p className="text-sm text-muted-foreground">{day.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">Package Includes</h3>
                      <div className="flex flex-wrap gap-2">
                        {pkg.includes.map((item, idx) => (
                          <Badge key={idx} variant="outline">{item}</Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm"><b>Best Time:</b> {pkg.bestTime}</p>

                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Book This Package</h3>
                      <WhatsAppInquiryForm destination={pkg.title} />
                    </div>

                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
