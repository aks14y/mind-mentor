"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  MessageCircle,
  Eye,
  Lock,
  Clock,
  Phone,
} from "lucide-react";

export default function HeroComponent() {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-xl overflow-hidden border border-brand-100 mb-16">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Content */}
              <div className="bg-white p-8 md:p-12 flex-1 lg:border-r lg:border-gray-100 flex flex-col justify-center">
                <div className="flex flex-col space-y-6 items-start">
                  <h1 className="text-4xl font-bold text-brand-700 leading-tight">
                    Professional{" "}
                    <span className="text-yellow-600">
                      Counseling & Therapy Online
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600">
                    Connect with a licensed therapist via video, phone, or chat.
                    Get the help you need from the comfort of your home.
                  </p>

                  <div className="flex flex-col space-y-4 w-full">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-600" />
                      <span>Licensed and experienced professionals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-600" />
                      <span>Secure and confidential sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-600" />
                      <span>Match with your perfect therapist in 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-brand-600" />
                      <span>Cancel anytime with no commitment</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button
                      className="bg-brand-500 text-white hover:bg-brand-600 text-lg px-8 py-3"
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg">
                      Learn More
                    </Button>
                  </div>

                  <div className="flex items-center space-x-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-500" />
                    ))}
                    <span className="ml-2 text-gray-600">
                      Rated 4.8/5 from over 25,000 reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Image/Content */}
              <div className="bg-brand-50 text-brand-600 p-8 md:p-12 flex-1 flex flex-col justify-center relative overflow-hidden min-h-[400px]">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-500 opacity-20" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-mental-500 opacity-20" />

                <div className="flex flex-col space-y-6 items-start relative z-10">
                  <h2 className="text-2xl font-bold">Special Offer</h2>

                  <div>
                    <p className="text-lg line-through opacity-80">
                      $100-$150/week
                    </p>
                    <p className="text-3xl font-bold">$65-$90/week</p>
                    <p className="text-sm mt-2">Financial aid available</p>
                  </div>

                  <div className="flex flex-col space-y-3 items-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                      <span>20% off your first month</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                      <span>Get matched in less than 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                      <span>Switch therapists anytime at no cost</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="text-brand-600 border-brand-600 hover:opacity-90"
                    size="lg"
                  >
                    See If You Qualify
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Counseling Types Section */}
        <div className="mt-8">
          <div className="flex flex-col space-y-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col space-y-4 text-center">
                <h2 className="text-2xl font-bold text-brand-700">
                  Types of Counseling We Offer
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Choose the type of therapy that best fits your needs. Our
                  licensed professionals specialize in various approaches to
                  help you on your mental health journey.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {/* Individual Therapy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 items-start">
                      <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                        <MessageCircle className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col space-y-2 items-start">
                        <h3 className="text-lg font-semibold text-brand-700">
                          Individual Therapy
                        </h3>
                        <p className="text-sm text-gray-600">
                          One-on-one sessions to address personal challenges,
                          anxiety, depression, and life transitions with a
                          licensed therapist.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="bg-brand-50 text-brand-700">
                          50 min sessions
                        </Badge>
                        <Badge className="bg-brand-50 text-brand-700">
                          Available now
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Couples Therapy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 items-start">
                      <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                        <MessageCircle className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col space-y-2 items-start">
                        <h3 className="text-lg font-semibold text-brand-700">
                          Couples Therapy
                        </h3>
                        <p className="text-sm text-gray-600">
                          Work together to improve communication, resolve
                          conflicts, and strengthen your relationship with
                          professional guidance.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="bg-brand-50 text-brand-700">
                          60 min sessions
                        </Badge>
                        <Badge className="bg-brand-50 text-brand-700">
                          Available now
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Family Therapy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 items-start">
                      <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                        <Eye className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col space-y-2 items-start">
                        <h3 className="text-lg font-semibold text-brand-700">
                          Family Therapy
                        </h3>
                        <p className="text-sm text-gray-600">
                          Address family dynamics, improve communication, and
                          resolve conflicts to create a healthier family
                          environment.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="bg-brand-50 text-brand-700">
                          75 min sessions
                        </Badge>
                        <Badge className="bg-brand-50 text-brand-700">
                          Available now
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Group Therapy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 items-start">
                      <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                        <Lock className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col space-y-2 items-start">
                        <h3 className="text-lg font-semibold text-brand-700">
                          Group Therapy
                        </h3>
                        <p className="text-sm text-gray-600">
                          Connect with others facing similar challenges in a
                          supportive, confidential group setting led by a
                          professional therapist.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="bg-brand-50 text-brand-700">
                          90 min sessions
                        </Badge>
                        <Badge className="bg-brand-50 text-brand-700">
                          Limited spots
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Crisis Support Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 items-start">
                      <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                        <Clock className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col space-y-2 items-start">
                        <h3 className="text-lg font-semibold text-brand-700">
                          Crisis Support
                        </h3>
                        <p className="text-sm text-gray-600">
                          Immediate support for urgent mental health situations.
                          Available 24/7 for those in crisis or emotional
                          distress.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="bg-brand-50 text-brand-700">
                          24/7 available
                        </Badge>
                        <Badge className="bg-brand-50 text-brand-700">
                          Immediate response
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Online Therapy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4 items-start">
                      <div className="p-3 rounded-lg bg-brand-50 text-brand-600">
                        <Phone className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col space-y-2 items-start">
                        <h3 className="text-lg font-semibold text-brand-700">
                          Online Therapy
                        </h3>
                        <p className="text-sm text-gray-600">
                          Convenient video, phone, or chat sessions from the
                          comfort of your home. Same quality care, maximum
                          flexibility.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="bg-brand-50 text-brand-700">
                          Flexible timing
                        </Badge>
                        <Badge className="bg-brand-50 text-brand-700">
                          Available now
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Button
              className="bg-brand-500 text-white hover:bg-brand-600 text-lg px-8 py-3 mt-4"
              size="lg"
            >
              Find Your Perfect Match
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
