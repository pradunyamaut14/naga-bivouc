import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Journeys", href: "/states" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I’d like to plan a bespoke journey across Northeast India.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-primary/5 pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Mountain className="h-9 w-9 text-primary" />
              <h3 className="text-3xl font-semibold tracking-wide">Naga Bivouac</h3>
            </Link>

            <p className="text-muted-foreground mb-8 text-sm leading-relaxed max-w-sm">
              Curating refined travel experiences across Nagaland and Northeast India — where culture, wilderness, and comfort meet.
            </p>
            
            <div className="space-y-3 mb-8">
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

            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.instagram.com/nagabivouac?igsh=MXZmZ202OTkzZm83NQ==" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>

              <Button variant="outline" size="icon" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Bespoke Travel
            </h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Each journey is individually crafted. Speak directly with our travel designer to create your perfect Northeast experience.
            </p>
            <Button onClick={handleWhatsAppClick} className="w-full h-11 text-sm tracking-wide">
              Begin Your Journey
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Naga Bivouac. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="h-3 w-3 text-red-500" /> by 
            <span className="ml-1 hover:text-primary transition-colors cursor-default">
              Pradunya Maut
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
