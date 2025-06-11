
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tent, Camera, MapPin, Users, TreePine, Compass } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Tent,
      title: "Camping Expeditions",
      description: "Multi-day camping adventures in pristine wilderness areas with expert guidance and quality equipment.",
      features: ["Professional camping gear", "Experienced guides", "Meal planning", "Safety protocols"]
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture the stunning landscapes and vibrant culture of Nagaland with our specialized photo tours.",
      features: ["Prime locations", "Golden hour timing", "Local culture access", "Equipment support"]
    },
    {
      icon: TreePine,
      title: "Nature Trails",
      description: "Guided walks through diverse ecosystems, from dense forests to rolling hills and tribal villages.",
      features: ["Flora & fauna spotting", "Cultural interactions", "Moderate difficulty", "All skill levels"]
    },
    {
      icon: Compass,
      title: "Adventure Trekking",
      description: "Challenging treks for experienced hikers through Nagaland's most spectacular mountain ranges.",
      features: ["Multi-day treks", "Mountain climbing", "Advanced routes", "Technical support"]
    },
    {
      icon: Users,
      title: "Cultural Immersion",
      description: "Deep dive into Naga traditions, customs, and daily life through village homestays and festivals.",
      features: ["Village homestays", "Traditional crafts", "Local cuisine", "Festival participation"]
    },
    {
      icon: MapPin,
      title: "Custom Itineraries",
      description: "Tailored adventures designed specifically for your interests, schedule, and adventure level.",
      features: ["Personalized planning", "Flexible dates", "Group discounts", "Special requirements"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of carefully crafted outdoor experiences, each designed to showcase 
            the best of Nagaland's natural beauty and cultural richness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="group">
            View All Services
            <Compass className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
