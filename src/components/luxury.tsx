import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo.png";
import { ParallaxContent, ParallaxReveal } from "./parallax";

export function Monogram({
  className,
  size = "nav",
}: {
  className?: string;
  size?: "nav" | "hero" | "footer";
}) {
  const sizes = {
    nav: "h-16 w-auto max-w-[14rem] sm:h-20 sm:max-w-[16rem] lg:h-[5rem] lg:max-w-[20rem]",
    hero: "h-[clamp(7rem,22vw,11.5rem)] w-auto max-w-[min(92vw,36rem)]",
    footer: "h-12 w-auto max-w-[12rem] sm:max-w-[14rem]",
  };

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center group shrink-0", className)}
      aria-label="Future Vision — home"
    >
      <img
        src={logoUrl.src}
        alt="Future Vision — Events & Weddings"
        className={cn(
          sizes[size],
          "object-contain object-left transition-opacity duration-500 group-hover:opacity-90",
        )}
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
    "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.28em] font-normal transition-all duration-500 text-center whitespace-nowrap";
  const styles = {
    outline:
      "border border-gold/80 text-gold hover:border-gold hover:bg-gold/8 shadow-sm",
    solid:
      "bg-gold text-primary-foreground hover:bg-gold-soft shadow-md shadow-gold/20",
    ghost:
      "text-gold hover:text-gold-soft border-b border-gold/50 hover:border-gold rounded-none px-0 py-2",
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
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gold max-w-full">
      {index && <span className="font-sans text-[0.7rem] tracking-[0.28em] shrink-0">{index}.</span>}
      {/* <span className="h-px w-10 bg-gold/50 shrink-0 hidden sm:block" /> */}
      <span className="eyebrow text-[0.8rem] text-gold! leading-relaxed">{label}</span>
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
          ? "text-[clamp(2.25rem,6vw,5rem)] leading-[1.05]"
          : Tag === "h2"
            ? "text-[clamp(1.75rem,3.5vw,3.25rem)] leading-[1.08]"
            : "text-[clamp(1.35rem,2vw,2rem)] leading-[1.12]",
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
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden grain", className)} aria-hidden>
      <div
        className="absolute -top-1/4 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            hue === "warm"
              ? "radial-gradient(circle at center, oklch(0.88 0.06 75 / 0.45), transparent 60%)"
              : hue === "deep"
                ? "radial-gradient(circle at center, oklch(0.82 0.05 70 / 0.35), transparent 60%)"
                : "radial-gradient(circle at center, oklch(0.9 0.04 85 / 0.4), transparent 60%)",
          animation: "fv-drift 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-30%] right-[-10%] h-[80vh] w-[80vh] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.78 0.08 60 / 0.25), transparent 65%)",
          animation: "fv-drift 28s ease-in-out infinite reverse",
        }}
      />
      <div className="absolute inset-0" style={{
        background:
          "linear-gradient(180deg, oklch(0.99 0.005 95 / 0.15) 0%, oklch(0.98 0.008 92 / 0.55) 60%, var(--background) 100%)",
      }} />
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="relative isolate overflow-hidden bg-surface py-32 sm:py-40 border-t border-border">
      <AbstractBackdrop hue="warm" />
      <ParallaxReveal className="relative mx-auto max-w-3xl px-6 text-center">
        <ParallaxContent speed={0.08}>
          <Eyebrow>Get in Touch</Eyebrow>
          <EditorialHeading className="mt-8">
            Plan your next <em className="not-italic text-gold">event in Dubai</em>
          </EditorialHeading>
          <p className="mx-auto mt-8 max-w-lg text-base text-muted-foreground leading-relaxed">
            Corporate events, weddings, conferences, exhibitions, product launches, gala dinners, and live entertainment — our team replies within one business day.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <GoldButton to="/contact" variant="solid">Contact Us</GoldButton>
            <GoldButton to="/portfolio" variant="outline">View Portfolio</GoldButton>
          </div>
        </ParallaxContent>
      </ParallaxReveal>
    </section>
  );
}