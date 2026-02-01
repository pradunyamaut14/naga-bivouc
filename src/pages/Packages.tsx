import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Mountain,
  Music,
  Search,
  Star,
  ChevronRight,
  Sparkles,
  Check,
  X,
  Bug,
} from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "festival" | "adventure" | "butterfly";

const categoryConfig = {
  festival: {
    icon: Music,
    label: "Festival Tours",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    bgGradient: "from-amber-500/20 to-orange-500/20",
  },
  adventure: {
    icon: Mountain,
    label: "Adventure Tours",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  butterfly: {
    icon: Bug,
    label: "Butterfly Watching",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
};

const Packages = () => {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState<string>("all");

  const allStates = useMemo(() => {
    const states = new Set<string>();
    packages.forEach((pkg) => pkg.states.forEach((s) => states.add(s)));
    return Array.from(states).sort();
  }, []);

  const filteredPackages = useMemo(() => {
    return packages
      .filter(
        (pkg) =>
          (filter === "all" || pkg.category === filter) &&
          (stateFilter === "all" || pkg.states.includes(stateFilter)) &&
          (pkg.title.toLowerCase().includes(search.toLowerCase()) ||
            pkg.states.some((s) =>
              s.toLowerCase().includes(search.toLowerCase())
            ) ||
            pkg.highlights.some((h) =>
              h.toLowerCase().includes(search.toLowerCase())
            ))
      )
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter, search, stateFilter]);

  const categoryCounts = useMemo(() => {
    return {
      all: packages.length,
      festival: packages.filter((p) => p.category === "festival").length,
      adventure: packages.filter((p) => p.category === "adventure").length,
      butterfly: packages.filter((p) => p.category === "butterfly").length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
            alt="Northeast India Landscapes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4 max-w-4xl mx-auto"
        >
          <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-1" />
            Curated Experiences
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Discover Northeast India
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Handcrafted festival, adventure & butterfly watching experiences
            across the Seven Sisters and Sikkim
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                {packages.length}+
              </p>
              <p className="text-sm text-white/60">Tour Packages</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-sm text-white/60">States Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-white/60">Experience Types</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-14 sm:top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className="gap-2"
              >
                All Tours
                <Badge
                  variant="secondary"
                  className="ml-1 h-5 px-1.5 text-xs"
                >
                  {categoryCounts.all}
                </Badge>
              </Button>
              {(
                Object.entries(categoryConfig) as [
                  keyof typeof categoryConfig,
                  (typeof categoryConfig)[keyof typeof categoryConfig]
                ][]
              ).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <Button
                    key={key}
                    variant={filter === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(key)}
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {config.label}
                    <Badge
                      variant="secondary"
                      className="ml-1 h-5 px-1.5 text-xs"
                    >
                      {categoryCounts[key]}
                    </Badge>
                  </Button>
                );
              })}
            </div>

            {/* Search & State Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="all">All States</option>
                {allStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search packages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 h-9"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {filteredPackages.length > 0 ? (
            <motion.div
              key={filter + stateFilter + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <PackageCard pkg={pkg} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No packages found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setFilter("all");
                  setStateFilter("all");
                  setSearch("");
                }}
              >
                Clear all filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
};

/* Package Card Component */
const PackageCard = ({ pkg }: { pkg: TourPackage }) => {
  const config = categoryConfig[pkg.category];
  const CategoryIcon = config.icon;

  return (
    <Dialog>
      <Card className="group h-full overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col bg-card">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {pkg.featured && (
              <Badge className="bg-primary text-primary-foreground gap-1 shadow-lg">
                <Star className="h-3 w-3 fill-current" /> Signature
              </Badge>
            )}
            <Badge className={cn("border", config.color)}>
              <CategoryIcon className="h-3 w-3 mr-1" />
              {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
            </Badge>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3">
            <Badge
              variant="secondary"
              className="bg-black/50 text-white border-0 backdrop-blur-sm"
            >
              <Clock className="h-3 w-3 mr-1" />
              {pkg.duration}
            </Badge>
          </div>

          {/* States */}
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <MapPin className="h-3.5 w-3.5" />
              <span className="line-clamp-1">{pkg.states.join(" • ")}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="flex flex-col flex-1 p-5">
          <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {pkg.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {pkg.subtitle}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {pkg.highlights.slice(0, 3).map((h, i) => (
              <Badge key={i} variant="outline" className="text-xs font-normal">
                {h}
              </Badge>
            ))}
            {pkg.highlights.length > 3 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{pkg.highlights.length - 3} more
              </Badge>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 mt-auto">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {pkg.groupSize}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {pkg.bestTime}
            </span>
          </div>

          {/* CTA */}
          <DialogTrigger asChild>
            <Button className="w-full rounded-xl gap-2 group/btn">
              View Details
              <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>

      {/* Dialog Content */}
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <PackageDetails pkg={pkg} />
      </DialogContent>
    </Dialog>
  );
};

/* Package Details Component */
const PackageDetails = ({ pkg }: { pkg: TourPackage }) => {
  const config = categoryConfig[pkg.category];
  const CategoryIcon = config.icon;

  return (
    <div className="relative">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {pkg.featured && (
              <Badge className="bg-primary text-primary-foreground gap-1">
                <Star className="h-3 w-3 fill-current" /> Signature Tour
              </Badge>
            )}
            <Badge className={cn("border", config.color)}>
              <CategoryIcon className="h-3 w-3 mr-1" />
              {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
            </Badge>
            {pkg.difficulty && (
              <Badge variant="outline">{pkg.difficulty}</Badge>
            )}
          </div>

          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
              {pkg.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground mt-1">{pkg.subtitle}</p>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <InfoCard
            icon={<Clock className="h-5 w-5" />}
            label="Duration"
            value={pkg.duration}
          />
          <InfoCard
            icon={<Users className="h-5 w-5" />}
            label="Group Size"
            value={pkg.groupSize}
          />
          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            label="States"
            value={pkg.states.join(", ")}
          />
          <InfoCard
            icon={<Calendar className="h-5 w-5" />}
            label="Best Time"
            value={pkg.bestTime}
          />
        </div>

        {/* Highlights */}
        <Section title="Tour Highlights">
          <div className="grid sm:grid-cols-2 gap-2">
            {pkg.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-2 rounded-lg bg-secondary/30"
              >
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{h}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Itinerary */}
        <Section title="Day-by-Day Itinerary">
          <div className="space-y-4">
            {pkg.itinerary.map((day) => (
              <div
                key={day.day}
                className="relative pl-8 pb-4 border-l-2 border-primary/30 last:border-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="bg-secondary/30 rounded-xl p-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Day {day.day}: {day.title}
                  </h4>

                  <div className="space-y-2">
                    {day.activities.map((activity, i) => (
                      <div key={i} className="text-sm">
                        <span className="font-medium text-muted-foreground">
                          {activity.time}:
                        </span>{" "}
                        <span className="text-foreground/80">
                          {activity.description}
                        </span>
                      </div>
                    ))}
                  </div>

                  {day.overnight && (
                    <div className="mt-3 pt-2 border-t border-border/50">
                      <span className="text-xs font-medium text-muted-foreground">
                        Overnight:{" "}
                      </span>
                      <span className="text-xs text-foreground">
                        {day.overnight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
            <h3 className="font-semibold mb-3 text-emerald-600 flex items-center gap-2">
              <Check className="h-4 w-4" /> Inclusions
            </h3>
            <ul className="space-y-2">
              {pkg.inclusions.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
            <h3 className="font-semibold mb-3 text-red-600 flex items-center gap-2">
              <X className="h-4 w-4" /> Exclusions
            </h3>
            <ul className="space-y-2">
              {pkg.exclusions.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <X className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Enquire About This Tour
          </h3>
          <WhatsAppInquiryForm destination={pkg.title} />
        </div>
      </div>
    </div>
  );
};

/* Helper Components */
const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
    <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
    <div>
      <p className="font-semibold text-sm line-clamp-1">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
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
    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
      {title}
    </h3>
    {children}
  </div>
);

export default Packages;
