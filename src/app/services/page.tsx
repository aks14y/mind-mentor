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
