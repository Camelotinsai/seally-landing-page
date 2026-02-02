import { ShieldCheck, ArrowRight } from "lucide-react";

export function SeallyVerified() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div 
          className="relative overflow-hidden rounded-[28px] p-8 md:p-12 sticker-card"
          style={{
            borderWidth: "3px",
            borderColor: "oklch(0.68 0.12 350 / 0.3)",
            boxShadow: "6px 6px 0 0 oklch(0.68 0.12 350 / 0.15)",
          }}
        >
          {/* Background accent - pink */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 40% 40% at 90% 20%, oklch(0.68 0.12 350 / 0.08), transparent 50%)",
            }}
          />

          <div className="relative grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Left */}
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 border-2 border-primary/40">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>

              {/* Stamp badge */}
              <div className="mb-5 inline-block">
                <span className="sticker-badge">
                  VERIFIED
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Seally Verified
              </h2>

              <p className="text-lg text-muted-foreground">
                Trust comes from checks, not promises.
              </p>
              <p className="mt-1 text-sm text-muted-foreground/70">
                we check so you don{"'"}t have to trust
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {[
                  "Verification happens before execution — not after.",
                  "Conditions are checked, not assumed.",
                  "No audit claims — designed to demonstrate the approach.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 border-2 border-primary/30">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
