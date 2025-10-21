"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Award, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import Navbar from "@/components/ui/navbar";
import WaveDivider from "@/components/ui/wave-divider";
import SectionHeader from "@/components/ui/section-header";
import "react-multi-carousel/lib/styles.css";

// Enhanced responsive configuration for carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface AboutClientProps {
  aboutData: {
    team: Array<{
  name: string;
  role: string;
      bio: string;
      image: string;
      specialties: string[];
    }>;
    values: Array<{
  title: string;
  description: string;
      icon: string;
    }>;
    faqs: Array<{
  question: string;
  answer: string;
    }>;
  };
}

// Counter component for animated numbers
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

    return (
    <span id={`counter-${end}`} className="text-3xl font-bold text-brand-600 mb-2">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function AboutClient({ aboutData }: AboutClientProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Mind Mentor helped me find the right therapist and provided the support I needed during a difficult time.",
      author: "Sarah Johnson",
      role: "Client"
    },
    {
      text: "The platform made it easy to connect with mental health professionals who truly understood my needs.",
      author: "Michael Chen",
      role: "Client"
    },
    {
      text: "I've been using Mind Mentor for over a year and it's been life-changing for my mental health journey.",
      author: "Emily Rodriguez",
      role: "Client"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeader
              eyebrow="About Us"
              title="Your Mental Health Journey Starts Here"
              subtitle="We're dedicated to providing accessible, high-quality mental health care through innovative technology and compassionate professionals."
            />
              </motion.div>
        </div>
      </div>
      <WaveDivider color="white" bgColor="#2C7A9E" />

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-brand-700 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To make mental health care accessible, affordable, and effective for everyone. 
              We believe that everyone deserves access to quality mental health support, 
              regardless of their location, schedule, or financial situation.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-500" />
                <span className="text-gray-700">Licensed and experienced therapists</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-500" />
                <span className="text-gray-700">Flexible scheduling and virtual sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-500" />
                <span className="text-gray-700">HIPAA-compliant and secure platform</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-brand-50 p-8 rounded-2xl" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <AnimatedCounter end={50000} suffix="+" duration={2500} />
                <div className="text-sm text-gray-600">People Helped</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={500} suffix="+" duration={2000} />
                <div className="text-sm text-gray-600">Licensed Therapists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Crisis Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">4.8/5</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
              </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet Our Mental Health Professionals"
            subtitle="Experienced, licensed therapists dedicated to your wellbeing"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {aboutData.team.map((member, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src={member.image} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold text-brand-700 mb-2">{member.name}</h3>
                      <p className="text-brand-600 mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} className="bg-brand-50 text-brand-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                        </Card>
                      </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {aboutData.values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon === 'heart' && <Heart className="h-8 w-8 text-brand-600" />}
                    {value.icon === 'award' && <Award className="h-8 w-8 text-brand-600" />}
                    {value.icon === 'message' && <MessageCircle className="h-8 w-8 text-brand-600" />}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-700 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Real stories from people who've found hope and healing"
          />
          
          <div className="mt-12">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
              autoPlaySpeed={5000}
              showDots={true}
              customDot={<div className="w-3 h-3 bg-brand-300 rounded-full mx-1" />}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <Card className="rounded-xl shadow-lg">
                    <CardContent className="p-8 text-center">
                      <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-brand-700">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </CardContent>
                </Card>
                </div>
              ))}
        </Carousel>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our services"
          />
          
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {aboutData.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold text-brand-700">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                  </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Connect with a licensed therapist today and take the first step towards better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
              className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-3"
                >
                  Get Started Today
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