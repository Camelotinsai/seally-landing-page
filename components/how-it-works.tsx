import { Target, CheckCircle2, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Intent",
    description: "You state what you want to do.",
    micro: "tell us your secrets",
  },
  {
    icon: CheckCircle2,
    title: "Verified",
    description: "Rules and checks confirm execution conditions.",
    micro: "trust but verify",
  },
  {
    icon: PlayCircle,
    title: "Execute",
    description: "Action runs with minimized exposure.",
    micro: "sealed and delivered",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      {/* Pink gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, oklch(0.68 0.12 350 / 0.06), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            A simple, non-technical explanation of the Seally approach.
          </p>
        </div>

        {/* Doodle divider connecting steps */}
        <div className="doodle-divider absolute left-1/2 top-44 hidden w-2/3 -translate-x-1/2 md:block" />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Icon - sticker card style */}
              <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl sticker-card">
                <step.icon className="h-9 w-9 text-primary" />
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground border-2 border-background">
                  {index + 1}
                </div>
              </div>

              <h3 className="mb-2 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-1">{step.description}</p>
              <p className="text-xs text-muted-foreground/70">
                {step.micro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
