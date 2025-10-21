// app/about/page.tsx - SERVER COMPONENT (no "use client")
import React from 'react';
import AboutClient from './AboutClient';

// Team member data
const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Clinical Director',
    bio: 'Licensed psychologist with 15+ years of experience in cognitive behavioral therapy.',
    image: '/team/sarah.jpg',
    specialties: ['Cognitive Behavioral Therapy', 'Anxiety', 'Depression']
  },
  {
    name: 'Michael Chen',
    role: 'Head of Technology',
    bio: 'Former tech lead at Google, passionate about making mental health accessible.',
    image: '/team/michael.jpg',
    specialties: ['Technology', 'Accessibility', 'Innovation']
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Therapist Network Manager',
    bio: 'LMFT specializing in family and relationship counseling.',
    image: '/team/maria.jpg',
    specialties: ['Family Therapy', 'Couples Counseling', 'Trauma']
  },
];

const scholarshipWinners = [
  {
    id: 1,
    name: 'Susannah Rogers',
    program: 'Clinical Psychology',
    image: '/images/susannah.jpg',
    year: '2022',
    quote: 'This scholarship enabled me to pursue my passion for mental health care.',
    achievements: 'Research in cognitive behavioral therapy'
  },
  {
    id: 2,
    name: 'Sooki Beeley',
    program: 'Psychology',
    image: '/images/sooki.jpg',
    year: '2022',
    quote: 'Mind Mentor support helped me focus on my studies without financial stress.',
    achievements: 'Community mental health outreach'
  },
  {
    id: 3,
    name: 'Ilana Hayutin',
    program: 'Nursing-Psychiatric Mental Health Nurse Practitioner',
    image: '/images/ilana.jpg',
    year: '2022',
    quote: 'The mentorship program combined with financial support was invaluable.',
    achievements: 'Psychiatric emergency care research'
  },
  {
    id: 4,
    name: 'Michael Chen',
    program: 'Social Work',
    image: '/images/michael.jpg',
    year: '2022',
    quote: 'This opportunity allowed me to serve underserved communities.',
    achievements: 'School-based mental health programs'
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    program: 'Counseling Psychology',
    image: '/images/sarah.jpg',
    year: '2022',
    quote: 'The scholarship empowered me to create positive change in mental health.',
    achievements: 'Trauma-informed care implementation'
  }
];

const stats = [
  { number: '50,000+', label: 'Clients Helped'},
  { number: '500+', label: 'Licensed Therapists'  },
  { number: '98%', label: 'Satisfaction Rate'},
  { number: '24/7', label: 'Support Available' },
];

// Values data
const values = [
  {
    icon: '🔒',
    title: 'Confidentiality',
    description: 'Your privacy is our top priority. All sessions are encrypted and confidential.',
  },
  {
    icon: '✅',
    title: 'Quality',
    description: 'Every therapist is licensed, accredited, and experienced.',
  },
  {
    icon: '💬',
    title: 'Accessibility',
    description: 'Affordable pricing and flexible scheduling to fit your life.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'Continuous training and support for our therapist network.',
  },
];

// FAQ Data
const faqs = [
  {
    question: "Is online therapy as effective as in-person therapy?",
    answer: "Yes, numerous studies have shown that online therapy can be just as effective as traditional in-person therapy for many mental health concerns. Research indicates that outcomes for conditions like depression, anxiety, and stress are comparable between online and in-person formats."
  },
  // ... rest of your FAQs
];

export default function AboutPage() {
  const aboutData = {
    team: teamMembers,
    values: values,
    faqs: faqs,
  };

  return (
    <AboutClient aboutData={aboutData} />
  );
}