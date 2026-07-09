"use client";

import { ChevronDown } from "lucide-react";
import { Eyebrow, GoldButton, Monogram } from "./luxury";
import { SeoTags } from "./seo-tags";
import { ParallaxContent, ParallaxImage } from "./parallax";
import { SITE } from "@/data/contact";

export function HomeHero({ imageSrc }: { imageSrc: string }) {
    return (
        <section className="relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden bg-background">
            <ParallaxImage src={imageSrc} speed={0.38} scale={1.12} opacity={1} />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, oklch(0.12 0.02 55 / 0.4) 0%, oklch(0.1 0.015 50 / 0.72) 50%, oklch(0.08 0.01 50 / 0.9) 100%)",
                }}
            />

            <ParallaxContent
                className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-10 sm:py-36 lg:px-12"
                speed={0.06}
            >
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <Eyebrow className="text-orange-400!">Dubai, UAE</Eyebrow>

                    <Monogram size="hero" className="mt-6 sm:mt-8 [&_img]:object-center" />

                    <h1 className="mt-6 font-display font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(2rem,5vw,4.25rem)] text-orange-500 sm:mt-8">
                        Best Event Management<br />
                        <em className="not-italic text-orange-500">Company in Dubai</em>
                    </h1>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/88 sm:text-base">
                        {SITE.name} — Top Event Planners in Dubai for corporate events, weddings, and live entertainment across the UAE.
                    </p>

                    <SeoTags
                        className="mt-5 justify-center [&_li]:border-white/25 [&_li]:bg-white/10 [&_li]:text-white/90"
                        compact
                        tags={["Event Management Company Dubai", "Event Planner Dubai", "Corporate Event Management Dubai", "Wedding Planner Dubai", "Live Entertainment Dubai"]}
                    />

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <GoldButton to="/portfolio" variant="solid">Our Services</GoldButton>
                        <GoldButton to="/contact" variant="outline" className="border-white/70! text-white! hover:border-orange-400! hover:bg-white/10! hover:text-orange-400!">
                            Contact Us
                        </GoldButton>
                    </div>
                </div>
            </ParallaxContent>

            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-orange-400/90">
                <span className="eyebrow text-[0.6rem]! text-orange-400!">Scroll</span>
                <ChevronDown className="h-4 w-4" style={{ animation: "fv-scroll-cue 2.4s ease-in-out infinite" }} />
            </div>
        </section>
    );
}
