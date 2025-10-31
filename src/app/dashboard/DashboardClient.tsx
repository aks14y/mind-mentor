"use client";

import { signOut } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import SectionHeader from "@/components/ui/section-header";
import WaveDivider from "@/components/ui/wave-divider";
import { LogOut } from "lucide-react";

interface DashboardClientProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  };
}

export default function DashboardClient({ session }: DashboardClientProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white py-12">
        <div className="max-w-full mx-auto px-4 md:px-24">
          <SectionHeader
            eyebrow="Overview"
            title="Dashboard"
            subtitle="Here's your personalized mental health overview"
          />
        </div>
      </div>
      <WaveDivider
        className="text-semantic-primary"
        variant="gradient"
        animate
      />

      <div className="max-w-6xl mx-auto px-4 md:px-24 py-10">
        <div className="flex flex-col space-y-8">
          {/* Welcome Section */}
          <Card className="rounded-2xl shadow-xl border">
            <CardContent className="p-6 md:p-8">
              <div className="flex justify-between items-center flex-wrap gap-6">
                <div className="flex flex-col space-y-2">
                  <Badge className="bg-semantic-primary/10 text-semantic-primary rounded-full px-3 py-1">
                    Dashboard
                  </Badge>
                  <h1 className="text-2xl font-bold text-semantic-primary">
                    Welcome back, {session.user?.name || "User"}!
                  </h1>
                  <p className="text-semantic-body">
                    Here&apos;s your personalized mental health overview
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={session.user?.image || undefined} />
                    <AvatarFallback>
                      {session.user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-lg border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-cardHeader">
                    Sessions Completed
                  </p>
                  <p className="text-3xl font-bold text-cardHeader">12</p>
                  <p className="text-sm text-semantic-body">+2 this week</p>
                </div>
                <Progress value={65} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-cardHeader">
                    Current Streak
                  </p>
                  <p className="text-3xl font-bold text-cardHeader">7 days</p>
                  <p className="text-sm text-semantic-body">Keep it up!</p>
                </div>
                <Progress value={45} className="mt-3" />
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-cardHeader">
                    Next Session
                  </p>
                  <p className="text-3xl font-bold text-cardHeader">Tomorrow</p>
                  <p className="text-sm text-semantic-body">2:00 PM</p>
                </div>
                <Progress value={30} className="mt-3" />
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="rounded-2xl shadow-lg border">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col space-y-6">
                <h2 className="text-xl font-semibold text-cardHeader">
                  Recent Activity
                </h2>

                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 border rounded-xl">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Individual Therapy Session</p>
                      <p className="text-sm text-semantic-body">
                        Completed 2 days ago
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Completed
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 border rounded-xl">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Mood Check-in</p>
                      <p className="text-sm text-semantic-body">
                        Completed yesterday
                      </p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      Completed
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 border rounded-xl">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Group Therapy Session</p>
                      <p className="text-sm text-semantic-body">
                        Scheduled for tomorrow
                      </p>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">
                      Upcoming
                    </Badge>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-semantic-body">Account</p>
                    <div className="flex flex-col items-end space-y-1">
                      <p className="text-sm font-medium">
                        {session.user?.email}
                      </p>
                      <p className="text-xs text-gray-500">
                        Member since {new Date().getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
