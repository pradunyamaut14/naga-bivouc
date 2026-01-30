import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Clock, Mountain, Music, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { packages, TourPackage } from "@/data/packages";
import { motion } from "framer-motion";

const Packages = () => {
  const [filter, setFilter] = useState<"all" | "festival" | "adventure">("all");
  const [search, setSearch] = useState("");

  const filteredPackages = useMemo(() => {
    return packages
      .filter(
        (pkg) =>
          (filter === "all" || pkg.category === filter) &&
          (pkg.title.toLowerCase().includes(search.toLowerCase()) ||
            pkg.destination.toLowerCase().includes(search.toLowerCase()))
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
          alt="Northeast"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Northeast India
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Handcrafted Festival & Adventure Experiences
          </p>
        </motion.div>
      </section>

      {/* Controls */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "festival" ? "default" : "outline"}
              onClick={() => setFilter("festival")}
              className="gap-2"
            >
              <Music className="h-4 w-4" /> Festival
            </Button>
            <Button
              variant={filter === "adventure" ? "default" : "outline"}
              onClick={() => setFilter("adventure")}
              className="gap-2"
            >
              <Mountain className="h-4 w-4" /> Adventure
            </Button>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search destination..."
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
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            No packages found.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
};

/* Card Component */
const PackageCard = ({ pkg }: { pkg: TourPackage }) => {
  return (
    <Card className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          {pkg.featured && (
            <Badge className="bg-primary flex gap-1">
              <Star className="h-3 w-3" /> Signature
            </Badge>
          )}

          <Badge variant="secondary" className="capitalize">
            {pkg.category === "festival" ? (
              <Music className="h-3 w-3 mr-1" />
            ) : (
              <Mountain className="h-3 w-3 mr-1" />
            )}
            {pkg.category}
          </Badge>
        </div>
      </div>

      {/* Header */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">
          {pkg.title}
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="flex flex-col flex-1">
        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {pkg.destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {pkg.groupSize}
          </span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {h}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full rounded-xl">View Details</Button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {pkg.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Banner */}
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover rounded-xl"
                />

                {/* Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-secondary/40 p-4 rounded-xl">
                  <InfoItem icon={<Clock />} label="Duration" value={pkg.duration} />
                  <InfoItem icon={<Users />} label="Group" value={pkg.groupSize} />
                  <InfoItem icon={<MapPin />} label="Place" value={pkg.destination} />
                  <InfoItem icon={<Calendar />} label="Best Time" value={pkg.bestTime} />
                </div>

                {/* Highlights */}
                <Section title="Highlights">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((h, i) => (
                      <Badge key={i} variant="secondary">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </Section>

                {/* Itinerary */}
                <Section title="Itinerary">
                  <div className="space-y-3">
                    {pkg.itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="border-l-4 border-primary pl-4 py-2 bg-secondary/20 rounded-r"
                      >
                        <p className="font-semibold text-primary">
                          Day {day.day}: {day.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Include/Exclude */}
                <div className="grid md:grid-cols-2 gap-4">
                  <ListBox title="Inclusions" color="green" items={pkg.includes} />
                  <ListBox title="Exclusions" color="red" items={pkg.excludes} />
                </div>

                {/* Booking */}
                <div className="bg-secondary/30 p-6 rounded-xl">
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

/* Helpers */
const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-2">
    <span className="text-primary">{icon}</span>
    <div>
      <p className="font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  </div>
);

const Section = ({ title, children }: any) => (
  <div>
    <h3 className="font-semibold text-lg mb-3">{title}</h3>
    {children}
  </div>
);

const ListBox = ({ title, items, color }: any) => (
  <div
    className={`bg-${color}-500/10 border border-${color}-500/20 rounded-xl p-4`}
  >
    <h3 className={`font-semibold mb-2 text-${color}-600`}>
      {title}
    </h3>
    <ul className="text-sm space-y-1">
      {items.map((i: string, idx: number) => (
        <li key={idx} className="text-muted-foreground">
          • {i}
        </li>
      ))}
    </ul>
  </div>
);

export default Packages;
