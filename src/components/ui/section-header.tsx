"use client";

import React from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center space-y-4", className)}>
      {eyebrow && (
        <div className="inline-flex items-center px-5 py-3 rounded-full bg-brand-50 text-brand-600 text-sm font-medium">
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl font-bold text-brand-400">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
