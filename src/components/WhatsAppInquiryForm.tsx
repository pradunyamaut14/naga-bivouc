
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

interface WhatsAppInquiryFormProps {
  destination?: string;
}

const WhatsAppInquiryForm = ({ destination = "Northeast India" }: WhatsAppInquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    travelers: "",
    dates: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `Hi! I'm interested in visiting ${destination}.\n\n` +
      `Name: ${formData.name}\n` +
      `Number of Travelers: ${formData.travelers}\n` +
      `Preferred Dates: ${formData.dates}\n` +
      `Message: ${formData.message}`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="travelers">Number of Travelers</Label>
        <Input
          id="travelers"
          type="number"
          placeholder="e.g. 2"
          min="1"
          value={formData.travelers}
          onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="dates">Preferred Travel Dates</Label>
        <Input
          id="dates"
          placeholder="e.g. December 15-20, 2024"
          value={formData.dates}
          onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="message">Additional Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Any specific requirements or questions..."
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        <MessageCircle className="mr-2 h-5 w-5" />
        Send via WhatsApp
      </Button>
    </form>
  );
};

export default WhatsAppInquiryForm;
