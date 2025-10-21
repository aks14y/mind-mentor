"use client";

import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/ui/navbar";
import SectionHeader from "@/components/ui/section-header";
import WaveDivider from "@/components/ui/wave-divider";
import { Mail, Shield, Download, Trash2, User2, Edit, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileClientProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      [key: string]: any;
    };
    [key: string]: any;
  };
}

export default function ProfileClient({ session }: ProfileClientProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [session]);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: session.user?.name || "",
      email: session.user?.email || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Your account" 
            title="Profile" 
            subtitle="Manage your personal information and preferences" 
          />
        </div>
      </div>
      <WaveDivider color="white" bgColor="#2C7A9E" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-8">
          {/* Profile Header */}
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-24 w-24 border-4 border-brand-100">
                    <AvatarImage src={session.user?.image || undefined} />
                    <AvatarFallback>
                      {session.user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <User2 size={22} />
                      <h1 className="text-2xl font-bold text-brand-700">
                        {session.user?.name || "User"}
                      </h1>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={18} />
                      <p className="text-gray-600 text-lg">
                        {session.user?.email}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className="bg-green-100 text-green-800">
                        Active Member
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800">
                        Premium Plan
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-6">
                <h2 className="text-xl font-semibold text-brand-700">
                  Profile Information
                </h2>

                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    {isEditing ? (
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    ) : (
                      <div className="text-lg p-3 bg-gray-50 rounded-md">
                        {session.user?.name || "Not provided"}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    {isEditing ? (
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="pl-10"
                        />
                      </div>
                    ) : (
                      <div className="text-lg p-3 bg-gray-50 rounded-md">
                        {session.user?.email || "Not provided"}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <div className="text-lg p-3 bg-gray-50 rounded-md">
                      {session.user?.image ? "Google Account" : "Email Account"}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Member Since</Label>
                    <div className="text-lg p-3 bg-gray-50 rounded-md">
                      {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-4 justify-end">
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleSave}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Account Statistics */}
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2">
                  <Shield size={18} />
                  <h2 className="text-xl font-semibold text-brand-700">
                    Security & Privacy
                  </h2>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your account is secured with industry-standard encryption.
                    All therapy sessions are confidential and HIPAA compliant.
                  </AlertDescription>
                </Alert>

                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Shield className="mr-2 h-4 w-4" />
                      Enable
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Data Export</p>
                      <p className="text-sm text-gray-600">Download your therapy data</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-gray-600">Permanently remove your account</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
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


