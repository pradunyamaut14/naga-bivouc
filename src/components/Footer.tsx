import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Heart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "917099623366";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Packages", href: "/packages" },
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
    <footer className="bg-[hsl(215,35%,15%)] text-naga-mist relative">
      {/* Tribal Border Top */}
      <div className="absolute top-0 left-0 right-0 h-2 naga-border"></div>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Naga Bivouac" className="h-12 w-12 object-contain" />
              <h3 className="font-display text-2xl font-bold text-naga-gold">Naga Bivouac</h3>
            </Link>

            <p className="font-body text-naga-mist/80 mb-6 text-sm leading-relaxed">
              Discover the raw beauty, hidden cultures, and untold stories of Nagaland and Northeast India through authentic travel experiences.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-naga-red" />
                <span className="font-body text-naga-mist/80">Kohima, Nagaland, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-naga-forest" />
                <span className="font-body text-naga-mist/80">+91 70996 23366</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-naga-gold" />
                <span className="font-body text-naga-mist/80">nagabivouac@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="p-2 border-naga-gold/30 bg-transparent hover:bg-naga-red/20 hover:border-naga-red text-naga-mist">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.instagram.com/nagabivouac?igsh=MXZmZ202OTkzZm83NQ==" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="p-2 border-naga-gold/30 bg-transparent hover:bg-naga-red/20 hover:border-naga-red text-naga-mist">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>

              <Button variant="outline" size="sm" className="p-2 border-naga-gold/30 bg-transparent hover:bg-naga-forest/20 hover:border-naga-forest text-naga-mist" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-naga-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="font-body text-naga-mist/70 hover:text-naga-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-naga-gold">Experiences</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="font-body text-naga-mist/70 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-naga-red"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-naga-gold">Plan Your Trip</h4>
            <p className="font-body text-naga-mist/70 text-sm mb-4">
              Want a custom itinerary or quick response? Chat with us directly on WhatsApp.
            </p>
            <Button 
              onClick={handleWhatsAppClick} 
              className="w-full bg-naga-red hover:bg-naga-red/90 text-white font-body border border-naga-gold/30"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-naga-gold/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="font-body text-sm text-naga-mist/60 text-center md:text-left">
            © 2026 Naga Bivouac. All rights reserved.
          </p>

          <p className="font-body text-sm text-naga-mist/60 flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-naga-red" /> by 
            <span className="font-medium text-naga-gold ml-1">Pradunya Maut</span>
            <Code className="h-4 w-4 ml-1" />
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
