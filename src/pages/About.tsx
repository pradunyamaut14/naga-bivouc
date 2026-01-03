
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
            src="https://en.indiaboundtour.com/assets/images/1722240164Nagaland.jpg"
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
                 Naga Bivouc was born from a deep connection to the mountains, forests, and living cultures of Nagaland. We believe that travel should be meaningful, immersive, and respectful—an experience that allows people to slow down, reconnect with nature, and discover places in their most authentic form.

The word “Bivouc” (derived from bivouac) refers to a temporary shelter or camp set up outdoors, often under the open sky, without the boundaries of conventional accommodation. It symbolizes freedom, simplicity, and self-reliance—the essence of true adventure. A bivouac is not just a place to rest; it is a moment of pause, reflection, and connection with nature. By choosing this name, Naga Bivouc represents a way of traveling that is raw, grounded, and deeply immersive.

We curate adventure and nature-based experiences such as trekking, camping, expeditions, and offbeat explorations across some of the most untouched landscapes of Northeast India. Each journey is carefully planned with a strong emphasis on safety, sustainability, and comfort, while still preserving the thrill and authenticity of the outdoors.

Community and sustainability are at the heart of everything we do. We work closely with local guides and communities, ensuring that our journeys create positive local impact while protecting natural ecosystems and cultural heritage. Our experiences are shaped by local stories, traditions, and knowledge passed down through generations.

At Naga Bivouc, adventure is more than reaching a destination—it’s about nights spent under starlit skies, mornings wrapped in mountain mist, shared meals around a fire, and the quiet understanding that comes from being truly present. Whether you are seeking solitude, challenge, or connection, we invite you to experience Nagaland in its purest form—one bivouac at a time.
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
