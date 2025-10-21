"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import WaveDivider from "@/components/ui/wave-divider";
import SectionHeader from "@/components/ui/section-header";

interface ServicesClientProps {
  servicesData: {
    services: Array<{
      title: string;
      description: string;
      features: string[];
      price: string;
      duration: string;
      popular?: boolean;
    }>;
    specialties: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

export default function ServicesClient({ servicesData }: ServicesClientProps) {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Mental Health Care"
            subtitle="Professional therapy services tailored to your unique needs and schedule"
          />
        </div>
      </div>
      <WaveDivider color="white" bgColor="#2C7A9E" />

      {/* Services Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="individual" className="text-sm md:text-base">
              Individual Therapy
            </TabsTrigger>
            <TabsTrigger value="couples" className="text-sm md:text-base">
              Couples Therapy
            </TabsTrigger>
            <TabsTrigger value="group" className="text-sm md:text-base">
              Group Sessions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.services.map((service, index) => (
                <Card key={index} className={`rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-brand-500' : ''}`}>
                  <CardContent className="p-6">
                    {service.popular && (
                      <div className="flex justify-center mb-4">
                        <Badge className="bg-brand-500 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-brand-700 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-brand-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-600 mb-1">{service.price}</div>
                      <div className="text-sm text-gray-500 mb-4">{service.duration}</div>
                      <Button className="w-full bg-brand-500 text-white hover:bg-brand-600">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    </div>
                  </CardContent>
              </Card>
            ))}
            </div>
          </TabsContent>

          <TabsContent value="couples" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-brand-700 mb-4">Couples Therapy</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Strengthen your relationship with professional couples therapy. Our licensed therapists 
                help couples improve communication, resolve conflicts, and build stronger connections.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="rounded-xl shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-brand-700 mb-3">60-Minute Sessions</h4>
                    <p className="text-gray-600 mb-4">Dedicated time for both partners to express their concerns and work through issues together.</p>
                    <div className="text-2xl font-bold text-brand-600">$120/session</div>
                  </CardContent>
                </Card>
                <Card className="rounded-xl shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-brand-700 mb-3">90-Minute Intensive</h4>
                    <p className="text-gray-600 mb-4">Extended sessions for deeper work on complex relationship challenges.</p>
                    <div className="text-2xl font-bold text-brand-600">$180/session</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="group" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-brand-700 mb-4">Group Therapy Sessions</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with others facing similar challenges in a supportive, confidential group setting 
                led by a professional therapist.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="rounded-xl shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-brand-700 mb-3">Anxiety Support Group</h4>
                    <p className="text-gray-600 mb-4">Weekly group sessions for managing anxiety and building coping strategies.</p>
                    <div className="text-2xl font-bold text-brand-600">$40/session</div>
                  </CardContent>
                </Card>
                <Card className="rounded-xl shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-brand-700 mb-3">Depression Recovery</h4>
                    <p className="text-gray-600 mb-4">Support group focused on depression management and recovery techniques.</p>
                    <div className="text-2xl font-bold text-brand-600">$40/session</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Specialties Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Specialties"
            title="Areas of Expertise"
            subtitle="Our therapists specialize in various mental health areas"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {servicesData.specialties.map((specialty, index) => (
              <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-700 mb-3">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Transparent, Affordable Pricing"
            subtitle="No hidden fees, no surprises. Choose the plan that works for you."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="rounded-xl shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-brand-700 mb-4">Basic Plan</h3>
                <div className="text-4xl font-bold text-brand-600 mb-2">$65</div>
                <div className="text-gray-500 mb-6">per session</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>50-minute individual sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Licensed therapist matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Secure messaging</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-500 text-white hover:bg-brand-600">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg ring-2 ring-brand-500">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Badge className="bg-brand-500 text-white">Most Popular</Badge>
                </div>
                <h3 className="text-2xl font-bold text-brand-700 mb-4">Premium Plan</h3>
                <div className="text-4xl font-bold text-brand-600 mb-2">$90</div>
                <div className="text-gray-500 mb-6">per session</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>60-minute individual sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Priority therapist matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Unlimited messaging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Group therapy access</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-500 text-white hover:bg-brand-600">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-brand-700 mb-4">Couples Plan</h3>
                <div className="text-4xl font-bold text-brand-600 mb-2">$120</div>
                <div className="text-gray-500 mb-6">per session</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>60-minute couples sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Specialized couples therapist</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Relationship assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-500" />
                    <span>Progress tracking tools</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-500 text-white hover:bg-brand-600">
                  Choose Plan
                    </Button>
              </CardContent>
              </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Take the first step towards better mental health. Our team is here to help you find the right therapist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Find Your Therapist
              <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-600 text-lg px-8 py-3"
            >
              Learn More
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}