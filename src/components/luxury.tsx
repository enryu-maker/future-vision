import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo.png";

export function Monogram({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)} aria-label="Future Vision — home">
      <img
        src={logoUrl.src}
        alt="Future Vision — Events & Weddings"
        className="h-12 w-auto sm:h-14 object-contain transition-opacity duration-500 group-hover:opacity-90"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("eyebrow inline-block", className)}>{children}</span>;
}

export function Hairline({ className }: { className?: string }) {
  return <div className={cn("hairline", className)} role="separator" />;
}

type GoldButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "outline" | "solid" | "ghost";
  to?: string;
  as?: "a" | "button";
  children: ReactNode;
};

export function GoldButton({
  variant = "outline",
  to,
  as,
  className,
  children,
  ...rest
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.28em] font-normal transition-all duration-500";
  const styles = {
    outline:
      "border border-gold/70 text-gold hover:border-gold hover:bg-gold/5",
    solid:
      "bg-gold text-background hover:bg-gold-soft",
    ghost:
      "text-gold hover:text-gold-soft border-b border-gold/40 hover:border-gold rounded-none px-0 py-2",
  }[variant];

  const cls = cn(base, styles, className);

  if (to) {
    return (
      <Link href={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (as === "button") {
    return (
      <button className={cls} {...(rest as unknown as ComponentPropsWithoutRef<"button">)}>
        {children}
      </button>
    );
  }
  return (
    <a className={cls} {...rest}>
      {children}
    </a>
  );
}

export function SectionLabel({
  index,
  label,
}: {
  index?: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 text-gold">
      {index && <span className="font-sans text-[0.7rem] tracking-[0.28em]">{index}</span>}
      <span className="h-px w-10 bg-gold/50" />
      <span className="eyebrow text-gold!">{label}</span>
    </div>
  );
}

export function EditorialHeading({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-light text-cream leading-[1.02] tracking-[-0.015em]",
        Tag === "h1"
          ? "text-[clamp(2.75rem,7vw,6rem)]"
          : Tag === "h2"
            ? "text-[clamp(2rem,4.5vw,4rem)]"
            : "text-[clamp(1.5rem,2.5vw,2.25rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function AbstractBackdrop({
  hue = "neutral",
  className,
}: {
  hue?: "neutral" | "warm" | "deep";
  className?: string;
}) {
  // CSS-only "subtle abstract motion" — no photo dependency.
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden grain", className)} aria-hidden>
      <div
        className="absolute -top-1/4 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            hue === "warm"
              ? "radial-gradient(circle at center, oklch(0.32 0.04 70 / 0.55), transparent 60%)"
              : hue === "deep"
                ? "radial-gradient(circle at center, oklch(0.24 0.02 60 / 0.65), transparent 60%)"
                : "radial-gradient(circle at center, oklch(0.34 0.025 75 / 0.5), transparent 60%)",
          animation: "fv-drift 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-30%] right-[-10%] h-[80vh] w-[80vh] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.55 0.06 80 / 0.35), transparent 65%)",
          animation: "fv-drift 28s ease-in-out infinite reverse",
        }}
      />
      <div className="absolute inset-0" style={{
        background:
          "linear-gradient(180deg, transparent 0%, oklch(0.22 0.005 65 / 0.4) 60%, var(--background) 100%)",
      }} />
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="relative isolate overflow-hidden bg-surface py-32 sm:py-40">
      <AbstractBackdrop hue="warm" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Eyebrow>Begin</Eyebrow>
        <EditorialHeading className="mt-8">
          Let&rsquo;s create something <em className="not-italic text-gold">extraordinary</em>.
        </EditorialHeading>
        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground leading-relaxed">
          Every commission begins with a conversation. Share your vision and our atelier will reply within one business day.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <GoldButton to="/contact" variant="solid">Start Your Event</GoldButton>
          <GoldButton to="/portfolio" variant="outline">View Portfolio</GoldButton>
        </div>
      </div>
    </section>
  );
}