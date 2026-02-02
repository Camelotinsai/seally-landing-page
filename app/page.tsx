"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { FastVsSealed } from "@/components/fast-vs-sealed";
import { SeallyVerified } from "@/components/seally-verified";
import { Products } from "@/components/products";
import { Demo } from "@/components/demo";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  const handleOpenApp = () => {
    // Trigger handled by navbar dropdown
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar onOpenApp={handleOpenApp} />
      <Hero onOpenApp={handleOpenApp} />
      <HowItWorks />
      <FastVsSealed />
      <SeallyVerified />
      <Products />
      <Demo />
      <FAQ />
      <Footer />
    </main>
  );
}
