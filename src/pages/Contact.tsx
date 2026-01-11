import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, Star, Map } from "lucide-react";

const WHATSAPP_NUMBER = "7099623366";

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in planning a trip to Northeast India. Please share more details."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Contact Naga Bivouac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Let’s craft your perfect journey through Nagaland and Northeast India — we’re just a message away.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">

            {/* Intro */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch With Naga Bivouac
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Whether you're planning a solo adventure, a group expedition, or a custom cultural experience, 
                we’re here to help you design a seamless and memorable journey across Northeast India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left: Contact Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

                <div className="space-y-6">

                  {/* Card */}
                  <div className="flex items-start gap-4 p-4 rounded-xl border bg-background/60">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Doviepie Inn, Khonoma<br />District - Kohima, Nagaland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border bg-background/60">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91 85751 85649</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border bg-background/60">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">mpradunya@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border bg-background/60">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Response Time</h4>
                      <p className="text-muted-foreground">
                        We usually respond within 24 hours (often much faster on WhatsApp)
                      </p>
                    </div>
                  </div>

                </div>

                {/* Trust Points */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Local expertise & trusted ground support
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Star className="h-5 w-5 text-primary" />
                    Curated experiences, not mass tourism
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Map className="h-5 w-5 text-primary" />
                    Deep focus on Nagaland & Northeast India
                  </div>
                </div>
              </div>

              {/* Right: WhatsApp CTA */}
              <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    Talk to Us on WhatsApp
                  </h3>

                  <p className="text-muted-foreground mb-8">
                    The fastest way to plan your trip. Chat directly with our team, ask questions, 
                    and get a customized itinerary based on your preferences and travel dates.
                  </p>

                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>

                  <p className="text-sm text-muted-foreground mt-4">
                    Opens WhatsApp with a pre-filled message
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
