"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AbstractBackdrop, Eyebrow, GoldButton } from "./luxury";
import { SeoTags } from "./seo-tags";
import { ParallaxContent, ParallaxImage } from "./parallax";
import { SITE } from "@/data/contact";
import fvHeroLogo from "@/assets/FV-hero.png";

export function HomeHero({ imageSrc }: { imageSrc: string }) {
    return (
        <section className="relative isolate min-h-svh flex items-end overflow-hidden bg-background">
            <ParallaxImage src={imageSrc} speed={0.45} scale={1.2} opacity={0.8} />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, oklch(0.16 0.005 60 / 0.25) 0%, oklch(0.14 0.005 60 / 0.4) 45%, var(--background) 100%)",
                }}
            />
            <AbstractBackdrop hue="deep" className="mix-blend-soft-light" />
            <ParallaxContent className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 pb-24 pt-40" speed={0.1}>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-3xl">
                        <Eyebrow className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span>{SITE.tagline}</span>
                            <span className="text-gold/30 hidden sm:inline">&middot;</span>
                            <span>Dubai, UAE</span>
                        </Eyebrow>
                        <h1 className="mt-8 font-display font-light text-cream leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,5.5rem)]">
                            Best Event Management<br />
                            <em className="not-italic text-gold/95">Company in Dubai</em>
                        </h1>
                        <p className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                            {SITE.name} — Top Event Planners in Dubai for corporate events, weddings, and live entertainment across the UAE.
                        </p>
                        <SeoTags
                            className="mt-6"
                            compact
                            tags={["Event Management Company Dubai", "Event Planner Dubai", "Corporate Event Management Dubai", "Wedding Planner Dubai", "Live Entertainment Dubai"]}
                        />
                        <div className="mt-10 flex flex-wrap gap-4">
                            <GoldButton to="/portfolio" variant="solid">Our Services</GoldButton>
                            <GoldButton to="/contact" variant="outline">Contact Us</GoldButton>
                        </div>
                    </div>
                    
                    <div className="hidden lg:flex lg:w-1/3 xl:w-[400px] justify-end">
                        <Image
                            src={fvHeroLogo}
                            alt="Future Vision Logo"
                            className="w-full h-auto object-contain opacity-90 drop-shadow-2xl mix-blend-plus-lighter"
                            priority
                        />
                    </div>
                </div>
            </ParallaxContent>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70">
                <span className="eyebrow text-[0.6rem]!">Scroll</span>
                <ChevronDown className="h-4 w-4" style={{ animation: "fv-scroll-cue 2.4s ease-in-out infinite" }} />
            </div>
        </section>
    );
}
