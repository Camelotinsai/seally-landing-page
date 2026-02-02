import { Zap, Shield, Check } from "lucide-react";

const modes = [
  {
    name: "FAST",
    icon: Zap,
    description: "STANDARD EXECUTION",
    features: [
      "Direct Routing (Raydium)",
      "Max Speed (400ms)",
      "Public Visibility",
    ],
    accent: false,
  },
  {
    name: "SEALED",
    icon: Shield,
    description: "PRIVACY-PRESERVING",
    features: [
      "Agentic TEE Routing",
      "MagicBlock Ephemeral Rollup",
      "Reduced Linkability",
    ],
    accent: true,
    footer: {
      left: "Verified by Seal",
      right: "Powered by Inco + Arcium",
    },
  },
];

export function FastVsSealed() {
  return (
    <section className="relative py-24">
      {/* Background - warm pink tones */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 35% 25% at 25% 50%, oklch(0.78 0.08 50 / 0.05), transparent 50%),
            radial-gradient(ellipse 35% 25% at 75% 50%, oklch(0.68 0.12 350 / 0.07), transparent 50%)
          `,
        }}
      />

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
            One App. Two Modes.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <div
              key={mode.name}
              className={`relative overflow-hidden rounded-[24px] p-7 transition-all duration-200 sticker-card ${
                mode.accent ? "border-primary/40" : ""
              }`}
              style={{
                borderWidth: mode.accent ? "3px" : "2px",
                boxShadow: mode.accent 
                  ? "5px 5px 0 0 oklch(0.68 0.12 350 / 0.2)"
                  : "4px 4px 0 0 oklch(0 0 0 / 0.25)",
              }}
            >
              {/* Icon */}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl border-2 ${
                  mode.accent 
                    ? "bg-primary/15 border-primary/40" 
                    : "bg-secondary border-border"
                }`}
              >
                <mode.icon className={`h-7 w-7 ${mode.accent ? "text-primary" : "text-foreground"}`} />
              </div>

              <h3 className="mb-1 text-2xl font-extrabold text-foreground">
                {mode.name}
              </h3>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                {mode.description}
              </p>

              <ul className="space-y-3">
                {mode.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${
                      mode.accent ? "bg-primary/15" : "bg-secondary"
                    }`}>
                      <Check className={`h-3.5 w-3.5 ${mode.accent ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {mode.footer && (
                <div className="mt-6 flex items-center justify-between text-xs font-medium text-muted-foreground/80">
                  <span>{mode.footer.left}</span>
                  <span>{mode.footer.right}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
