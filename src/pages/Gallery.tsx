
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mountain, Users, TreePine, Droplets, Music, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "@/components/TripEnquiryForm";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      icon: Mountain,
      title: "Mountain Landscapes",
      description: "Majestic peaks and scenic valleys",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      count: "150+ Photos",
      category: "Mountains"
    },
    {
      icon: Users,
      title: "Cultural Heritage",
      description: "Traditional festivals and customs",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      count: "200+ Photos",
      category: "Culture"
    },
    {
      icon: TreePine,
      title: "Wildlife & Nature",
      description: "Flora, fauna and natural wonders",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      count: "100+ Photos",
      category: "Nature"
    },
    {
      icon: Droplets,
      title: "Waterfalls & Rivers",
      description: "Cascading falls and pristine waters",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      count: "80+ Photos",
      category: "Water"
    },
    {
      icon: Music,
      title: "Festivals & Events",
      description: "Vibrant celebrations and performances",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      count: "120+ Photos",
      category: "Culture"
    },
    {
      icon: Camera,
      title: "Adventure Activities",
      description: "Trekking, camping and outdoor sports",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      count: "90+ Photos",
      category: "Adventure"
    }
  ];

  const featuredImages = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Himalayan Sunrise",
      location: "Arunachal Pradesh",
      category: "Mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      title: "Seven Sisters Falls",
      location: "Meghalaya",
      category: "Water"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      title: "One-Horned Rhino",
      location: "Assam",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      title: "Tea Garden Vista",
      location: "Assam",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      title: "Loktak Lake",
      location: "Manipur",
      category: "Water"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      title: "Mountain Village",
      location: "Sikkim",
      category: "Mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Wildlife Safari",
      location: "Kaziranga",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Cultural Festival",
      location: "Nagaland",
      category: "Culture"
    }
  ];

  const categories = ["All", "Mountains", "Culture", "Nature", "Water", "Adventure"];

  const filteredCategories = selectedCategory === "All" 
    ? galleryCategories 
    : galleryCategories.filter(item => item.category === selectedCategory);

  const filteredImages = selectedCategory === "All" 
    ? featuredImages 
    : featuredImages.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Northeast India Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Northeast India <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the stunning beauty and rich culture through our curated photo collection
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Explore by <span className="text-primary">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Browse our extensive collection organized by themes and experiences
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(category.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <category.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{category.count}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Featured <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and breathtaking captures from across Northeast India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image.src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Own <span className="text-primary">Memories</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey to capture the beauty and culture of Northeast India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="group">
                  <Camera className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Book Photography Tour
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Book a Photography Tour</DialogTitle>
                </DialogHeader>
                <TripEnquiryForm />
              </DialogContent>
            </Dialog>
            <Link to="/packages">
              <Button size="lg" variant="outline">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  );
};

export default GalleryPage;
