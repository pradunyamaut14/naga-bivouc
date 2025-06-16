
import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_naga_bivouac';
const TEMPLATE_ID_CONTACT = 'template_contact';
const TEMPLATE_ID_ENQUIRY = 'template_enquiry';
const TEMPLATE_ID_PACKAGE = 'template_package';
const PUBLIC_KEY = 'your_public_key_here';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adventureInterest: string;
  message: string;
}

export interface TripEnquiryData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  groupSize: string;
  travelDates: string;
  duration: string;
  budget: string;
  states: string[];
  activities: string[];
  specialRequirements: string;
}

export interface PackageBookingData {
  name: string;
  email: string;
  phone: string;
  packageName: string;
  message: string;
}

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const templateParams = {
      to_email: 'mpradunya@gmail.com',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      adventure_interest: data.adventureInterest,
      message: data.message,
      subject: 'New Contact Form Submission - Naga Bivouac'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_CONTACT,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send contact form:', error);
    return { success: false, error };
  }
};

export const sendTripEnquiry = async (data: TripEnquiryData) => {
  try {
    const templateParams = {
      to_email: 'mpradunya@gmail.com',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      group_size: data.groupSize,
      travel_dates: data.travelDates,
      duration: data.duration,
      budget: data.budget,
      states: data.states.join(', '),
      activities: data.activities.join(', '),
      special_requirements: data.specialRequirements,
      subject: 'New Trip Enquiry - Naga Bivouac'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_ENQUIRY,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send trip enquiry:', error);
    return { success: false, error };
  }
};

export const sendPackageBooking = async (data: PackageBookingData) => {
  try {
    const templateParams = {
      to_email: 'mpradunya@gmail.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      package_name: data.packageName,
      message: data.message,
      subject: 'New Package Booking Request - Naga Bivouac'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID_PACKAGE,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send package booking:', error);
    return { success: false, error };
  }
};
