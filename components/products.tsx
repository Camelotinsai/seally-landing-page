"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "dex",
    name: "DEX",
    title: "Seally DEX",
    description: "Swap tokens with reduced pre-trade exposure.",
    micro: "swap in peace, fren",
    features: ["FAST or SEALED execution modes", "Minimized transaction footprint"],
    status: "BETA",
    cta: "Open DEX",
    href: "https://swap.seally.app",
  },
  {
    id: "lending",
    name: "Lending",
    title: "Seally Lending",
    description: "Open positions with selective disclosure.",
    micro: "borrow without broadcasting",
    features: ["Containment-first defaults", "Configurable exposure"],
    status: "BETA",
    cta: "Open Lending",
    href: "https://lending.seally.app",
  },
  {
    id: "agent",
    name: "Agent",
    title: "Seally Agent",
    description: "Guided actions under user-defined constraints.",
    micro: "your silent co-pilot",
    features: ["Never acts without user approval", "Constraint-based execution"],
    status: "BETA",
    cta: "Open Agent",
    href: "https://agent.seally.app",
  },
];

export function Products() {
  const [activeTab, setActiveTab] = useState("dex");

  const activeProduct = products.find((p) => p.id === activeTab);

  return (
    <section className="relative py-24">
      {/* Background - pink tones */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 40% 35% at 50% 50%, oklch(0.68 0.12 350 / 0.05), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Products
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Privacy-focused tools for Solana DeFi.
          </p>
        </div>

        {/* Tab navigation - chunky pills */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex overflow-hidden rounded-full bg-secondary p-1.5 border-2 border-border">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activeTab === product.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product content - sticker card */}
        {activeProduct && (
          <div 
            className="mx-auto max-w-lg rounded-[24px] p-8 text-center sticker-card"
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <h3 className="text-2xl font-extrabold text-foreground">
                {activeProduct.title}
              </h3>
              <span className="sticker-badge">
                {activeProduct.status}
              </span>
            </div>

            <p className="mb-1 text-muted-foreground">
              {activeProduct.description}
            </p>
            <p className="mb-6 text-sm text-muted-foreground/70">
              {activeProduct.micro}
            </p>

            <ul className="mb-8 inline-flex flex-col gap-3 text-left">
              {activeProduct.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div>
              {activeProduct.comingSoon ? (
                <span className="sticker-badge">Coming Soon</span>
              ) : (
                <Button
                  asChild
                  className="pill-btn bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8"
                >
                  <a
                    href={activeProduct.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {activeProduct.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
