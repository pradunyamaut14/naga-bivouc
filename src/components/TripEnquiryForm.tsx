import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendTripEnquiry, TripEnquiryData } from "@/services/emailService";
import { Loader2 } from "lucide-react";

const TripEnquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<TripEnquiryData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    groupSize: "",
    travelDates: "",
    duration: "",
    budget: "",
    states: [],
    activities: [],
    specialRequirements: "",
  });

  const stateOptions = [
    "Arunachal Pradesh",
    "Assam", 
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Sikkim",
    "Tripura"
  ];

  const activityOptions = [
    "Trekking & Hiking",
    "Wildlife Safari",
    "Cultural Tours",
    "Photography Tours",
    "Adventure Sports",
    "Festival Experiences",
    "River Rafting",
    "Camping",
    "Bird Watching",
    "Local Cuisine Tours"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log('Trip enquiry input change:', { name, value });
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category: 'states' | 'activities', value: string) => {
    console.log('Checkbox change:', { category, value });
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trip enquiry form submission started:', formData);
    
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendTripEnquiry(formData);
      console.log('Trip enquiry result:', result);
      
      if (result.success) {
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "Thank you for your interest. We'll contact you within 24 hours to plan your perfect Northeast India adventure.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          groupSize: "",
          travelDates: "",
          duration: "",
          budget: "",
          states: [],
          activities: [],
          specialRequirements: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.error === 'Email service not configured. Please contact the administrator.' 
            ? "Email service is not configured yet. Please contact us directly." 
            : "There was an error sending your enquiry. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Trip enquiry error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your enquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="groupSize">Group Size</Label>
          <select
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background"
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="1">Solo (1 person)</option>
            <option value="2">Couple (2 people)</option>
            <option value="3-5">Small Group (3-5)</option>
            <option value="6-10">Medium Group (6-10)</option>
            <option value="10+">Large Group (10+)</option>
          </select>
        </div>
        <div>
          <Label htmlFor="duration">Duration</Label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background"
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="3-5 days">3-5 days</option>
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="3+ weeks">3+ weeks</option>
          </select>
        </div>
        <div>
          <Label htmlFor="budget">Budget Range</Label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background"
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="budget">Budget (₹10,000-25,000)</option>
            <option value="standard">Standard (₹25,000-50,000)</option>
            <option value="luxury">Luxury (₹50,000+)</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="travelDates">Preferred Travel Dates</Label>
        <Input
          id="travelDates"
          name="travelDates"
          placeholder="e.g., March 2024 or flexible"
          value={formData.travelDates}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
      </div>

      {/* States of Interest */}
      <div>
        <Label>States You Want to Visit</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {stateOptions.map((state) => (
            <label key={state} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.states.includes(state)}
                onChange={() => handleCheckboxChange('states', state)}
                className="rounded"
                disabled={isSubmitting}
              />
              <span className="text-sm">{state}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <Label>Activities & Interests</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {activityOptions.map((activity) => (
            <label key={activity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.activities.includes(activity)}
                onChange={() => handleCheckboxChange('activities', activity)}
                className="rounded"
                disabled={isSubmitting}
              />
              <span className="text-sm">{activity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Special Requirements */}
      <div>
        <Label htmlFor="specialRequirements">Special Requirements or Requests</Label>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          placeholder="Any dietary restrictions, accessibility needs, or specific interests..."
          rows={3}
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Trip Enquiry'
        )}
      </Button>
    </form>
  );
};

export default TripEnquiryForm;
