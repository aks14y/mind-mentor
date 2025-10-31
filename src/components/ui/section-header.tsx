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
  className,
}: SectionHeaderProps) {
  const renderSplit = (text: string, className?: string) => {
    if (!text) return null;
    const parts = text.trim().split(/\s+/);
    if (parts.length <= 1) {
      return <span className={className}>{text}</span>;
    }
    const mid = Math.ceil(parts.length / 2);
    const first = parts.slice(0, mid).join(" ");
    const second = parts.slice(mid).join(" ");
    return (
      <span className={cn("inline", className)}>
        <span className="text-semantic-secondary">{first} </span>
        <span className="text-semantic-primary">{second}</span>
      </span>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center space-y-4",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center px-5 py-3 rounded-full bg-semantic-primary/10 text-sm font-medium">
          {renderSplit(eyebrow)}
        </div>
      )}
      <h2 className="text-4xl font-bold">{renderSplit(title)}</h2>
      {subtitle && <p className="text-lg max-w-2xl">{renderSplit(subtitle)}</p>}
    </div>
  );
}
