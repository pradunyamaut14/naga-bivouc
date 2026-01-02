
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Majestic mountains of Northeast India",
      caption: "Arunachal Pradesh",
      description: "Land of Dawn-Lit Mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Serene rivers and valleys",
      caption: "Meghalaya",
      description: "Abode of Clouds"
    },
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      alt: "Dense forests and wildlife",
      caption: "Assam",
      description: "Gateway to Northeast"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      alt: "Highland landscapes",
      caption: "Sikkim",
      description: "Hidden Paradise"
    },
    {
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      alt: "Waterfalls and natural beauty",
      caption: "Mizoram",
      description: "Land of Blue Mountains"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in planning a trip to Northeast India. Please share more details.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* State Caption */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">
              {heroImages[currentSlide].caption} - {heroImages[currentSlide].description}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover <span className="text-primary">Northeast India</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-12 animate-fade-in [animation-delay:0.2s] max-w-2xl mx-auto">
            Experience the untouched beauty, rich culture, and thrilling adventures across the Seven Sister States
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in [animation-delay:0.4s]">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Plan Your Adventure
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
