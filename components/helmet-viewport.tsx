"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Zap, CheckCircle } from "lucide-react";

interface HelmetViewportProps {
  mode: "fast" | "sealed";
  onModeChange: (mode: "fast" | "sealed") => void;
  showVerified?: boolean;
}

export function HelmetViewport({
  mode,
  onModeChange,
  showVerified = false,
}: HelmetViewportProps) {
  const [bubbles] = useState(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      left: Math.random() * 50 + 25,
      delay: Math.random() * 2,
      size: Math.random() * 8 + 4,
      duration: 4 + Math.random() * 2,
    }))
  );

  const isSealed = mode === "sealed";

  return (
    <div
      className="relative mx-auto w-full max-w-sm"
      data-testid="helmet-wrapper"
    >
      {/* Outer container - chunky sticker card */}
      <div
        className="relative aspect-square overflow-hidden rounded-[28px]"
        data-testid="helmet-frame"
        style={{
          background:
            "linear-gradient(145deg, oklch(0.23 0.022 295), oklch(0.19 0.018 295))",
          border: "3px solid var(--border)",
          boxShadow: "5px 5px 0 0 oklch(0 0 0 / 0.25)",
        }}
      >
        {/* Inner ring */}
        <div
          className="absolute inset-4 rounded-3xl"
          style={{
            border: "2px solid var(--border)",
          }}
        />

        {/* Circular viewport */}
        <div className="absolute inset-10 overflow-hidden rounded-full bg-background border-3 border-border">
          <div className="relative h-full w-full">
            <Image
              src={isSealed ? "/images/ski_mask.png" : "/images/seal_wif_hat.png"}
              alt="Seally"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.95) saturate(1)" }}
              priority
            />

            {/* Haze overlay - pink tinted for sealed */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 40%, oklch(0.14 0.012 300 / 0.2) 100%)",
              }}
            />

            {/* Bubbles - pink tinted */}
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute rounded-full"
                style={{
                  left: `${bubble.left}%`,
                  bottom: "-10px",
                  width: bubble.size,
                  height: bubble.size,
                  backgroundColor: "oklch(0.68 0.12 350 / 0.4)",
                  animation: `float-bob ${bubble.duration}s ease-in-out infinite`,
                  animationDelay: `${bubble.delay}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Verified stamp */}
        {showVerified && (
          <div className="animate-stamp-pop absolute inset-0 z-20 flex items-center justify-center">
            <div className="verified-stamp">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">VERIFIED</span>
            </div>
          </div>
        )}

        {/* Mode toggle - chunky pill */}
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
          <div className="flex overflow-hidden rounded-full bg-secondary p-1.5 border-2 border-border">
            <button
              onClick={() => onModeChange("fast")}
              className={`flex cursor-pointer items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                !isSealed
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="h-4 w-4" />
              Fast
            </button>
            <button
              onClick={() => onModeChange("sealed")}
              className={`flex cursor-pointer items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                isSealed
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Shield className="h-4 w-4" />
              Sealed
            </button>
          </div>
        </div>

        {/* Mode label - sticker badge */}
        <div className="absolute top-5 left-5 z-10">
          <span className="sticker-badge">
            {isSealed ? "SEALED" : "FAST"}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-center text-sm font-medium text-muted-foreground">
        {isSealed
          ? "less noise, more stealth"
          : "gotta go fast (with standard exposure)"}
      </p>
    </div>
  );
}
