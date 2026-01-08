import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Heart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Explore States", href: "/states" },
  ];

  const services = [
    "Nagaland Tours",
    "Northeast Packages",
    "Trekking & Hiking",
    "Cultural Experiences",
    "Custom Trip Planning",
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in Northeast India tours.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Naga Bivouac</h3>
            </Link>

            <p className="text-muted-foreground mb-6 text-sm">
              Discover the raw beauty, hidden cultures, and untold stories of Nagaland and Northeast India through authentic travel experiences.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kohima, Nagaland, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>nagabivouc@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.instagram.com/nagabivouac?igsh=MXZmZ202OTkzZm83NQ==" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>

              <Button variant="outline" size="sm" className="p-2" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Experiences</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Plan Your Trip</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Want a custom itinerary or quick response? Chat with us directly on WhatsApp.
            </p>
            <Button onClick={handleWhatsAppClick} className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Naga Bivouac. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500" /> by 
            <span className="font-medium text-primary ml-1">Pradunya Maut</span>
            <Code className="h-4 w-4 ml-1" />
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
