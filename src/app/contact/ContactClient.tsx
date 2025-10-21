// app/contact/ContactClient.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/ui/navbar';
import WaveDivider from '@/components/ui/wave-divider';
import SectionHeader from '@/components/ui/section-header';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactClientProps {
  contactData: {
    offices: Array<{
      city: string;
      address: string;
      phone: string;
      email: string;
    }>;
    supportHours: {
      weekdays: string;
      weekends: string;
    };
  };
}

export default function ContactClient({ contactData }: ContactClientProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

  return (
    <div>
      <div className="min-h-screen bg-white">
        <Navbar />
        {/* Hero Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Get in touch"
              title="Contact Mind Mentor"
              subtitle="Ready to start your mental health journey? Our team is here to answer your questions and help you get started."
            />
          </div>
        </div>
        <WaveDivider color="white" bgColor="#2C7A9E" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-600">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label>Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapy">Therapy Services</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Questions</SelectItem>
                        <SelectItem value="general">General Information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea 
                      placeholder="Tell us how we can help you..." 
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-brand-500 text-white hover:bg-brand-600 text-lg py-3 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-600">
                Get in Touch
              </h2>
              
              {/* Support Hours */}
              <Card className="shadow-md mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-brand-500" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
                      <p>Weekdays: {contactData.supportHours.weekdays}</p>
                      <p>Weekends: {contactData.supportHours.weekends}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="flex flex-col space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-brand-500" />
                  <p className="font-medium">24/7 Crisis Support: 1-800-273-8255</p>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-5 w-5 text-brand-500" />
                  <p className="font-medium">Live Chat: Available during support hours</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-brand-500" />
                  <p className="font-medium">Email: support@mindmentor.com</p>
                </div>
              </div>

              {/* Office Locations */}
              <h3 className="text-2xl font-bold mb-4 text-brand-600">
                Our Offices
              </h3>
              <div className="flex flex-col space-y-4">
                {contactData.offices.map((office, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold mb-2 text-brand-600">
                        {office.city}
                      </h4>
                      <p className="mb-2">{office.address}</p>
                      <p className="text-gray-600">{office.phone}</p>
                      <p className="text-gray-600">{office.email}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-blue-25 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-8 text-center">
              <SectionHeader title="Common Questions" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-4 text-left">
                  <p className="font-bold">How quickly will I hear back?</p>
                  <p className="text-gray-600">We respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div className="flex flex-col space-y-4 text-left">
                  <p className="font-bold">Is my information secure?</p>
                  <p className="text-gray-600">Yes, all communications are encrypted and HIPAA compliant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}