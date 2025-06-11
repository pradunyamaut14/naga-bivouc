
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mountain, Users, TreePine } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      icon: Mountain,
      title: "Mountain Peaks",
      description: "Breathtaking views from Nagaland's highest peaks"
    },
    {
      icon: TreePine,
      title: "Forest Trails",
      description: "Lush green forests and pristine wilderness"
    },
    {
      icon: Users,
      title: "Cultural Heritage",
      description: "Rich traditions and vibrant festivals"
    },
    {
      icon: Camera,
      title: "Wildlife",
      description: "Diverse flora and fauna in natural habitats"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the stunning landscapes, rich culture, and unforgettable moments that await you 
            in Nagaland through our curated collection of experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <item.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
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
              <h3 className="text-2xl font-bold mb-2">Stunning Nagaland Landscapes</h3>
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
      </div>
    </section>
  );
};

export default Gallery;
