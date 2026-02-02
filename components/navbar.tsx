"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenApp?: () => void;
}

export function Navbar({ onOpenApp }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenApp = () => {
    setDrawerOpen(!drawerOpen);
    onOpenApp?.();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Left: Logo + wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/seal_wif_hat.png"
            alt="Seally"
            width={40}
            height={40}
            className="rounded-full border-2 border-border"
          />
          <span className="text-xl font-extrabold text-foreground">Seally</span>
        </Link>

        {/* Right: Nav links + icons + CTA */}
        <div className="flex items-center gap-5">
          {/* Nav link */}
          <div className="hidden md:block">
            <Link
              href="#how-it-works"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </Link>
          </div>

          {/* Icon links */}
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="X (Twitter)"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Open App CTA */}
          <div className="relative">
            <Button
              onClick={handleOpenApp}
              className="pill-btn flex items-center gap-1.5 bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-5"
              size="sm"
            >
              Open App
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${drawerOpen ? "rotate-180" : ""}`} />
            </Button>

            {/* Launcher dropdown - sticker style */}
            {drawerOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setDrawerOpen(false)} />
                <div className="absolute right-0 top-full z-50 mt-3 w-80 overflow-hidden sticker-card">
                  <div className="px-4 pt-4 pb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Products
                    </p>
                  </div>

                  <div className="p-3 space-y-2">
                    {/* DEX */}
                    <div className="flex w-full items-start gap-3 rounded-2xl p-3 text-left border-2 border-transparent">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border-2 border-primary/30">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">Seally DEX</span>
                          <span className="sticker-badge">Coming Soon</span>
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">swap in peace, fren</p>
                      </div>
                    </div>

                    {/* Lending */}
                    <a
                      href="https://lending.seally.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-start gap-3 rounded-2xl p-3 text-left transition-all hover:bg-secondary border-2 border-transparent hover:border-primary/20"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border-2 border-primary/30">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">Seally Lending</span>
                          <span className="sticker-badge">BETA</span>
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">borrow without broadcasting</p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 text-muted-foreground" />
                    </a>

                    {/* Agent */}
                    <a
                      href="https://agent.seally.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-start gap-3 rounded-2xl p-3 text-left transition-all hover:bg-secondary border-2 border-transparent hover:border-primary/20"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border-2 border-primary/30">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">Seally Agent</span>
                          <span className="sticker-badge">BETA</span>
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">your silent co-pilot</p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
