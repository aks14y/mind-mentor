"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Lock, AlertCircle } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError("Invalid credentials. Try demo@example.com / demo123");
      } else if (result?.ok) {
        // Success - redirect to dashboard
        router.push("/dashboard");
        router.refresh(); // Refresh to update session state
      } else {
        setError("Sign in failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await signIn("google", { 
        callbackUrl: "/dashboard",
        redirect: false 
      });
      
      if (result?.error) {
        setError("Google sign-in failed. Please try again.");
        setIsLoading(false);
      }
      // If successful, NextAuth will handle the redirect
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <Card className="rounded-xl shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-bold text-blue-700">
                  Welcome to Mind Mentor
                </h1>
                <p className="text-gray-600">
                  Sign in to access your personalized mental health dashboard
                </p>
              </div>

              {error && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="w-full">
                <form onSubmit={handleCredentialsSignIn}>
                  <div className="flex flex-col space-y-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="demo@example.com"
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
                          type="password"
                          placeholder="demo123"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="bg-blue-600 text-white hover:bg-blue-700 text-lg py-3 w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Only show Google sign-in if configured */}
              {process.env.NEXT_PUBLIC_GOOGLE_ENABLED === 'true' && (
                <>
                  <div className="flex items-center w-full">
                    <div className="flex-1 border-t border-gray-300" />
                    <span className="px-3 text-sm text-gray-500">OR</span>
                    <div className="flex-1 border-t border-gray-300" />
                  </div>

                  <Button
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    className="text-lg py-3 w-full"
                    disabled={isLoading}
                  >
                    <div className="w-5 h-5 mr-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjU2IDEyLjI1QzIyLjU2IDExLjQ3IDIyLjQ5IDEwLjcyIDIyLjM2IDEwSDEyVjE0LjI1SDE3Ljk2QzE3LjY2IDE1LjY2IDE2Ljg4IDE2Ljg4IDE1LjY4IDE3LjY4VjIwLjE0SDE5LjQ0QzIxLjA3IDE4LjY3IDIyLjU2IDE2LjY2IDIyLjU2IDEyLjI1WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNMTIgMjNDMTQuOTcgMjMgMTcuNDYgMjEuOTkgMTkuNDQgMjAuMTRMMTUuNjggMTcuNjhDMTQuNzYgMTguMzYgMTMuNDkgMTguNzUgMTIgMTguNzVDOS4wOSAxOC43NSA2LjU2IDE2LjY2IDUuNzcgMTMuOTJIMi44NlYxNi40NEM0Ljg0IDIwLjQzIDguMTcgMjMgMTIgMjNaIiBmaWxsPSIjMzRBNTUzIi8+CjxwYXRoIGQ9Ik01Ljc3IDEzLjkyQzUuNzcgMTMuMTcgNS43NyAxMi40MiA1Ljc3IDExLjY3SDEyVjE0LjI1SDkuNDRDOC4xNyAxNC4yNSA3LjA0IDEzLjE3IDUuNzcgMTMuOTJaIiBmaWxsPSIjRkJCQzA0Ii8+CjxwYXRoIGQ9Ik0xMiA1LjI1QzEzLjQ5IDUuMjUgMTQuNzYgNS42NCAxNS42OCA2LjMyTDE5LjQ0IDMuODZDMTcuNDYgMi4wMSAxNC45NyAxIDEyIDFDOC4xNyAxIDQuODQgMy41NyAyLjg2IDcuNTZMNy4wOSAxMS43NEM3Ljg4IDkuMDIgMTAuNDEgNi45MyAxMy4zMiA2LjkzSDEyVjUuMjVaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo=')] bg-contain bg-no-repeat" />
                    Continue with Google
                  </Button>
                </>
              )}

              <div className="flex flex-col space-y-2 text-center">
                <p className="text-sm text-gray-500">
                  Demo credentials: demo@example.com / demo123
                </p>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    setEmail("demo@example.com");
                    setPassword("demo123");
                  }}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Fill Demo Credentials
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => router.push("/")}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
