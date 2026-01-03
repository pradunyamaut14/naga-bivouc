
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mountain, Users, TreePine, Droplets, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919876543210";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sunrise_in_the_Himalayas_%2811096205714%29.jpg", title: "Himalayan Sunrise", location: "Arunachal Pradesh", category: "Mountains" },
    { src: "https://www.trypdeals.com/wp-content/uploads/2024/12/Seven-Sisters-Falls-A-Mesmerizing-Natural-Wonder-in-Meghalaya.jpg", title: "Seven Sisters Falls", location: "Meghalaya", category: "Water" },
    { src: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F02%2F01%2F194824-tea-garden-1.webp?w=1024&auto=format%2Ccompress&fit=max", title: "Tea Gardens", location: "Assam", category: "Nature" },
    { src: "https://www.capertravelindia.com/images/nagaland-1.jpg", title: "Forest Trail", location: "Nagaland", category: "Nature" },
    { src: "https://cdn.britannica.com/53/279553-050-0A596EF9/View-Of-Loktak-Lake-Famous-For-Floating-Islands-Called-Phumdis-Manipur-India.jpg?w=300", title: "River Valley", location: "Manipur", category: "Water" },
    { src: "https://static2.tripoto.com/media/filter/nl/img/245847/TripDocument/1611108770_lachung_city_in_between_the_mountain_ranges.jpg", title: "Mountain Village", location: "Sikkim", category: "Mountains" },
    { src: "https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/kaziranga--guwahati-adventure-escape_1743141936", title: "Wildlife", location: "Kaziranga", category: "Nature" },
    { src: "https://static2.tripoto.com/media/filter/nl/img/245847/TripDocument/1610704888_60011448_712130342535479_8245125409067237376_n.jpg", title: "Snow Peaks", location: "Sikkim", category: "Mountains" },
  ];

  const categories = ["All", "Mountains", "Nature", "Water"];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I saw your gallery and I'm interested in booking a photography tour.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl">Discover Northeast India through our lens</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Capture These <span className="text-primary">Moments</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us for a photography tour and create your own memories
          </p>
          <Button size="lg" onClick={handleWhatsAppClick}>
            <MessageCircle className="mr-2 h-4 w-4" />
            Book a Tour
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 hover:bg-gray-100"
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
