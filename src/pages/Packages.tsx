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

  // ⭐⭐⭐⭐⭐ =================== NAGALAND (PRIORITY) =================== ⭐⭐⭐⭐⭐

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
    highlights: ["Khonoma Green Village", "Angami Culture", "Kohima War Cemetery", "Dzulekie Forest", "Traditional Food"],
    itinerary: [
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Pickup from Dimapur airport/railway station. Drive to Kohima. Visit Kohima War Cemetery, local market & State Museum. Overnight in Kohima." },
      { day: 2, title: "Kohima – Khonoma Heritage Village", description: "After breakfast drive to Khonoma (Asia’s first green village). Guided village walk covering morungs, forts, terraced fields and traditional Angami houses. Interaction with villagers. Traditional Naga dinner. Overnight in Khonoma homestay." },
      { day: 3, title: "Khonoma – Dzulekie Nature Trails", description: "Morning forest walk & birding near Dzulekie. Explore forest trails, viewpoints and streams. Afternoon free for photography and village life experience." },
      { day: 4, title: "Khonoma – Dimapur Departure", description: "After breakfast drive back to Dimapur for onward journey." }
    ],
    includes: ["Hotel + Heritage Homestay", "All Meals", "Local Guide", "All Transfers", "Village Entry Fees"],
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
    highlights: ["Hornbill Festival", "Kisama Heritage Village", "Kohima", "Khonoma", "Local Food"],
    itinerary: [
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Pickup & drive to Kohima. Evening local market walk." },
      { day: 2, title: "Hornbill Festival", description: "Full day at Kisama Heritage Village enjoying tribal dances, crafts, food stalls and cultural shows." },
      { day: 3, title: "Kohima Sightseeing", description: "Visit Kohima War Cemetery, State Museum & Cathedral Church." },
      { day: 4, title: "Khonoma Village", description: "Visit Khonoma heritage village and interact with locals." },
      { day: 5, title: "Departure", description: "Drive back to Dimapur." }
    ],
    includes: ["Hotel", "All Meals", "Transport", "Guide", "Festival Pass"],
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
    highlights: ["Longwa Village", "Konyak Tribe", "Myanmar Border", "Traditional Morungs"],
    itinerary: [
      { day: 1, title: "Dimapur – Mon", description: "Long scenic drive to Mon. Check-in & rest." },
      { day: 2, title: "Longwa Village", description: "Visit Indo-Myanmar border village. Explore chief’s house & village life." },
      { day: 3, title: "Konyak Villages", description: "Visit Shangnyu & nearby villages. Meet tattooed elders." },
      { day: 4, title: "Cultural Exploration", description: "Village walks, morungs, traditional houses." },
      { day: 5, title: "Return Journey", description: "Drive back towards Dimapur." },
      { day: 6, title: "Departure", description: "Drop at Dimapur." }
    ],
    includes: ["Hotel", "All Meals", "Transport", "Guide", "Permits"],
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
    highlights: ["Kohima", "Khonoma", "Mokokchung", "Mon", "Longwa", "Intanki"],
    itinerary: [
      { day: 1, title: "Arrival Dimapur – Kohima", description: "Sightseeing." },
      { day: 2, title: "Khonoma", description: "Village tour." },
      { day: 3, title: "Mokokchung", description: "Ao heartland." },
      { day: 4, title: "Ungma Village", description: "Oldest Ao village." },
      { day: 5, title: "Mon", description: "Konyak region." },
      { day: 6, title: "Longwa", description: "Border village." },
      { day: 7, title: "Return Journey", description: "Travel day." },
      { day: 8, title: "Intanki National Park", description: "Wildlife & forest." },
      { day: 9, title: "Departure", description: "Dimapur drop." }
    ],
    includes: ["Hotel", "All Meals", "Transport", "Guide", "Permits"],
    bestTime: "October - April"
  },

  // =================== OTHER NORTHEAST ===================

  {
    id: 4,
    title: "Tawang & High Passes of Arunachal",
    destination: "Arunachal Pradesh",
    duration: "7 Days / 6 Nights",
    groupSize: "4-10 People",
    price: "₹32,000",
    priceNote: "per person",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tawang_Gate.jpg/1280px-Tawang_Gate.jpg",
    highlights: ["Tawang Monastery", "Sela Pass", "Bumla Pass"],
    itinerary: [
      { day: 1, title: "Guwahati – Bhalukpong", description: "Drive." },
      { day: 2, title: "Dirang", description: "Hot springs & valley." },
      { day: 3, title: "Tawang", description: "Via Sela Pass." },
      { day: 4, title: "Tawang Sightseeing", description: "Monastery & market." },
      { day: 5, title: "Bumla Pass", description: "Border excursion." },
      { day: 6, title: "Bomdila", description: "Return journey." },
      { day: 7, title: "Departure", description: "Guwahati." }
    ],
    includes: ["Hotel", "All Meals", "Transport", "Guide", "Permits"],
    bestTime: "March - June, Sept - Nov"
  },

  {
    id: 5,
    title: "Kaziranga Wildlife Safari",
    destination: "Assam",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 People",
    price: "₹15,000",
    priceNote: "per person",
    image: "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2024/04/kaziranga-safari-zones.jpg",
    highlights: ["One-horned Rhino", "Elephant Safari", "Birding"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Check-in." },
      { day: 2, title: "Safari", description: "Elephant + Jeep safari." },
      { day: 3, title: "Safari", description: "Eastern range safari." },
      { day: 4, title: "Departure", description: "Jorhat/Guwahati." }
    ],
    includes: ["Resort", "All Meals", "Safaris", "Transport"],
    bestTime: "November - April"
  }

];

// ======================== COMPONENT ========================

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Tour Packages</h1>
          <p className="text-lg mt-2">From Nagaland to the Heart of Northeast India</p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages
          .sort((a, b) => (b.featured === true) - (a.featured === true))
          .map((pkg) => (
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
                    <Button className="w-full" onClick={() => setSelectedPackage(pkg)}>View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{pkg.title}</DialogTitle>
                    </DialogHeader>
                    <WhatsAppInquiryForm destination={pkg.title} />
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
