
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendPackageBooking, PackageBookingData } from "@/services/emailService";
import { Loader2 } from "lucide-react";

interface PackageBookingModalProps {
  packageName: string;
  children: React.ReactNode;
}

const PackageBookingModal = ({ packageName, children }: PackageBookingModalProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<PackageBookingData>({
    name: "",
    email: "",
    phone: "",
    packageName: packageName,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log('Package booking input change:', { name, value });
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Package booking form submission started:', formData);
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendPackageBooking(formData);
      console.log('Package booking result:', result);
      
      if (result.success) {
        toast({
          title: "Booking Request Sent!",
          description: "Thank you for your interest. We'll contact you within 24 hours to confirm your booking.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          packageName: packageName,
          message: "",
        });
        setOpen(false);
      } else {
        toast({
          title: "Booking Failed",
          description: result.error === 'Email service not configured. Please contact the administrator.' 
            ? "Email service is not configured yet. Please contact us directly." 
            : "There was an error sending your booking request. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Package booking error:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error sending your booking request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book {packageName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any special requirements or questions about the package..."
              rows={3}
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Booking Request'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PackageBookingModal;
