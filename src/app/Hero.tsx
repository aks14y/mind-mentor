"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/ui/wave-divider";

export default function HeroComponent() {
  return (
    <>
      <div className="bg-white">
        <div className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-full mx-auto px-4 md:px-44">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Copy */}
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <p className="text-lg font-semibold text-brand-500 mb-3">
                    Trusted by 50,000+ People
                  </p>
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-semantic-primary">
                    Your Journey to Better Mental Health Starts Here
                  </h1>
                  <p className="mt-5 text-lg md:text-xl text-semantic-body max-w-xl">
                    Simplify your path to wellness with guided support, smart
                    tools, and compassionate care—available whenever you need
                    it.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                >
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button
                      className="rounded-full px-8 py-3 text-white font-bold bg-semantic-secondary hover:opacity-90"
                      asChild
                    >
                      <a href="/auth/signin">Get Started</a>
                    </Button>
                    <Button
                      variant="ghost"
                      className="rounded-full px-8 py-3 font-bold ring-1 ring-gray-300 text-semantic-body hover:bg-white/60"
                      asChild
                    >
                      <a href="/how-it-works">Read Blog</a>
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right: Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/window.svg"
                    alt="Decorative wellness graphic"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider outside the white background to blend with the next section */}
      <WaveDivider
        className="text-semantic-primary"
        flip={true}
        variant="gradient"
        animate
        speed={16}
      />
    </>
  );
}
