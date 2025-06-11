
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TripEnquiryForm from "./TripEnquiryForm";

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
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
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* State Caption */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-fade-in">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">
              {heroImages[currentSlide].caption} - {heroImages[currentSlide].description}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Discover</span>{" "}
            <span className="text-primary">Northeast India</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 animate-fade-in [animation-delay:0.2s]">
            Experience the untouched beauty, rich culture, and thrilling adventures across the Seven Sister States
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  Plan Your Trip
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Plan Your Northeast India Adventure</DialogTitle>
                </DialogHeader>
                <TripEnquiryForm />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Explore States
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in [animation-delay:0.6s]">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-sm text-white/80">States to Explore</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-white/80">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
