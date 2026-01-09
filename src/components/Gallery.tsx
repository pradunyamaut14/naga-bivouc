import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mountain, Users, TreePine, X } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      icon: Mountain,
      title: "Kanchenjunga Peak",
      description: "Third highest mountain in the world from Sikkim",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      category: "Mountains"
    },
    {
      icon: TreePine,
      title: "Living Root Bridges",
      description: "Ancient bioengineering marvel in Meghalaya",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=800",
      category: "Nature"
    },
    {
      icon: Users,
      title: "Hornbill Festival",
      description: "Festival of festivals celebrating Naga heritage",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800",
      category: "Culture"
    },
    {
      icon: Camera,
      title: "One-Horned Rhino",
      description: "Kaziranga's famous wildlife in Assam",
      image: "https://images.unsplash.com/photo-1574068468068-a809653dad67?w=800",
      category: "Wildlife"
    },
    {
      icon: Mountain,
      title: "Tawang Monastery",
      description: "Largest monastery in India, Arunachal Pradesh",
      image: "https://images.unsplash.com/photo-1585136917228-5eadc0ed1fa8?w=800",
      category: "Mountains"
    },
    {
      icon: TreePine,
      title: "Tea Gardens",
      description: "Rolling hills of Assam tea plantations",
      image: "https://images.unsplash.com/photo-1574068468068-a809653dad67?w=800",
      category: "Nature"
    },
    {
      icon: Users,
      title: "Tribal Dance",
      description: "Traditional performances of Northeast tribes",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800",
      category: "Culture"
    },
    {
      icon: Camera,
      title: "Dzukou Valley",
      description: "Valley of flowers in Nagaland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      category: "Wildlife"
    }
  ];

  const categories = ["All", "Mountains", "Nature", "Culture", "Wildlife"];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-naga-mist/10 relative">
      {/* Tribal Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 naga-border"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experience <span className="text-naga-red">Gallery</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the stunning landscapes, rich culture, and unforgettable moments that await you 
            in Northeast India through our curated collection of experiences.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full font-body ${
                  selectedCategory === category 
                    ? "bg-naga-red hover:bg-naga-red/90 text-white border-naga-gold/30" 
                    : "border-naga-gold/30 hover:bg-naga-red/10 hover:border-naga-red/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-card border-naga-gold/20 hover:border-naga-red/40"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-naga-black/70 via-naga-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <item.icon className="h-6 w-6 mb-2 text-naga-gold" />
                    <h3 className="font-display font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Image Placeholder */}
        <div className="relative rounded-2xl overflow-hidden border border-naga-gold/30">
          <div className="aspect-[21/9] naga-gradient flex items-center justify-center">
            <div className="text-center">
              <Camera className="h-16 w-16 text-naga-red mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Stunning Northeast India Landscapes</h3>
              <p className="font-body text-muted-foreground">Discover the beauty that awaits you</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="group font-body border-naga-gold/30 hover:bg-naga-red/10 hover:border-naga-red/50"
          >
            <Camera className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform text-naga-red" />
            View Full Gallery
          </Button>
        </div>

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-naga-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg border-2 border-naga-gold/30"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-naga-red rounded-full p-2 hover:bg-naga-red/80 transition-colors text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tribal Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 naga-border"></div>
    </section>
  );
};

export default Gallery;
