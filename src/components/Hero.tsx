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
        {/* Naga-inspired Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-naga-black/70 via-naga-forest/30 to-naga-black/80"></div>
        {/* Mist Effect */}
        <div className="absolute inset-0 naga-mist"></div>
      </div>

      {/* Tribal Pattern Border Top */}
      <div className="absolute top-0 left-0 right-0 h-2 naga-border"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-naga-black/40 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-naga-gold/30">
            <MapPin className="h-4 w-4 text-naga-gold" />
            <span className="text-sm font-medium text-naga-mist">
              Nagaland, Northeast India — Land of Festivals & Tribes
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Discover <span className="text-naga-red">Nagaland</span> & Northeast India
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl mb-4 max-w-2xl mx-auto text-naga-mist/90">
            Explore untouched hills, tribal culture, festivals, valleys and hidden gems with local travel experts.
          </p>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-6 text-sm text-naga-gold/80 mb-10 font-body">
            <span>🌍 Local Experts</span>
            <span>🧭 Custom Trips</span>
            <span>💰 Best Value</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-naga-red hover:bg-naga-red/90 text-white text-lg px-8 py-6 font-body border-2 border-naga-gold/20"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              className="group bg-naga-forest hover:bg-naga-forest/90 text-white text-lg px-8 py-6 font-body border-2 border-naga-gold/20"
              onClick={() => navigate("/packages")}
            >
              <Compass className="mr-2 h-5 w-5" />
              Explore Packages
            </Button>
          </div>

        </div>
      </div>

      {/* Tribal Pattern Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 naga-border"></div>
    </section>
  );
};

export default Hero;
