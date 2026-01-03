
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const StatesOverview = () => {
  const states = [
    {
      name: "Arunachal Pradesh",
      tagline: "Land of Dawn-Lit Mountains",
      description: "Experience the first sunrise in India and explore pristine valleys, ancient monasteries, and vibrant tribal culture.",
      image: "https://images.unsplash.com/photo-1585136917228-5eadc0ed1fa8?w=800",
      href: "/states/arunachal-pradesh",
      highlights: ["Tawang Monastery", "Ziro Valley", "Namdapha National Park"]
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
      description: "Walk through living root bridges, explore limestone caves, and witness Asia's cleanest village.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      href: "/states/meghalaya",
      highlights: ["Living Root Bridges", "Cherrapunji", "Mawlynnong Village"]
    },
    {
      name: "Sikkim",
      tagline: "Hidden Paradise",
      description: "Marvel at Kanchenjunga, explore Buddhist monasteries, and experience alpine beauty at its finest.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      href: "/states/sikkim",
      highlights: ["Kanchenjunga", "Rumtek Monastery", "Tsomgo Lake"]
    },
    {
      name: "Nagaland",
      tagline: "Land of Festivals",
      description: "Immerse in vibrant tribal culture, witness the Hornbill Festival, and explore traditional villages.",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800",
      href: "/states/nagaland",
      highlights: ["Hornbill Festival", "Dzukou Valley", "Mon District"]
    },
    {
      name: "Manipur",
      tagline: "Jewel of India",
      description: "Discover the birthplace of polo, pristine Loktak Lake, and rich martial arts traditions.",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800",
      href: "/states/manipur",
      highlights: ["Loktak Lake", "Kangla Fort", "Imphal Valley"]
    },
    {
      name: "Mizoram",
      tagline: "Land of Blue Mountains",
      description: "Experience warm hospitality, rolling hills, and unique bamboo culture in India's second least populous state.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      href: "/states/mizoram",
      highlights: ["Blue Mountain", "Champhai", "Reiek Peak"]
    },
    {
      name: "Tripura",
      tagline: "Land of Diversity",
      description: "Explore ancient palaces, natural beauty, and the confluence of tribal and Bengali cultures.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
      href: "/states/tripura",
      highlights: ["Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the <span className="text-primary">Seven Sisters</span> & Beyond
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each state in Northeast India offers unique experiences, from pristine landscapes to rich cultural heritage. 
            Discover what makes each destination special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {states.map((state, index) => (
            <Card key={state.name} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{state.tagline}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{state.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {state.description}
                </p>
                
                <div>
                  <div className="text-xs font-medium text-primary mb-2">Top Highlights:</div>
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
                  <Button variant="outline" size="sm" className="w-full group">
                    Explore {state.name}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/states">
            <Button size="lg" className="group">
              View All States
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatesOverview;
