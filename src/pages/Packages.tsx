import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Mountain,
  Music,
  Search,
  Star,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

/* ================= TYPES ================= */

interface PackageItinerary {
  day: number;
  title: string;
  description: string;
}

interface TourPackage {
  id: number;
  featured?: boolean;
  category: "festival" | "adventure" | "wildlife";
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  image: string;
  highlights: string[];
  itinerary: PackageItinerary[];
  includes: string[];
  excludes: string[];
  bestTime: string;
}

/* ================= DATA ================= */

const packages: TourPackage[] = [
  {
    id: 1,
    featured: true,
    category: "festival",
    title: "Dehing Patkai & Majuli Music Festival",
    destination: "Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 People",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",

    highlights: [
      "Dehing Patkai Festival",
      "Majuli Music Festival",
      "Tribal Culture",
      "Rainforest Trek",
      "Brahmaputra Experience",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Festival",
        description:
          "Arrive Dibrugarh, drive to Lekhapani. Cultural programs and tribal food.",
      },
      {
        day: 2,
        title: "Forest Adventure",
        description:
          "Rainforest trek, tea gardens, musical night.",
      },
      {
        day: 3,
        title: "Majuli Transfer",
        description:
          "Travel to Majuli via Jorhat and ferry.",
      },
      {
        day: 4,
        title: "Music Festival",
        description:
          "Full-day festival performances and workshops.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Return via Jorhat.",
      },
    ],

    includes: [
      "Festival passes",
      "Accommodation",
      "Internal transport",
      "Guide",
      "Breakfast & dinner",
    ],

    excludes: [
      "Flights",
      "Lunch",
      "Personal expenses",
      "Insurance",
    ],

    bestTime: "Festival Season",
  },

  /* -------------------------------- */
  /* ADD YOUR OTHER PACKAGES 2–39 HERE */
  /* SAME FORMAT AS ABOVE             */
  /* -------------------------------- */
];

/* ================= PAGE ================= */

const Packages = () => {
  const [filter, setFilter] = useState<
    "all" | "festival" | "adventure" | "wildlife"
  >("all");

  const [search, setSearch] = useState("");

  const filteredPackages = useMemo(() => {
    return packages
      .filter(
        (pkg) =>
          (filter === "all" || pkg.category === filter) &&
          (pkg.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            pkg.destination
              .toLowerCase()
              .includes(search.toLowerCase()))
      )
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">
            Discover Northeast India
          </h1>

          <p className="text-xl">
            Festival • Adventure • Wildlife Tours
          </p>
        </motion.div>
      </section>

      {/* Controls */}
      <section className="container mx-auto px-4 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

          {/* Filters */}
          <div className="flex gap-3">

            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>

            <Button
              variant={filter === "festival" ? "default" : "outline"}
              onClick={() => setFilter("festival")}
            >
              <Music className="h-4 w-4 mr-1" />
              Festival
            </Button>

            <Button
              variant={filter === "adventure" ? "default" : "outline"}
              onClick={() => setFilter("adventure")}
            >
              <Mountain className="h-4 w-4 mr-1" />
              Adventure
            </Button>

            <Button
              variant={filter === "wildlife" ? "default" : "outline"}
              onClick={() => setFilter("wildlife")}
            >
              🦋 Wildlife
            </Button>

          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />

          </div>

        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredPackages.map((pkg, i) => (

            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >

              <PackageCard pkg={pkg} />

            </motion.div>

          ))}

        </div>

      </section>

      <Footer />
    </div>
  );
};

/* ================= CARD ================= */

const PackageCard = ({ pkg }: { pkg: TourPackage }) => {
  return (
    <Card className="rounded-2xl overflow-hidden flex flex-col">

      <div className="h-52 overflow-hidden">
        <img
          src={pkg.image}
          className="w-full h-full object-cover hover:scale-110 transition"
        />
      </div>

      <CardHeader>
        <CardTitle>{pkg.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1">

        <div className="text-sm text-muted-foreground space-y-1 mb-4">

          <p>
            <MapPin className="inline h-4 w-4" /> {pkg.destination}
          </p>

          <p>
            <Clock className="inline h-4 w-4" /> {pkg.duration}
          </p>

          <p>
            <Users className="inline h-4 w-4" /> {pkg.groupSize}
          </p>

        </div>

        <Dialog>

          <DialogTrigger asChild>
            <Button className="w-full">
              View Details
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">

            <DialogHeader>
              <DialogTitle className="text-2xl">
                {pkg.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">

              <img
                src={pkg.image}
                className="w-full h-56 object-cover rounded-xl"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <Info label="Duration" value={pkg.duration} />
                <Info label="Group" value={pkg.groupSize} />
                <Info label="Place" value={pkg.destination} />
                <Info label="Best Time" value={pkg.bestTime} />

              </div>

              <Section title="Highlights">
                {pkg.highlights.map((h, i) => (
                  <Badge key={i}>{h}</Badge>
                ))}
              </Section>

              <Section title="Itinerary">

                {pkg.itinerary.map((d) => (
                  <div key={d.day}>
                    <strong>Day {d.day}:</strong> {d.title}
                    <p className="text-sm">{d.description}</p>
                  </div>
                ))}

              </Section>

              <Section title="Booking">

                <WhatsAppInquiryForm
                  destination={pkg.title}
                />

              </Section>

            </div>

          </DialogContent>

        </Dialog>

      </CardContent>

    </Card>
  );
};

/* ================= HELPERS ================= */

const Info = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <p className="font-semibold">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">
      {title}
    </h3>
    {children}
  </div>
);

export default Packages;
