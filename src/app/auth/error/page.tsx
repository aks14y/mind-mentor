"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration.";
      case "AccessDenied":
        return "Access was denied. You may not have permission to sign in.";
      case "Verification":
        return "The verification token has expired or has already been used.";
      case "Default":
        return "An error occurred during authentication.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="rounded-xl shadow-xl">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Authentication Error
              </h1>
              
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {getErrorMessage(error)}
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-brand-500 text-white hover:bg-brand-600"
                >
                  <Link href="/auth/signin">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  asChild
                  className="w-full"
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <p>If this problem persists, please contact our support team.</p>
                <p className="mt-2">
                  <Link href="/contact" className="text-brand-600 hover:text-brand-700">
                    Get Help
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}