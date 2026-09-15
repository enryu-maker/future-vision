"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { GoldButton, Monogram } from "./luxury";
import { ParallaxContent } from "./parallax";

const HIGHLIGHTS = [
    "20+ Years of Experience",
    "1000+ Successful Events",
    "Trusted Across the UAE",
    "Professional Event Management Team",
] as const;

export function HomeHero({ images }: { images: string[] }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const id = window.setInterval(() => {
            setActive((i) => (i + 1) % images.length);
        }, 3500);
        return () => window.clearInterval(id);
    }, [images.length]);

    return (
        <section className="relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden bg-[#0b0c0e]">
            {images.map((src, i) => (
                <div
                    key={src}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: i === active ? 1 : 0 }}
                    aria-hidden={i !== active}
                >
                    <img
                        src={src}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover scale-105"
                    />
                </div>
            ))}

            {/* Slate overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, oklch(0.18 0.01 250 / 0.55) 0%, oklch(0.14 0.01 250 / 0.72) 45%, oklch(0.1 0.008 250 / 0.88) 100%)",
                }}
            />
            <div
                className="absolute inset-0 opacity-40 mix-blend-soft-light"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")",
                }}
            />

            <ParallaxContent
                className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-28 sm:px-10 sm:py-32 lg:px-12"
                speed={0.06}
            >
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <Monogram size="hero" className="[&_img]:object-center" />

                    <h1 className="mt-8 font-display font-bold leading-[1.08] tracking-[-0.02em] text-[clamp(1.85rem,4.8vw,3.75rem)] text-white">
                        We are one of the{" "}
                        <span className="text-orange-500">BEST</span> Event Management company in Dubai, Creating Extraordinary Events Across the UAE.
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/88 sm:text-lg">
                        For over 20 years, Future Vision Events has been delivering world-class corporate events, exhibitions, weddings, gala dinners, product launches, and entertainment experiences with creativity, precision, and excellence.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <GoldButton to="/corporate-events" variant="solid">
                            Our Services
                        </GoldButton>
                        <GoldButton
                            to="/contact"
                            variant="outline"
                            className="border-white! text-white! hover:border-orange-500! hover:bg-orange-500! hover:text-white!"
                        >
                            Contact Us
                        </GoldButton>
                    </div>

                    <ul className="mt-10 flex flex-wrap justify-center gap-3">
                        {HIGHLIGHTS.map((item) => (
                            <li
                                key={item}
                                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-orange-500/25 sm:text-[0.95rem]"
                            >
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </ParallaxContent>
        </section>
    );
}
