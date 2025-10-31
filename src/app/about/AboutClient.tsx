"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import WaveDivider from "@/components/ui/wave-divider";
import SectionHeader from "@/components/ui/section-header";
import "react-multi-carousel/lib/styles.css";

// Enhanced responsive configuration for carousel (removed)

interface AboutClientProps {
  aboutData: {
    team: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
      specialties: string[];
    }>;
    values: Array<{ title: string; description: string; points?: string[] }>;
    faqs: Array<{ question: string; answer: string }>;
  };
}

// Counter component for animated numbers
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
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
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span
      id={`counter-${end}`}
      className="text-3xl font-bold text-semantic-primary mb-2"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function AboutClient({ aboutData }: AboutClientProps) {
  const testimonials = [
    {
      text: "Mind Mentor helped me find the right therapist and provided the support I needed during a difficult time.",
      author: "Sarah Johnson",
      role: "Client",
      company: "Remote Designer",
      avatar: "/images/people/sarah.jpg",
      rating: 5,
      cover: "/images.jpeg",
    },
    {
      text: "The platform made it easy to connect with mental health professionals who truly understood my needs.",
      author: "Michael Chen",
      role: "Client",
      company: "Software Engineer",
      avatar: "/images/people/michael.jpg",
      rating: 5,
      cover: "",
    },
    {
      text: "I've been using Mind Mentor for over a year and it's been life‑changing for my mental health journey.",
      author: "Emily Rodriguez",
      role: "Client",
      company: "Educator",
      avatar: "/images/people/emily.jpg",
      rating: 4,
      cover: "/globe.svg",
    },
    {
      text: "Clear goals, caring therapists, and a simple app—I kept momentum and finally felt consistent progress.",
      author: "Dev Patel",
      role: "Client",
      company: "Graduate Student",
      avatar: "/images/people/dev.jpg",
      rating: 5,
      cover: "/globe.svg",
    },
    {
      text: "Simple scheduling and check‑ins kept me accountable. I actually looked forward to sessions.",
      author: "Jenna Park",
      role: "Client",
      company: "Product Manager",
      avatar: "/images/people/jenna.jpg",
      rating: 5,
      cover: "/window.svg",
    },
    {
      text: "I appreciated the privacy and the ability to switch therapists with zero friction.",
      author: "Luis Fernandez",
      role: "Client",
      company: "Financial Analyst",
      avatar: "/images/people/luis.jpg",
      rating: 4,
      cover: "",
    },
    {
      text: "Actionable exercises between sessions helped me transform day‑to‑day habits.",
      author: "Priya Srinivasan",
      role: "Client",
      company: "Graduate Researcher",
      avatar: "/images/people/priya.jpg",
      rating: 5,
      cover: "/globe.svg",
    },
    {
      text: "The platform made therapy feel approachable and safe—I finally started.",
      author: "Tom Williams",
      role: "Client",
      company: "Small Business Owner",
      avatar: "/images/people/tom.jpg",
      rating: 5,
      cover: "/window.svg",
    },
    {
      text: "The multilingual network was huge for me and my family—thank you.",
      author: "Mei Lin",
      role: "Client",
      company: "Parent",
      avatar: "/images/people/mei.jpg",
      rating: 5,
      cover: "",
    },
    {
      text: "I tried countless apps—this one finally stuck because it was designed for humans.",
      author: "Kyle Brown",
      role: "Client",
      company: "Freelancer",
      avatar: "/images/people/kyle.jpg",
      rating: 5,
      cover: "/globe.svg",
    },
  ];

  const spans = [
    "md:col-span-6 xl:col-span-3",
    "md:col-span-6 xl:col-span-3",
    "md:col-span-6 xl:col-span-3",
    "md:col-span-6 xl:col-span-3",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-full mx-auto px-4 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="About Us"
              title="Your Mental Health Journey Starts Here"
              subtitle="We're dedicated to providing accessible, high-quality mental health care through innovative technology and compassionate professionals."
            />
          </motion.div>
        </div>
      </div>
      <WaveDivider
        className="text-semantic-primary"
        variant="gradient"
        animate
      />

      {/* Mission Section */}
      <div className="max-w-full mx-auto px-4 md:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-semantic-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-semantic-body mb-6">
              To make mental health care accessible, affordable, and effective
              for everyone. We believe that everyone deserves access to quality
              mental health support, regardless of their location, schedule, or
              financial situation.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-semantic-primary" />
                <span className="text-semantic-body">
                  Licensed and experienced therapists
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-semantic-primary" />
                <span className="text-semantic-body">
                  Flexible scheduling and virtual sessions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-semantic-primary" />
                <span className="text-semantic-body">
                  HIPAA-compliant and secure platform
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-semantic-primary/5 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <AnimatedCounter end={50000} suffix="+" duration={2500} />
                <div className="text-sm text-semantic-body">People Helped</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={500} suffix="+" duration={2000} />
                <div className="text-sm text-semantic-body">
                  Licensed Therapists
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-semantic-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-semantic-body">Crisis Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-semantic-primary mb-2">
                  4.8/5
                </div>
                <div className="text-sm text-semantic-body">Client Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Highlights Carousel */}
      <div className="bg-white py-12">
        <div className="max-w-full mx-auto px-4 md:px-24">
          <SectionHeader
            eyebrow="Highlights"
            title="Our Story in Motion"
            subtitle="A few moments that capture what Mind Mentor is about"
          />
          <div className="mt-20 h-64">
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={4500}
              showDots
              itemClass="px-3"
            >
              {[
                {
                  id: 1,
                  title: "Private & Secure",
                  text: "Every session is encrypted and confidential.",
                  img: "/window.svg",
                },
                {
                  id: 2,
                  title: "Licensed Therapists",
                  text: "Work with qualified professionals who specialize in your goals.",
                  img: "/globe.svg",
                },
                {
                  id: 3,
                  title: "Personalized Care",
                  text: "Evidence‑based plans tailored to your needs and schedule.",
                  img: "/file.svg",
                },
              ].map((item) => (
                <div key={item.id} className="h-full">
                  <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 overflow-hidden h-full flex flex-col">
                    <div className="h-40 w-full bg-gradient-to-br from-semantic-primary/10 to-white flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-80"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className="text-xl font-semibold text-cardHeader">
                        {item.title}
                      </h4>
                      <p className="text-semantic-body mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-full mx-auto px-4 md:px-24">
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="rounded-2xl bg-gradient-to-b from-semantic-primary/5 to-transparent p-8">
                  <h3 className="text-2xl font-semibold text-semantic-primary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-semantic-body">{value.description}</p>
                  {Array.isArray(value.points) && (
                    <ul className="mt-4 space-y-2 text-sm text-semantic-body">
                      {value.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-semantic-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section - masonry grid */}
      <div className="bg-semantic-section py-16">
        <div className="max-w-full mx-auto px-4 md:px-24">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Stories from people who found support that fits their life"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={`col-span-12 ${spans[i % spans.length]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
              >
                {(() => {
                  const variant = i % 4;
                  const bgBlend =
                    i % 2 === 0
                      ? "bg-gradient-to-b from-white to-semantic-primary/5"
                      : "bg-gradient-to-b from-semantic-primary/5 to-white";
                  // Common star renderer
                  const Stars = () => (
                    <div className="mt-1 flex">
                      {Array.from({ length: t.rating }).map((_, r) => (
                        <svg
                          key={r}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#F59E0B"
                          aria-hidden
                          className="mr-0.5"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  );

                  // Variant 0: Image header card with badge and quote below
                  if (variant === 0) {
                    return (
                      <div
                        className={`h-full rounded-2xl ${bgBlend} shadow-sm ring-1 ring-black/5 overflow-hidden flex flex-col`}
                      >
                        <div className="w-full bg-gradient-to-br from-semantic-primary/15 to-semantic-primary/5">
                          {t.cover && (
                            // Placeholder image fills while keeping rounded corners
                            <img
                              src={t.cover}
                              alt="cover"
                              className="h-full w-full object-cover opacity-70"
                            />
                          )}
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                          <span className="text-xs uppercase tracking-wide text-semantic-primary/70">
                            Testimonials
                          </span>
                          <p className="mt-3 text-lg md:text-xl text-semantic-body italic">
                            &quot;{t.text}&quot;
                          </p>
                          <div className="mt-6 flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={t.avatar} />
                              <AvatarFallback>
                                {t.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-semantic-primary">
                                {t.author}
                              </div>
                              <div className="text-sm text-semantic-body">
                                {t.role} • {t.company}
                              </div>
                              <Stars />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Variant 1: Centered avatar top, then quote
                  if (variant === 1) {
                    return (
                      <div
                        className={`h-full rounded-2xl ${bgBlend} shadow-sm ring-1 ring-black/5 p-8 flex flex-col items-center text-center`}
                      >
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={t.avatar} />
                          <AvatarFallback>{t.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="mt-2 text-sm text-semantic-body/70">
                          {t.company}
                        </div>
                        <p className="mt-4 text-lg text-semantic-body italic max-w-prose">
                          &quot;{t.text}&quot;
                        </p>
                        <div className="mt-5">
                          <div className="font-semibold text-semantic-primary">
                            {t.author}
                          </div>
                          <div className="text-sm text-semantic-body">
                            {t.role}
                          </div>
                          <Stars />
                        </div>
                      </div>
                    );
                  }

                  // Variant 2: Badge title header, dense copy left-aligned
                  if (variant === 2) {
                    return (
                      <div
                        className={`h-full rounded-2xl ${bgBlend} shadow-sm ring-1 ring-black/5 p-8 flex flex-col`}
                      >
                        <span className="text-xs uppercase tracking-wide text-semantic-primary/70">
                          Testimonial
                        </span>
                        <h4 className="mt-2 text-xl font-semibold text-semantic-primary">
                          What People Say
                        </h4>
                        <p className="mt-3 text-semantic-body">
                          &quot;{t.text}&quot;
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={t.avatar} />
                            <AvatarFallback>
                              {t.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-semantic-primary">
                              {t.author}
                            </div>
                            <div className="text-sm text-semantic-body">
                              {t.role} • {t.company}
                            </div>
                            <Stars />
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Variant 3: Image sidebar placeholder with content
                  return (
                    <div
                      className={`h-full rounded-2xl ${bgBlend} shadow-sm ring-1 ring-black/5 overflow-hidden grid grid-cols-3`}
                    >
                      <div className="col-span-1 bg-gradient-to-b from-semantic-primary/10 to-transparent">
                        {t.cover && (
                          <img
                            src={t.cover}
                            alt="cover"
                            className="w-full h-full object-cover opacity-70"
                          />
                        )}
                      </div>
                      <div className="col-span-2 p-8 flex flex-col">
                        <p className="text-lg text-semantic-body italic">
                          &quot;{t.text}&quot;
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={t.avatar} />
                            <AvatarFallback>
                              {t.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-semantic-primary">
                              {t.author}
                            </div>
                            <div className="text-sm text-semantic-body">
                              {t.role} • {t.company}
                            </div>
                            <Stars />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-24">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our services"
          />
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {aboutData.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold text-semantic-primary">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-semantic-body">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-semantic-primary/90 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Connect with a licensed therapist today and take the first step
            towards better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-semantic-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-semantic-primary text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
