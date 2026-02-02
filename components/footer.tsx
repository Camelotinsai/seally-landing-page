import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-10 border-t-2 border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/seal_wif_hat.png"
              alt="Seally"
              width={36}
              height={36}
              className="rounded-full border-2 border-border"
            />
            <span className="text-xl font-extrabold text-foreground">Seally</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              X
            </a>
          </div>
        </div>

        {/* Doodle divider */}
        <div className="doodle-divider mt-8" />

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Designed to help reduce exposure — not a guarantee.
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            built by seals, for seals
          </p>
        </div>
      </div>
    </footer>
  );
}
