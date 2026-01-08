import { MapPin, Phone, Mail } from "lucide-react";
import WhatsAppInquiryForm from "./WhatsAppInquiryForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Ready to plan your adventure? Fill out the form and we'll respond to you directly on WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl border bg-background/60 backdrop-blur-sm hover:bg-background transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">Kohima, Nagaland, India</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl border bg-background/60 backdrop-blur-sm hover:bg-background transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl border bg-background/60 backdrop-blur-sm hover:bg-background transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">nagabivouc@gmail.com</p>
                </div>
              </div>

            </div>

            {/* Form Card */}
            <div className="bg-background rounded-2xl p-6 md:p-8 border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Plan Your Trip</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us a little about your travel plan and we’ll get back to you shortly.
              </p>
              <WhatsAppInquiryForm destination="Northeast India" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
