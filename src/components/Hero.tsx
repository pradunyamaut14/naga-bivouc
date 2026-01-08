import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "7099623366";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920",
      alt: "Nagaland Hills",
      caption: "Nagaland",
      description: "Land of Festivals & Tribes"
    },
    {
      src: "https://images.unsplash.com/photo-1585136917228-5eadc0ed1fa8?w=1920",
      alt: "Tawang Monastery in Arunachal Pradesh",
      caption: "Arunachal Pradesh",
      description: "Land of Dawn-Lit Mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=1920",
      alt: "Living Root Bridge in Meghalaya",
      caption: "Meghalaya",
      description: "Abode of Clouds"
    },
    {
      src: "https://images.unsplash.com/photo-1574068468068-a809653dad67?w=1920",
      alt: "Tea gardens of Assam",
      caption: "Assam",
      description: "Gateway to Northeast"
    },
    {
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920",
      alt: "Kanchenjunga view from Sikkim",
      caption: "Sikkim",
      description: "Hidden Himalayan Paradise"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in planning a trip to Northeast India. Please share more details."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">

          {/* Floating State Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20 animate-fade-in">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              {heroImages[currentSlide].caption} — {heroImages[currentSlide].description}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Explore <span className="text-primary">Northeast India</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-4 animate-fade-in [animation-delay:0.2s] max-w-2xl mx-auto text-white/90">
            Discover Nagaland & the Seven Sisters with local experts. Culture, mountains, tribes & untouched nature.
          </p>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80 mb-10 animate-fade-in [animation-delay:0.3s]">
            <span>🌍 Local Experts</span>
            <span>🧭 Custom Trips</span>
            <span>💰 Best Value</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/10"
              onClick={() => navigate("/packages")}
            >
              <Compass className="mr-2 h-5 w-5" />
              Explore Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
