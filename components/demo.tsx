import { Play } from "lucide-react";

export function Demo() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Demo
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            See Seally in action.
          </p>
        </div>

        {/* Demo placeholder - sticker card */}
        <div className="mx-auto max-w-3xl">
          <div 
            className="relative aspect-video overflow-hidden rounded-[24px] sticker-card"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play button - chunky style */}
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border-3 border-primary/40 bg-primary/15">
                <Play className="ml-1 h-9 w-9 text-primary" />
              </div>
              <p className="text-lg font-bold text-foreground">
                Demo Loading...
              </p>
              <p className="mt-1 text-sm text-muted-foreground/70">
                the seal is preparing something
              </p>
            </div>

            {/* Dot pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
