"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please provide email and password.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        setSuccess("Account created. Redirecting to sign in...");
        setTimeout(() => router.push("/auth/signin"), 1200);
      } else {
        const data = await res.json();
        setError(data?.message || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-semantic-primary/10">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center py-12 px-6">
          <div className="w-full max-w-md">
            <Card className="rounded-2xl shadow-2xl bg-white border border-gray-100">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-center -mt-8">
                    <div className="w-14 h-14 rounded-full bg-semantic-primary/10 flex items-center justify-center text-semantic-primary font-bold shadow-sm">
                      MM
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-3xl font-extrabold text-semantic-primary">
                      Create an account
                    </h1>
                    <p className="text-sm text-semantic-body">
                      Sign up to start your journey with Mind Mentor
                    </p>
                  </div>

                  {error && (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {success && (
                    <div className="rounded-md bg-emerald-50 p-3 text-emerald-800 text-sm">
                      {success}
                    </div>
                  )}

                  <form onSubmit={handleRegister}>
                    <div className="flex flex-col space-y-4">
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-semantic-body">
                          Password should be at least 8 characters.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="bg-semantic-secondary text-white hover:opacity-90 text-lg py-3 w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating account..." : "Sign Up"}
                      </Button>
                    </div>
                  </form>

                  <div className="text-center text-sm text-semantic-body">
                    <p>
                      Already have an account?{" "}
                      <a
                        className="text-semantic-primary hover:underline"
                        href="/auth/signin"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-semantic-primary to-semantic-primary/70 p-12 relative overflow-hidden">
          <div className="max-w-lg w-full space-y-6 text-white">
            <h3 className="text-2xl font-semibold">Join Mind Mentor</h3>
            <p className="opacity-90">
              Create an account to track progress, save insights and get
              personalized recommendations.
            </p>
            <div className="bg-white/90 rounded-xl p-4 shadow-md text-semantic-primary">
              <p className="text-sm">
                Getting started is easy — we will guide you through the basics.
              </p>
            </div>
          </div>
          <div className="absolute -right-32 -bottom-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
