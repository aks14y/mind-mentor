"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroComponent from "./Hero";
import "react-multi-carousel/lib/styles.css";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500-600 to-blue-300">
      <HeroComponent />

      <div className="max-w-full mx-auto sm:px-6 py-10 md:px-60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Why Mind Mentor?"
            title="The Next Wave is Here"
            subtitle="Discover our platform's key strengths: secure, scalable, and smart for you."
            className="items-start text-left max-w-5xl"
          />
          <p className="mt-4 text-semantic-body max-w-5xl">
            Whether you are beginning your wellness journey or guiding a team,
            our mentoring approach blends evidence‑based practices with
            compassionate human support. Build sustainable habits, track
            progress with actionable insights, and access practical resources
            designed to help you show up as your best self—at work, at home, and
            in your community.
          </p>
        </motion.div>
      </div>
      <div className="md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col h-full bg-white shadow-lg rounded-3xl overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-r from-orange-200 to-blue-200 flex items-center justify-center">
                {/* Placeholder SVG */}
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#FF7043"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 flex flex-col p-8">
                <span className="text-semantic-primary font-semibold mb-2">
                  SECURE
                </span>
                <h3 className="text-2xl font-bold mb-3 text-cardHeader">
                  The next wave is secure.
                </h3>
                <p className="text-semantic-body mb-5">
                  Next generation privacy and protection. We use best-in-class
                  security to keep your data safe and confidential for your
                  peace of mind.
                </p>
                <a href="#security" className="mt-auto">
                  <Button className="rounded-full px-8 py-3 font-bold">
                    Network Security
                  </Button>
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col h-full bg-white shadow-lg rounded-3xl overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-r from-blue-200 to-pink-200 flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="6"
                    fill="#42A5F5"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M8 15l4-4 4 4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 flex flex-col p-8">
                <span className="text-semantic-primary font-semibold mb-2">
                  SCALABLE
                </span>
                <h3 className="text-2xl font-bold mb-3 text-cardHeader">
                  The next wave is scalable.
                </h3>
                <p className="text-semantic-body mb-5">
                  Adaptable to your needs. Mind Mentor efficiently supports
                  individual users and organizations as you grow, without
                  compromise.
                </p>
                <a href="#scalable" className="mt-auto">
                  <Button className="rounded-full px-8 py-3 font-bold">
                    NSM 3.0
                  </Button>
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col h-full bg-white shadow-lg rounded-3xl overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="6"
                    fill="#7E57C2"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M9 14s1.5-2 3-2 3 2 3 2"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 flex flex-col p-8">
                <span className="text-semantic-primary font-semibold mb-2">
                  SMART
                </span>
                <h3 className="text-2xl font-bold mb-3 text-cardHeader">
                  The next wave is smart.
                </h3>
                <p className="text-semantic-body mb-5">
                  Our AI-powered platform delivers tailored guidance and
                  insights, making mental wellness accessible and personalized
                  for everyone.
                </p>
                <a href="#smart" className="mt-auto">
                  <Button className="rounded-full px-8 py-3 font-bold">
                    Unified Management
                  </Button>
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col h-full bg-white shadow-lg rounded-3xl overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-r from-purple-200 to-orange-200 flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2l2.9 5.88 6.5.95-4.7 4.58 1.11 6.49L12 17.77 6.19 19.9 7.3 13.41 2.6 8.83l6.5-.95L12 2z"
                    fill="#F97316"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
              <div className="flex-1 flex flex-col p-8">
                <span className="text-semantic-primary font-semibold mb-2">
                  SUPPORT
                </span>
                <h3 className="text-2xl font-bold mb-3 text-cardHeader">
                  The next wave is supported.
                </h3>
                <p className="text-semantic-body mb-5">
                  Human coaches and on‑demand resources ensure you’re never
                  stuck—get timely help and keep moving forward.
                </p>
                <a href="#support" className="mt-auto">
                  <Button className="rounded-full px-8 py-3 font-bold">
                    Get Support
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-full mx-auto sm:px-6 py-10 md:px-60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Getting Started"
            title="How Mind Mentor Works"
            subtitle="Simple steps to start your mental wellness journey"
            className="items-start text-left"
          />
          <div className="mt-4  mx-auto text-semantic-body">
            <p>
              Getting started is intentionally simple. Create your profile and
              share your goals, and we’ll tailor guidance to your needs. Your
              mentor experience combines structured sessions, on‑demand tools,
              and practical exercises you can apply in real life—so change feels
              achievable, not overwhelming.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3 text-sm">
              <li className="rounded-xl bg-white/70 shadow-sm p-3">
                <span className="font-semibold text-semantic-primary">
                  1. Personalize:
                </span>
                &nbsp;Answer a few questions to set focus areas.
              </li>
              <li className="rounded-xl bg-white/70 shadow-sm p-3">
                <span className="font-semibold text-semantic-primary">
                  2. Practice:
                </span>
                &nbsp;Follow weekly micro‑tasks and reflections.
              </li>
              <li className="rounded-xl bg-white/70 shadow-sm p-3">
                <span className="font-semibold text-semantic-primary">
                  3. Progress:
                </span>
                &nbsp;Track outcomes and adjust with your mentor.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Two-wide cards section (animated, premium styling) */}
      <section className="w-full mx-auto sm:px-6 md:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-8 md:p-10 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Accents */}
            <span className="pointer-events-none absolute -top-10 -left-10 h-36 w-36 rounded-full bg-semantic-secondary/20 blur-3xl" />
            <h3 className="text-[28px] md:text-[34px] font-extrabold leading-snug">
              <span className="text-gray-900">Professional </span>
              <span className="text-semantic-primary">Counseling</span>
              <span className="text-gray-900"> & </span>
              <span className="text-semantic-primary">Therapy Online</span>
            </h3>
            <p className="mt-4 text-semantic-body max-w-2xl">
              Connect with a licensed therapist via video, phone, or chat. Get
              the help you need from the comfort of your home.
            </p>

            <ul className="mt-5 space-y-3 text-semantic-body">
              {[
                "Licensed and experienced professionals",
                "Secure and confidential sessions",
                "Match with your perfect therapist in 24 hours",
                "Cancel anytime with no commitment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 text-semantic-primary"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full px-6 py-3 text-white font-bold bg-semantic-secondary hover:opacity-90">
                Get Started
              </Button>
              <Button
                variant="ghost"
                className="rounded-full px-6 py-3 font-semibold ring-1 ring-gray-300 text-gray-700 hover:bg-white/60"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-1 text-sm text-gray-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                  aria-hidden
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span>Rated 4.8/5 by our community</span>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-8 md:p-10 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
            <h4 className="text-xl font-bold text-gray-900">Special Offer</h4>
            <div className="mt-3">
              <div className="text-semantic-body/60 line-through">
                $100 – $150/week
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-semantic-primary">
                $65–$90/week
              </div>
              <p className="text-xs text-semantic-body mt-1">
                Financial aid available
              </p>
            </div>
            <ul className="mt-5 space-y-3 text-semantic-body">
              {[
                "20% off your first month",
                "Get matched in less than 24 hours",
                "Switch therapists anytime at no cost",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-semantic-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button className="rounded-full px-6 py-3 font-bold ring-1 ring-semantic-primary text-semantic-primary bg-white hover:bg-semantic-primary/10">
                See If You Qualify
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated gradient separator */}
      <div className="relative my-8 sm:my-12 h-20 sm:h-28 overflow-hidden">
        <motion.span
          className="absolute -left-10 top-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-semantic-secondary/40 blur-3xl"
          initial={{ x: -60 }}
          animate={{ x: [-60, 120, -60] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute -right-10 top-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-semantic-primary/30 blur-3xl"
          initial={{ x: 60 }}
          animate={{ x: [60, -120, 60] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Simple two-wide cards section (original version kept) */}
      <section className="w-full mx-auto sm:px-6 md:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white shadow-md ring-1 ring-gray-100 p-8 md:p-10">
            <h3 className="text-3xl font-semibold text-cardHeader mb-4">
              Advanced Mentoring Pathways
            </h3>
            <p className="text-semantic-body leading-relaxed">
              For deep, structured growth. Get multi‑week programs with guided
              reflections, skills practice, and progress reviews. Ideal for
              building long‑term habits and addressing recurring challenges with
              steady support.
            </p>
          </div>
          <div className="rounded-3xl bg-white shadow-md ring-1 ring-gray-100 p-8 md:p-10">
            <h3 className="text-3xl font-semibold text-cardHeader mb-4">
              Managed Mentoring Support
            </h3>
            <p className="text-semantic-body leading-relaxed">
              Make growth easier by letting our team manage reminders, session
              check‑ins, and resource updates for you. We keep momentum going so
              you can focus on showing up and making meaningful progress.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="rounded-full px-8 py-3 text-white font-bold bg-semantic-secondary hover:opacity-90">
            Learn More
          </Button>
        </div>
      </section>

      {/* Types of Counselling Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Services"
            title="Types of Counselling"
            subtitle="Choose the format that best fits your goals and lifestyle."
          />
          {/* Additional intro copy in a narrower container */}
          <div className="max-w-3xl mx-auto mt-6 text-lg text-semantic-body">
            <p>
              We offer multiple counselling formats to support your needs across
              different stages of life. Whether you prefer focused one-on-one
              work, support alongside others, or the convenience of secure
              online sessions, you can choose what feels right today and switch
              any time as your needs evolve.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Cards use a wider container separate from the intro text */}
          <div className="pt-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="rounded-3xl bg-white shadow-lg p-8 flex flex-col">
                <h3 className="text-3xl font-bold text-cardHeader mb-6">
                  Individual Therapy
                </h3>
                <ul className="space-y-3 text-semantic-body flex-1">
                  <li className="list-disc ml-5">Personalized 1:1 sessions</li>
                  <li className="list-disc ml-5">
                    Evidence-based approaches (CBT, DBT, ACT)
                  </li>
                  <li className="list-disc ml-5">
                    Confidential and judgment-free
                  </li>
                  <li className="list-disc ml-5">
                    Flexible scheduling options
                  </li>
                </ul>
                <a
                  href="#individual"
                  className="mt-6 text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
              {/* Card 2 */}
              <div className="rounded-3xl bg-white shadow-lg p-8 flex flex-col">
                <h3 className="text-3xl font-bold text-cardHeader mb-6">
                  Couples Therapy
                </h3>
                <ul className="space-y-3 text-semantic-body flex-1">
                  <li className="list-disc ml-5">
                    Improve communication and trust
                  </li>
                  <li className="list-disc ml-5">
                    Resolve conflicts constructively
                  </li>
                  <li className="list-disc ml-5">
                    Rebuild connection and intimacy
                  </li>
                  <li className="list-disc ml-5">
                    Inclusive of all relationships
                  </li>
                </ul>
                <a
                  href="#couples"
                  className="mt-6 text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
              {/* Card 3 */}
              <div className="rounded-3xl bg-white shadow-lg p-8 flex flex-col">
                <h3 className="text-3xl font-bold text-cardHeader mb-6">
                  Group Therapy
                </h3>
                <ul className="space-y-3 text-semantic-body flex-1">
                  <li className="list-disc ml-5">Peer-supported growth</li>
                  <li className="list-disc ml-5">
                    Facilitated by licensed therapists
                  </li>
                  <li className="list-disc ml-5">
                    Learn and practice new skills
                  </li>
                  <li className="list-disc ml-5">Affordable and effective</li>
                </ul>
                <a
                  href="#group"
                  className="mt-6 text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
              {/* Card 4 - Enhanced + Animated */}
              <motion.div
                className="relative rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-lg p-8 flex flex-col group overflow-hidden ring-1 ring-gray-100"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Decorative glow */}
                <span className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-3xl font-bold text-cardHeader mb-6">
                  Online Counselling
                </h3>
                <ul className="space-y-3 text-semantic-body flex-1">
                  <li className="list-disc ml-5">
                    Secure video or chat sessions
                  </li>
                  <li className="list-disc ml-5">
                    Access from home or on the go
                  </li>
                  <li className="list-disc ml-5">
                    Flexible time slots, global access
                  </li>
                  <li className="list-disc ml-5">
                    Same care, more convenience
                  </li>
                </ul>
                <a
                  href="#online"
                  className="mt-6 text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  Learn more
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bridge Section: Counselling + News (overlaps both sections) */}
      <section className="py-10 sm:px-6 lg:px-8 relative z-10 -mt-16 -mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl bg-white shadow-2xl ring-1 ring-gray-100 overflow-hidden">
            {/* Left content */}
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold tracking-wide text-gray-500 mb-2">
                STRONGER TOGETHER
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-500 leading-tight mb-4">
                Support for your journey, stories for your growth
              </h2>
              <p className="text-semantic-body mb-6 max-w-xl">
                Explore counselling types tailored to your needs and stay
                updated with our latest news, events, and insights. Learn,
                connect, and grow with the MindMentor community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="rounded-full px-6 py-3 text-white font-bold bg-semantic-secondary hover:opacity-90"
                  asChild
                >
                  <a href="#individual">Explore Counselling</a>
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full px-6 py-3 font-bold ring-1 ring-gray-300 text-semantic-body hover:bg-white/60"
                  asChild
                >
                  <a href="#press">Read Blog & News</a>
                </Button>
              </div>
            </div>
            {/* Right image */}
            <div className="relative h-64 md:h-full">
              <Image
                src="/window.svg"
                alt="MindMentor community"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <div className="bg-semantic-section -mt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-52">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Updates"
              title="News & Events"
              subtitle="Stay informed with product updates, events, and promotions."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Left: Large Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg bg-white">
                <Image
                  src="/window.svg"
                  alt="News & Events"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover min-h-[420px]"
                />
              </div>

              {/* Right: Stacked Items */}
              <div className="md:col-span-2 bg-white rounded-3xl shadow-lg divide-y">
                {/* Item 1 */}
                <div className="p-8">
                  <p className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
                    PRESS RELEASE
                  </p>
                  <a href="#press" className="block">
                    <h3 className="text-2xl md:text-3xl font-bold text-semantic-primary mb-4">
                      Mind Mentor expands its AI guidance with new privacy-first
                      features.
                    </h3>
                  </a>
                  <a
                    href="#read-press"
                    className="text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                  >
                    Read more <span aria-hidden>→</span>
                  </a>
                </div>
                {/* Item 2 */}
                <div className="p-8">
                  <p className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
                    EVENTS
                  </p>
                  <a href="#events" className="block">
                    <h3 className="text-2xl md:text-3xl font-bold text-semantic-primary mb-4">
                      Join our community webinar series on building healthy
                      habits.
                    </h3>
                  </a>
                  <a
                    href="#read-events"
                    className="text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                  >
                    Read more <span aria-hidden>→</span>
                  </a>
                </div>
                {/* Item 3 */}
                <div className="p-8">
                  <p className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
                    PROMOTIONS
                  </p>
                  <a href="#promotions" className="block">
                    <h3 className="text-2xl md:text-3xl font-bold text-semantic-primary mb-4">
                      Save with limited-time plans designed to kickstart your
                      journey.
                    </h3>
                  </a>
                  <a
                    href="#read-promotions"
                    className="text-semantic-primary font-semibold inline-flex items-center gap-2 hover:underline"
                  >
                    Read more <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Us CTA */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-500-600 to-blue-300">
        {/* <div className="absolute inset-0 -z-10">
          <Image
            src="/window.svg"
            alt="Contact background"
            fill
            className="object-cover"
            priority
          />
        </div> */}
        <div className="max-w-full mx-auto sm:px-6 md:px-60 py-20 md:py-28 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience the next wave in mentoring.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-semantic-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us now to get started.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="rounded-full px-8 py-3 text-white font-bold bg-semantic-secondary hover:opacity-90"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
