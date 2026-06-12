"use client";

import { ParallaxImage } from "./parallax";

export function ParallaxSideImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative aspect-4/5 overflow-hidden">
            <ParallaxImage src={src} alt={alt} speed={0.32} scale={1.12} opacity={1} />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.14 0.005 60 / 0.55) 100%)" }}
            />
        </div>
    );
}
