import type { Metadata } from "next";
import { SITE } from "./contact";

export const UAE_KEYWORDS = [
    "event management Dubai",
    "event planners Dubai",
    "corporate events Dubai",
    "wedding planners Dubai",
    "wedding decorators Dubai",
    "Arabic wedding planners Dubai",
    "Indian wedding planners Dubai",
    "Western wedding Dubai",
    "entertainment Dubai",
    "live entertainment UAE",
    "event management company UAE",
    "staff party planners Dubai",
    "product launch Dubai",
    "exhibition stand Dubai",
    "Future Vision Events",
] as const;

export const DEFAULT_DESCRIPTION =
    "Future Vision Events & Weddings — leading event management and wedding planners in Dubai, UAE. Corporate events, Arabic, Indian & Western weddings, and live entertainment across Dubai, Sharjah and Abu Dhabi. 14+ years experience.";

export function pageMetadata({
    title,
    description,
    path = "/",
}: {
    title: string;
    description: string;
    path?: string;
}): Metadata {
    return {
        title,
        description,
        keywords: [...UAE_KEYWORDS],
        alternates: {
            canonical: path === "/" ? SITE.url : `${SITE.url}${path}`,
        },
        openGraph: {
            title,
            description,
            url: path === "/" ? SITE.url : `${SITE.url}${path}`,
            siteName: SITE.name,
            locale: "en_AE",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}
