import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const StatesOverview = () => {
  const states = [
    {
      name: "Nagaland",
      tagline: "Land of Festivals & Tribes",
      description: "Immerse in vibrant tribal culture, witness the Hornbill Festival, trek Dzükou Valley and explore traditional villages.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      href: "/states/nagaland",
      highlights: ["Hornbill Festival", "Dzükou Valley", "Mon District"],
      featured: true
    },
    {
      name: "Arunachal Pradesh",
      tagline: "Land of Dawn-Lit Mountains",
      description: "Experience the first sunrise in India, explore pristine valleys, ancient monasteries, and dramatic Himalayan passes.",
      image: "https://images.unsplash.com/photo-1585136917228-5eadc0ed1fa8?w=800",
      href: "/states/arunachal-pradesh",
      highlights: ["Tawang Monastery", "Ziro Valley", "Sela Pass"]
    },
    {
      name: "Assam",
      tagline: "Gateway to Northeast",
      description: "Discover tea gardens, one-horned rhinos, and the mighty Brahmaputra river in this culturally rich state.",
      image: "https://images.unsplash.com/photo-1574068468068-a809653dad67?w=800",
      href: "/states/assam",
      highlights: ["Kaziranga National Park", "Tea Gardens", "Majuli Island"]
    },
    {
      name: "Meghalaya",
      tagline: "Abode of Clouds",
      description: "Walk through living root bridges, explore limestone caves, waterfalls, and Asia’s cleanest villages.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      href: "/states/meghalaya",
      highlights: ["Living Root Bridges", "Cherrapunji", "Mawlynnong"]
    },
    {
      name: "Sikkim",
      tagline: "Himalayan Paradise",
      description: "Marvel at Kanchenjunga, explore Buddhist monasteries, and experience pristine alpine landscapes.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      href: "/states/sikkim",
      highlights: ["Kanchenjunga", "Rumtek Monastery", "Tsomgo Lake"]
    },
    {
      name: "Manipur",
      tagline: "Jewel of India",
      description: "Discover Loktak Lake, ancient forts, and the birthplace of polo with rich martial traditions.",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800",
      href: "/states/manipur",
      highlights: ["Loktak Lake", "Kangla Fort", "Imphal Valley"]
    },
    {
      name: "Mizoram",
      tagline: "Land of Blue Mountains",
      description: "Experience rolling hills, bamboo culture, and some of the cleanest and most scenic towns in India.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      href: "/states/mizoram",
      highlights: ["Reiek Peak", "Blue Mountain", "Champhai"]
    },
    {
      name: "Tripura",
      tagline: "Land of Royal Heritage",
      description: "Explore ancient palaces, lakeside monuments, and the blend of tribal and Bengali cultures.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
      href: "/states/tripura",
      highlights: ["Ujjayanta Palace", "Neermahal", "Sepahijala"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore <span className="text-primary">Nagaland</span> & Northeast India
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From tribal heartlands and hidden valleys to Himalayan monasteries and rainforest trails — discover the most beautiful destinations of Northeast India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {states.map((state) => (
            <Card
              key={state.name}
              className="group relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Featured Badge */}
              {state.featured && (
                <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Star className="h-3 w-3" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-1 text-xs opacity-90">
                    <MapPin className="h-3 w-3" />
                    <span>{state.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{state.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {state.description}
                </p>

                <div>
                  <div className="text-xs font-medium text-primary mb-2">Top Highlights</div>
                  <div className="flex flex-wrap gap-1">
                    {state.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-secondary px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={state.href}>
                  <Button size="sm" className="w-full group bg-primary hover:bg-primary/90">
                    Explore {state.name}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/states">
            <Button size="lg" className="group bg-primary hover:bg-primary/90">
              View All Destinations
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatesOverview;
