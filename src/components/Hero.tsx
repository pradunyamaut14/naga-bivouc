import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle, Compass, Mountain, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "8575185649";

const Hero = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in planning a trip to Nagaland & Northeast India. Please share more details."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const stats = [
    { icon: Mountain, value: "8", label: "States Covered" },
    { icon: Users, value: "500+", label: "Happy Travelers" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
          alt="Nagaland Hills and Tribes"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-primary/20 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60"></div>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-32 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Location Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-primary/20 shadow-lg"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Nagaland, Northeast India — Land of Festivals & Tribes
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground"
          >
            Discover{" "}
            <span className="text-primary relative">
              Nagaland
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <motion.path 
                  d="M2 10C50 2 150 2 198 10" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl lg:text-6xl">
              & Northeast India
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
          >
            Explore untouched hills, tribal culture, festivals, valleys and hidden gems with local travel experts.
          </motion.p>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-10"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-border"
              >
                <stat.icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-body rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Plan Your Trip
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group text-lg px-8 py-6 font-body rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              onClick={() => navigate("/packages")}
            >
              <Compass className="mr-2 h-5 w-5" />
              Explore Packages
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
