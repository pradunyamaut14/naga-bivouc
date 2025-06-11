
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-primary/10">
        <Mountain className="h-32 w-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10">
        <Mountain className="h-24 w-24" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-primary">Naga</span>{" "}
            <span className="text-foreground">Bivouac</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            Experience the majestic beauty of Nagaland through authentic outdoor adventures
          </p>
          
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-8 animate-fade-in [animation-delay:0.4s]">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Kohima, Nagaland</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
            <Button size="lg" className="group">
              Explore Adventures
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in [animation-delay:0.8s]">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Adventures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
