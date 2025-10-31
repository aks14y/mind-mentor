// app/about/page.tsx - SERVER COMPONENT (no "use client")
import React from "react";
import AboutClient from "./AboutClient";

// Team member data
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Director",
    bio: "Licensed psychologist with 15+ years of experience in cognitive behavioral therapy.",
    image: "/team/sarah.jpg",
    specialties: ["Cognitive Behavioral Therapy", "Anxiety", "Depression"],
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    bio: "Former tech lead at Google, passionate about making mental health accessible.",
    image: "/team/michael.jpg",
    specialties: ["Technology", "Accessibility", "Innovation"],
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Therapist Network Manager",
    bio: "LMFT specializing in family and relationship counseling.",
    image: "/team/maria.jpg",
    specialties: ["Family Therapy", "Couples Counseling", "Trauma"],
  },
];

// Values data
const values = [
  {
    title: "Confidentiality",
    description:
      "Your privacy is fundamental. Sessions are end‑to‑end encrypted and protected by rigorous HIPAA controls so you can speak freely and safely.",
    points: [
      "HIPAA‑compliant infrastructure",
      "End‑to‑end encrypted sessions",
      "Strict data retention policies",
    ],
  },
  {
    title: "Clinical Quality",
    description:
      "We uphold high clinical standards. Every therapist is licensed, vetted, and supported with supervision, peer review, and continuous training.",
    points: [
      "Evidence‑based modalities (CBT, ACT, DBT)",
      "Outcome tracking and care reviews",
      "Ongoing professional development",
    ],
  },
  {
    title: "Accessibility",
    description:
      "Care fits your life. Flexible scheduling, device‑agnostic access, and financial aid ensure therapy is within reach—wherever you are.",
    points: [
      "Evening and weekend availability",
      "Financial aid and sliding‑scale options",
      "Multilingual therapist network",
    ],
  },
  {
    title: "Security by Design",
    description:
      "Security is built into every layer—from secure sign‑in to encrypted records—so clinicians can focus on care and you can focus on healing.",
    points: [
      "Least‑privilege access and continuous monitoring",
      "Encrypted-at‑rest and in‑transit data",
      "Independent security assessments",
    ],
  },
  {
    title: "Human‑Centered Technology",
    description:
      "Our tools support people, not the other way around. We design simple, reliable experiences that make it easy to show up and do the work.",
    points: [
      "Friction‑less onboarding and session reminders",
      "Accessible UI for all abilities",
      "Thoughtful, minimal notifications",
    ],
  },
  {
    title: "Measurable Progress",
    description:
      "Small steps add up. We provide clear goals, practical exercises, and regular check‑ins to help you notice change and sustain momentum.",
    points: [
      "Collaborative care plans",
      "Weekly micro‑tasks and reflections",
      "Transparent progress metrics",
    ],
  },
];

// FAQ Data
const faqs = [
  {
    question: "Is online therapy as effective as in-person therapy?",
    answer:
      "Yes, numerous studies have shown that online therapy can be just as effective as traditional in-person therapy for many mental health concerns. Research indicates that outcomes for conditions like depression, anxiety, and stress are comparable between online and in-person formats.",
  },
  {
    question: "How do I choose the right therapist?",
    answer:
      "After sign‑up, we ask a few questions about your goals, preferences, schedule, and any previous experience. Based on your answers, we recommend licensed therapists who match your needs. You can switch therapists at any time, at no additional cost.",
  },
  {
    question: "Are my sessions private and secure?",
    answer:
      "Absolutely. All sessions use end‑to‑end encryption and our systems follow HIPAA requirements. We apply strict access controls and never share your data without consent.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "You can cancel or reschedule from your Appointments page. We recommend doing so at least 24 hours in advance so your therapist can reallocate their time.",
  },
  {
    question: "Do you offer financial aid or sliding‑scale pricing?",
    answer:
      "Yes. We provide financial aid and sliding‑scale pricing options for eligible clients. During onboarding, you can indicate your budget and explore available plans.",
  },
  {
    question: "Can I use my HSA/FSA or insurance?",
    answer:
      "Many clients use HSA/FSA funds. Insurance coverage varies by plan and region—please check with your provider. We’re happy to supply superbills for reimbursement where applicable.",
  },
];

export default function AboutPage() {
  const aboutData = {
    team: teamMembers,
    values: values,
    faqs: faqs,
  };

  return <AboutClient aboutData={aboutData} />;
}
