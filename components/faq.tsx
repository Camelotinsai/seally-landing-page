"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this guaranteed privacy?",
    answer:
      "No. Seally is designed to reduce exposure, not eliminate observability. We make no promises of complete anonymity.",
    micro: "ngmi if you expect magic",
  },
  {
    question: "What's FAST vs SEALED?",
    answer:
      "FAST favors speed with standard exposure surface. SEALED increases containment cues and verification-focused execution with reduced exposure.",
    micro: "speed vs stealth — your call",
  },
  {
    question: "Is this production-ready?",
    answer:
      "This is a hackathon prototype demonstrating the approach. It is not audited and should not be used for significant value.",
    micro: "hackathon szn, fren",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      {/* Background - pink tones */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 40% 30% at 50% 80%, oklch(0.68 0.12 350 / 0.04), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-2xl px-6 relative">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
            FAQ
          </h2>
          <p className="text-muted-foreground">Common questions answered.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl transition-all duration-200 sticker-card ${
                openIndex === index ? "border-primary/40" : ""
              }`}
              style={{ 
                borderWidth: openIndex === index ? "3px" : "2px",
                boxShadow: openIndex === index 
                  ? "4px 4px 0 0 oklch(0.68 0.12 350 / 0.15)"
                  : "3px 3px 0 0 oklch(0 0 0 / 0.2)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-secondary border-2 border-border">
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="border-t-2 border-border px-5 py-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    {faq.micro}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
