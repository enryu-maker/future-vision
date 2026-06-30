"use client";

import type { ReactNode } from "react";
import { Eyebrow, EditorialHeading } from "./luxury";
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
  image,
}: PageHeroProps) {
  const imageUrl = typeof image === "object" ? image.src : image;

  return (
    <section className="relative isolate overflow-hidden bg-background border-b border-border/60">
      <div className={imageUrl ? "grid lg:grid-cols-2" : undefined}>
        {/* Text always on a solid panel — never over the photo */}
        <ParallaxContent
          className="relative z-10 flex flex-col justify-center bg-background px-6 pt-44 pb-16 sm:px-10 sm:pt-52 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16"
          speed={0.05}
        >
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <EditorialHeading as="h1" className="mt-8">
              {title}
            </EditorialHeading>
            {intro && (
              <p className="mt-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        </ParallaxContent>

        {imageUrl && (
          <div className="relative min-h-[32vh] sm:min-h-[36vh] lg:min-h-[min(70svh,42rem)] overflow-hidden">
            <ParallaxImage src={imageUrl} speed={0.28} scale={1.06} opacity={1} />
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, var(--background) 0%, transparent 28%)",
              }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, var(--background) 0%, oklch(0.99 0.006 95 / 0.45) 10%, transparent 24%)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
