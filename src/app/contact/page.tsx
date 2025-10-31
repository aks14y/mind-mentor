// app/contact/page.tsx
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Mind Mentor | Get in Touch with Mental Health Professionals',
  description: 'Reach out to Mind Mentor for mental health support, therapy inquiries, or general questions. Our team is here to help you start your wellness journey.',
  keywords: 'contact therapist, mental health support, therapy questions, Mind Mentor contact',
  openGraph: {
    title: 'Contact Mind Mentor | Mental Health Support',
    description: 'Get in touch with licensed mental health professionals',
    type: 'website',
  },
};

// This could be server-side data fetching
async function getContactData() {
  // Fetch contact information, office locations, etc.
  return {
    offices: [
      {
        city: 'New York',
        address: '123 Wellness St, New York, NY 10001',
        phone: '+1 (555) 123-4567',
        email: 'ny@mindmentor.com'
      },
      // ... more locations
    ],
    supportHours: {
      weekdays: '9:00 AM - 8:00 PM EST',
      weekends: '10:00 AM - 6:00 PM EST'
    }
  };
}

export default async function ContactPage() {
  const contactData = await getContactData();
  
  return <ContactClient contactData={contactData} />;
}