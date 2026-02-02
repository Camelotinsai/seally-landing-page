"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelmetViewport } from "@/components/helmet-viewport";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenApp?: () => void;
}

export function Hero({ onOpenApp }: HeroProps) {
  const [mode, setMode] = useState<"fast" | "sealed">("fast");
  const [showVerified, setShowVerified] = useState(false);

  const handleModeChange = (newMode: "fast" | "sealed") => {
    setMode(newMode);
  };

  const handleOpenApp = () => {
    setShowVerified(true);
    setTimeout(() => {
      setShowVerified(false);
      onOpenApp?.();
    }, 1400);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16">
      {/* Warm gradient background - pink tones */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 30% 20%, oklch(0.68 0.12 350 / 0.1), transparent 50%),
            radial-gradient(ellipse 40% 30% at 70% 70%, oklch(0.78 0.08 50 / 0.06), transparent 40%)
          `,
        }}
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-8 lg:flex-row lg:gap-16 lg:py-16">
        {/* Left column - Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex">
            <span className="sticker-badge-cream">
              <span className="h-2 w-2 rounded-full bg-current animate-pulse-soft" />
              Hackathon Build
            </span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Seal your intent.
            <br />
            <span className="text-primary">Stay verified.</span>
          </h1>

          <p className="mx-auto mb-3 max-w-md text-pretty text-lg text-muted-foreground lg:mx-0">
            Privacy posture for Solana DeFi — designed to minimize exposure
            without promising magic.
          </p>
          
          {/* Cheeky microcopy */}
          <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground/80 lg:mx-0">
            Seal the deal — not the details.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              onClick={handleOpenApp}
              className="pill-btn group bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8"
            >
              Open App
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="pill-btn border-2 border-border bg-transparent text-foreground font-bold hover:bg-secondary"
              asChild
            >
              <a href="#how-it-works">Learn more</a>
            </Button>
          </div>

          {/* Micro-flow row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-2.5 border-2 border-border">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold bg-primary/20 text-primary">1</span>
              <span className="text-sm font-semibold text-foreground">Intent</span>
            </div>
            <div className="doodle-divider w-6" />
            <div className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-2.5 border-2 border-border">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Verified</span>
            </div>
            <div className="doodle-divider w-6" />
            <div className="flex items-center gap-2 rounded-2xl bg-secondary px-4 py-2.5 border-2 border-border">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold bg-primary/20 text-primary">3</span>
              <span className="text-sm font-semibold text-foreground">Execute</span>
            </div>
          </div>
        </div>

        {/* Right column - Helmet viewport */}
        <div className="w-full flex-1 lg:w-auto">
          <HelmetViewport
            mode={mode}
            onModeChange={handleModeChange}
            showVerified={showVerified}
          />
        </div>
      </div>
    </section>
  );
}
