"use client";

import { Building2, Music2, Sparkles } from "lucide-react";
import { ParallaxCardImage } from "./parallax";

const ICONS = {
    building: Building2,
    sparkles: Sparkles,
    music: Music2,
} as const;

export type ServiceIcon = keyof typeof ICONS;

export function ServiceRowImage({
    src,
    alt,
    icon,
}: {
    src: string;
    alt: string;
    icon: ServiceIcon;
}) {
    const Icon = ICONS[icon];
    return (
        <div className="relative aspect-4/5 w-full max-w-[200px] overflow-hidden bg-surface rounded-lg shadow-sm">
            <ParallaxCardImage src={src} alt={alt} speed={0.18} />
            <div className="absolute inset-0 bg-background/10 group-hover:bg-background/5 transition-colors duration-700 pointer-events-none" />
            <Icon className="absolute bottom-3 left-3 h-5 w-5 text-gold z-10" strokeWidth={1} />
        </div>
    );
}
