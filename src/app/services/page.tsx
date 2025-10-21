// app/services/page.tsx
import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Therapy Services & Mental Health Support | Mind Mentor",
  description:
    "Professional online therapy services for depression, anxiety, stress, and more. Get matched with licensed therapists and start your mental health journey today.",
  keywords:
    "online therapy, mental health services, counseling, therapy sessions, depression treatment, anxiety help",
  openGraph: {
    title: "Therapy Services & Mental Health Support | Mind Mentor",
    description:
      "Professional online therapy services with licensed therapists",
    type: "website",
  },
};

// Mock data - replace with actual API calls
const servicesData = {
  therapyServices: [
    {
      id: 1,
      title: "Individual Therapy",
      description:
        "One-on-one sessions with licensed therapists tailored to your specific needs and goals.",
      features: [
        "Personalized treatment plans",
        "50-minute sessions",
        "Weekly or bi-weekly meetings",
        "Progress tracking",
      ],
      icon: "👤",
      price: "$120/session",
      duration: "50 min sessions",
    },
    {
      id: 2,
      title: "Couples Counseling",
      description:
        "Strengthen your relationship with professional guidance and communication tools.",
      features: [
        "Conflict resolution",
        "Communication skills",
        "Intimacy building",
        "Relationship goals",
      ],
      icon: "💑",
      price: "$150/session",
      duration: "60 min sessions",
    },
    {
      id: 3,
      title: "Teen Therapy",
      description:
        "Specialized support for adolescents dealing with school, social, and family challenges.",
      features: [
        "Age-appropriate approaches",
        "Parent involvement options",
        "School support",
        "Social skills",
      ],
      icon: "🎒",
      price: "$110/session",
      duration: "45 min sessions",
    },
    {
      id: 4,
      title: "Group Therapy",
      description:
        "Share experiences and learn from others in a supportive, structured group setting.",
      features: [
        "Peer support",
        "Shared experiences",
        "Cost-effective",
        "Multiple perspectives",
      ],
      icon: "👥",
      price: "$60/session",
      duration: "90 min sessions",
    },
  ],
  specialties: [
    {
      title: "Anxiety & Stress",
      description:
        "Manage anxiety disorders, panic attacks, and daily stress with evidence-based techniques.",
      icon: "😰",
    },
    {
      title: "Depression",
      description:
        "Comprehensive treatment for major depression, seasonal affective disorder, and mood issues.",
      icon: "😔",
    },
    {
      title: "Trauma & PTSD",
      description:
        "Heal from traumatic experiences with trauma-informed care and EMDR therapy.",
      icon: "🛡️",
    },
    {
      title: "Relationship Issues",
      description:
        "Improve communication, resolve conflicts, and build healthier relationships.",
      icon: "💞",
    },
    {
      title: "Career Counseling",
      description:
        "Navigate career transitions, workplace stress, and professional development.",
      icon: "💼",
    },
    {
      title: "Self-Esteem",
      description:
        "Build confidence, self-worth, and positive self-image through targeted therapy.",
      icon: "⭐",
    },
  ],
  pricingPlans: [
    {
      name: "Basic",
      price: "$99",
      period: "per session",
      features: [
        "Weekly 45-min sessions",
        "Messaging support",
        "Progress tracking",
        "Basic worksheets",
      ],
      recommended: false,
    },
    {
      name: "Standard",
      price: "$129",
      period: "per session",
      features: [
        "Weekly 50-min sessions",
        "Unlimited messaging",
        "Progress tracking",
        "Therapy worksheets",
        "Crisis support",
        "Session summaries",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "$179",
      period: "per session",
      features: [
        "Weekly 60-min sessions",
        "Unlimited messaging",
        "Progress tracking",
        "Custom worksheets",
        "24/7 crisis support",
        "Detailed session notes",
        "Family involvement options",
      ],
      recommended: false,
    },
  ],
  scholarshipWinners: [
    {
      id: 1,
      name: "Susannah Rogers",
      program: "Clinical Psychology",
      image: "/images/susannah.jpg",
      year: "2022",
      quote:
        "This scholarship enabled me to pursue my passion for mental health care.",
      achievements: "Research in cognitive behavioral therapy",
    },
    {
      id: 2,
      name: "Sooki Beeley",
      program: "Psychology",
      image: "/images/sooki.jpg",
      year: "2022",
      quote:
        "Mind Mentor support helped me focus on my studies without financial stress.",
      achievements: "Community mental health outreach",
    },
    {
      id: 3,
      name: "Ilana Hayutin",
      program: "Nursing-Psychiatric Mental Health Nurse Practitioner",
      image: "/images/ilana.jpg",
      year: "2022",
      quote:
        "The mentorship program combined with financial support was invaluable.",
      achievements: "Psychiatric emergency care research",
    },
    {
      id: 4,
      name: "Michael Chen",
      program: "Social Work",
      image: "/images/michael.jpg",
      year: "2022",
      quote: "This opportunity allowed me to serve underserved communities.",
      achievements: "School-based mental health programs",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      program: "Counseling Psychology",
      image: "/images/sarah.jpg",
      year: "2022",
      quote:
        "The scholarship empowered me to create positive change in mental health.",
      achievements: "Trauma-informed care implementation",
    },
  ],
};

export default function ServicesPage() {
  const servicesData = {
    services: [
      {
        title: "Individual Therapy",
        description: "One-on-one sessions with licensed therapists tailored to your specific needs and goals.",
        features: [
          "Personalized treatment plans",
          "50-minute sessions",
          "Weekly or bi-weekly meetings",
          "Flexible scheduling",
          "Secure video sessions"
        ],
        price: "$65-90",
        duration: "per session",
        popular: true
      },
      {
        title: "Couples Therapy",
        description: "Work together to improve communication and strengthen your relationship.",
        features: [
          "60-minute sessions",
          "Both partners included",
          "Relationship assessment",
          "Conflict resolution techniques",
          "Progress tracking"
        ],
        price: "$120",
        duration: "per session"
      },
      {
        title: "Group Therapy",
        description: "Connect with others facing similar challenges in a supportive group setting.",
        features: [
          "90-minute sessions",
          "Small group size (6-8 people)",
          "Peer support",
          "Professional facilitation",
          "Cost-effective option"
        ],
        price: "$40",
        duration: "per session"
      }
    ],
    specialties: [
      {
        title: "Depression & Anxiety",
        description: "Evidence-based treatments for mood disorders and anxiety management.",
        icon: "heart"
      },
      {
        title: "Trauma & PTSD",
        description: "Specialized therapy for processing trauma and building resilience.",
        icon: "award"
      },
      {
        title: "Relationship Issues",
        description: "Couples and family therapy to improve communication and connection.",
        icon: "message"
      }
    ]
  };

  return <ServicesClient servicesData={servicesData} />;
}
