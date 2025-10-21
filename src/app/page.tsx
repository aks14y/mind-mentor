"use client";

import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroComponent from "./Hero";
import "react-multi-carousel/lib/styles.css";
import WaveDivider from "@/components/ui/wave-divider";
import SectionHeader from "@/components/ui/section-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-brand-600">
        <div className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl px-4 py-2 mb-2 text-yellow-500">
                  Trusted by 50,000+ People
                </h1>
                <h1 className="text-4xl font-bold leading-tight mb-4 text-yellow-500">
                  Your Journey to Better Mental Health Starts Here
                </h1>
                <p className="text-xl text-yellow-100 leading-relaxed font-medium">
                  Your personal mental health companion
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <Button 
                    className="text-white bg-brand-500 hover:bg-brand-600 text-lg rounded-full px-8 py-3 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                    asChild
                  >
                    <a href="/auth/signin">Get Started</a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-brand-500 hover:bg-brand-50 text-lg rounded-full px-8 py-3 transform hover:-translate-y-1 transition-all duration-200"
                    asChild
                  >
                    <a href="/how-it-works">How It Works</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <WaveDivider color="white" flip={true} bgColor="#1E5A7A" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            eyebrow="Getting Started" 
            title="How Mind Mentor Works" 
            subtitle="Simple steps to start your mental wellness journey" 
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="pt-8">
            <HeroComponent />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
