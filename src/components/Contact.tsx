import { MapPin, Phone, Mail } from "lucide-react";
import WhatsAppInquiryForm from "./WhatsAppInquiryForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 naga-gradient relative">
      {/* Tribal Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 naga-border"></div>

      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in <span className="text-naga-red">Touch</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base">
            Ready to plan your adventure? Fill out the form and we'll respond to you directly on WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-naga-gold/20 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-naga-red/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-naga-red/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-naga-red/20 transition-colors">
                  <MapPin className="h-5 w-5 text-naga-red" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Location</h3>
                  <p className="font-body text-sm text-muted-foreground">Kohima, Nagaland, India</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-naga-gold/20 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-naga-red/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-naga-forest/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-naga-forest/20 transition-colors">
                  <Phone className="h-5 w-5 text-naga-forest" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Phone</h3>
                  <p className="font-body text-sm text-muted-foreground">+91 70996 23366</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-naga-gold/20 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-naga-red/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-naga-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-naga-gold/20 transition-colors">
                  <Mail className="h-5 w-5 text-naga-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">nagabivouac@gmail.com</p>
                </div>
              </div>

              {/* Decorative tribal element */}
              <div className="hidden md:block mt-8 p-6 rounded-xl border border-naga-gold/20 bg-naga-black/5">
                <p className="font-display text-lg text-naga-red font-semibold mb-2">Why Choose Us?</p>
                <ul className="font-body text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-naga-red"></span>
                    100% Local Owned & Operated
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-naga-forest"></span>
                    Authentic Cultural Experiences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-naga-gold"></span>
                    Sustainable & Responsible Tourism
                  </li>
                </ul>
              </div>

            </div>

            {/* Form Card */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-naga-gold/30 shadow-lg">
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Plan Your Trip</h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Tell us a little about your travel plan and we'll get back to you shortly.
              </p>
              <WhatsAppInquiryForm destination="Northeast India" />
            </div>

          </div>
        </div>
      </div>

      {/* Tribal Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 naga-border"></div>
    </section>
  );
};

export default Contact;
