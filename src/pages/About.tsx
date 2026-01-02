
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Award, Heart, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "Genuine cultural immersion and meaningful connections with local communities."
    },
    {
      icon: Mountain,
      title: "Sustainable Tourism",
      description: "Our practices support local economies while preserving the environment."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We work closely with local communities to ensure tourism benefits everyone."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing exceptional service and unforgettable experiences."
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to learn more about Naga Bivouac tours.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="About Naga Bivouac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-primary">Naga Bivouac</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for authentic Northeast India adventures
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by Pradunya Maut, Naga Bivouac began as a passionate project to showcase 
                  the incredible beauty and rich cultural heritage of Northeast India.
                </p>
                <p>
                  Our name "Bivouac" reflects our love for outdoor camping and authentic wilderness experiences. 
                  We specialize in creating immersive journeys that connect travelers with the pristine 
                  landscapes and vibrant cultures of all eight northeastern states.
                </p>
                <p>
                  We've built strong relationships with local communities, ensuring our tourism 
                  activities benefit the regions we explore.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                alt="Our journey"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your <span className="text-primary">Adventure</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch with us to plan your unforgettable Northeast India journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
            <Link to="/gallery">
              <Button size="lg" variant="outline">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
