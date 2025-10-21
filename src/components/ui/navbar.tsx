"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Settings, 
  Phone, 
  Calendar,
  ChevronDown,
  User,
  LogOut
} from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onToggle = () => setIsOpen(!isOpen);

  if (!mounted) {
    return (
      <div className="bg-white shadow-lg border-b border-brand-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div>
              <Link href="/">
                <span className="text-2xl font-bold text-brand-600 hover:text-brand-700 transition-colors duration-200">
                  Mind Mentor
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="hover:bg-brand-50">
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm" className="hover:bg-brand-50">
                  About
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="sm" className="hover:bg-brand-50">
                  Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="hover:bg-brand-50">
                  Contact
                </Button>
              </Link>
              <Link href="/appointments">
                <Button variant="ghost" size="sm" className="hover:bg-brand-50">
                  Appointments
                </Button>
              </Link>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg border-b border-brand-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div>
            <Link href="/">
              <span className="text-2xl font-bold text-brand-600 hover:text-brand-700 transition-colors duration-200">
                Mind Mentor
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                About
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                Contact
              </Button>
            </Link>
            <Link href="/appointments">
              <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                Appointments
              </Button>
            </Link>

            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={session.user?.image || undefined} />
                        <AvatarFallback>
                          {session.user?.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden lg:block">{session.user?.name || "User"}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/signin">
                  <Button variant="ghost" size="sm" className="hover:bg-brand-50 transition-all duration-200">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signin">
                  <Button size="sm" className="bg-brand-500 text-white hover:bg-brand-600 transition-all duration-200">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="md:hidden hover:bg-brand-50 transition-all duration-200"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-1 p-4">
                <Link href="/" onClick={onToggle}>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link href="/about" onClick={onToggle}>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Info className="mr-2 h-4 w-4" />
                    About
                  </Button>
                </Link>
                <Link href="/services" onClick={onToggle}>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Settings className="mr-2 h-4 w-4" />
                    Services
                  </Button>
                </Link>
                <Link href="/contact" onClick={onToggle}>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </Link>
                <Link href="/appointments" onClick={onToggle}>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Appointments
                  </Button>
                </Link>

                {session ? (
                  <>
                    <Link href="/dashboard" onClick={onToggle}>
                      <Button variant="ghost" className="w-full justify-start" size="lg">
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      size="lg"
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        onToggle();
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link href="/auth/signin" onClick={onToggle}>
                    <Button className="w-full bg-brand-500 text-white hover:bg-brand-600" size="lg">
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
