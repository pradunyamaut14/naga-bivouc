
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
      title: "Mountain Peaks",
      description: "Breathtaking views from Nagaland's highest peaks",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Mountains"
    },
    {
      icon: TreePine,
      title: "Forest Trails",
      description: "Lush green forests and pristine wilderness",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      category: "Nature"
    },
    {
      icon: Users,
      title: "Cultural Heritage",
      description: "Rich traditions and vibrant festivals",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Culture"
    },
    {
      icon: Camera,
      title: "Wildlife",
      description: "Diverse flora and fauna in natural habitats",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      category: "Wildlife"
    },
    {
      icon: Mountain,
      title: "Himalayan Views",
      description: "Spectacular mountain ranges and valleys",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      category: "Mountains"
    },
    {
      icon: TreePine,
      title: "Tea Gardens",
      description: "Rolling hills covered in tea plantations",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      category: "Nature"
    },
    {
      icon: Users,
      title: "Traditional Dance",
      description: "Colorful cultural performances",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Culture"
    },
    {
      icon: Camera,
      title: "Bird Watching",
      description: "Exotic birds in their natural habitat",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Wildlife"
    }
  ];

  const categories = ["All", "Mountains", "Nature", "Culture", "Wildlife"];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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
                className="rounded-full"
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
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <item.icon className="h-6 w-6 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Image Placeholder */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-[21/9] bg-gradient-to-r from-primary/30 via-background to-secondary/30 flex items-center justify-center">
            <div className="text-center">
              <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Stunning Northeast India Landscapes</h3>
              <p className="text-muted-foreground">Discover the beauty that awaits you</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            <Camera className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            View Full Gallery
          </Button>
        </div>

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
