import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "7099623366";

const Hero = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in planning a trip to Nagaland & Northeast India. Please share more details."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (Nagaland) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
          alt="Nagaland Hills and Tribes"
          className="w-full h-full object-cover scale-105"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Nagaland, Northeast India — Land of Festivals & Tribes
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Discover <span className="text-primary">Nagaland</span> & Northeast India
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-white/90">
            Explore untouched hills, tribal culture, festivals, valleys and hidden gems with local travel experts.
          </p>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80 mb-10">
            <span>🌍 Local Experts</span>
            <span>🧭 Custom Trips</span>
            <span>💰 Best Value</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
