"use client";

import { ParallaxCardImage } from "./parallax";

export function GalleryCard({
    src,
    alt,
    eyebrow,
    title,
    subtitle,
}: {
    src: string;
    alt: string;
    eyebrow: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <article className="group relative aspect-4/5 overflow-hidden bg-surface rounded-lg shadow-sm">
            <ParallaxCardImage src={src} alt={alt} speed={0.22} />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, transparent 35%, oklch(0.18 0.02 55 / 0.75) 100%)",
                }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                <span className="eyebrow text-[0.58rem]! leading-relaxed text-gold-soft">{eyebrow}</span>
                <h3 className="mt-2 font-display text-lg sm:text-xl lg:text-2xl text-background leading-tight">{title}</h3>
                {subtitle && <p className="mt-1 text-xs text-background/70">{subtitle}</p>}
            </div>
        </article>
    );
}
