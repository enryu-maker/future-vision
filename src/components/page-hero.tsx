"use client";

import type { ReactNode } from "react";
import { AbstractBackdrop, Eyebrow, EditorialHeading } from "./luxury";
import { ParallaxContent, ParallaxImage } from "./parallax";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  hue?: "neutral" | "warm" | "deep";
  image?: string | { src: string };
}

export function PageHero({
  eyebrow,
  title,
  intro,
  hue = "neutral",
  image,
}: PageHeroProps) {
  const imageUrl = typeof image === "object" ? image.src : image;

  return (
    <section className="relative isolate overflow-hidden bg-background pt-44 pb-28 sm:pt-52 sm:pb-36">
      {imageUrl && (
        <>
          <ParallaxImage src={imageUrl} speed={0.4} scale={1.18} opacity={0.5} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.16 0.005 60 / 0.7) 0%, oklch(0.14 0.005 60 / 0.55) 50%, var(--background) 100%)",
            }}
          />
        </>
      )}
      <AbstractBackdrop hue={hue} className={imageUrl ? "mix-blend-soft-light" : undefined} />
      <ParallaxContent className="relative mx-auto max-w-[1400px] px-6 lg:px-12" speed={0.1}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <EditorialHeading as="h1" className="mt-8 max-w-5xl">
          {title}
        </EditorialHeading>
        {intro && (
          <p className="mt-10 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {intro}
          </p>
        )}
      </ParallaxContent>
    </section>
  );
}
