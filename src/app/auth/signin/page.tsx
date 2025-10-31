"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

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
        router.push("/dashboard");
        router.refresh();
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
        redirect: false,
      });
      if (result?.error) {
        setError("Google sign-in failed. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-semantic-primary/10">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left - form panel */}
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
                      Welcome to Mind Mentor
                    </h1>
                    <p className="text-sm text-semantic-body">
                      Sign in to access your personalized mental health
                      dashboard
                    </p>
                  </div>

                  {error && (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

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
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
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
                      </div>

                      <Button
                        type="submit"
                        className="bg-semantic-secondary text-white hover:opacity-90 text-lg py-3 w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </div>
                  </form>

                  {process.env.NEXT_PUBLIC_GOOGLE_ENABLED === "true" && (
                    <>
                      <div className="flex items-center w-full">
                        <div className="flex-1 border-t border-gray-300" />
                        <span className="px-3 text-sm text-semantic-body">
                          OR
                        </span>
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
                    <p className="text-sm text-semantic-body">
                      Demo credentials: demo@example.com / demo123
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => {
                          setEmail("demo@example.com");
                          setPassword("demo123");
                        }}
                        className="text-semantic-primary"
                      >
                        Fill Demo Credentials
                      </Button>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => router.push("/")}
                        className="text-semantic-primary"
                      >
                        Back to Home
                      </Button>
                    </div>
                    <p className="text-sm text-semantic-body mt-2">
                      No account yet?{" "}
                      <a
                        href="/auth/signup"
                        className="text-semantic-primary hover:underline"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right - decorative panel */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-semantic-primary to-semantic-primary/70 p-12 relative overflow-hidden">
          <div className="max-w-lg w-full space-y-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Confidential therapy, real progress
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  Every session is private and encrypted. Show up as you
                  are—your story stays with your therapist.
                </p>
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                🧠
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/90 rounded-xl p-4 shadow-md text-semantic-primary">
                <p className="text-sm">Licensed Therapists</p>
                <p className="text-xs text-semantic-body mt-1">
                  Work with qualified professionals who specialize in your
                  goals.
                </p>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-md text-semantic-primary">
                <p className="text-sm">Personalized Care</p>
                <p className="text-xs text-semantic-body mt-1">
                  Evidence‑based approaches tailored to your needs and schedule.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-32 -bottom-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
