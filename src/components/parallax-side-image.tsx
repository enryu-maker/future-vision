"use client";

import { ParallaxImage } from "./parallax";

export function ParallaxSideImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative aspect-4/5 overflow-hidden rounded-xl shadow-md">
            <ParallaxImage src={src} alt={alt} speed={0.32} scale={1.12} opacity={1} />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 55%, oklch(0.18 0.02 55 / 0.2) 100%)" }}
            />
        </div>
    );
}
