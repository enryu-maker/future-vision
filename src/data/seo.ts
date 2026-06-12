import type { Metadata } from "next";
import { SITE } from "./contact";

export const UAE_KEYWORDS = [
    "Event Management Company Dubai",
    "Event Planner Dubai",
    "Event Organizers Dubai",
    "Event Management Services Dubai",
    "Corporate Event Management Dubai",
    "Corporate Event Planner Dubai",
    "Exhibition Management Company Dubai",
    "Conference Organizer Dubai",
    "Event Production Company Dubai",
    "Product Launch Event Agency Dubai",
    "Gala Dinner Organizer Dubai",
    "Luxury Event Planner Dubai",
    "Wedding Planner Dubai",
    "Wedding Event Management Dubai",
    "Party Planner Dubai",
    "MICE Events Dubai",
    "Exhibition Stand Contractor Dubai",
    "Trade Show Organizer Dubai",
    "Brand Activation Agency Dubai",
    "Experiential Marketing Agency Dubai",
    "Best Event Management Company in Dubai",
    "Top Event Planners in Dubai",
    "Corporate Event Management Services Dubai",
    "Luxury Wedding Planner Dubai",
    "Exhibition and Event Management Company Dubai",
    "Product Launch Event Management Dubai",
    "Annual Gala Dinner Organizer Dubai",
    "Event Production and Management Dubai",
    "Event Management Agency UAE",
    "Conference Management Company Dubai",
    "Team Building Event Organizer Dubai",
    "Corporate Entertainment Company Dubai",
    "Team Building Events Dubai",
    "Business Event Planner Dubai",
    "Corporate Gala Dinner Dubai",
    "Expo Event Management Dubai",
    "Marketing Event Company Dubai",
    "Corporate Brand Activation Dubai",
    "Wedding Organizer Dubai",
    "Wedding Management Company Dubai",
    "Destination Wedding Planner Dubai",
    "Beach Wedding Planner Dubai",
    "Indian Wedding Planner Dubai",
    "Wedding Decoration Dubai",
    "Award Ceremony Organizer Dubai",
    "Entertainment Agency Dubai",
    "Event Performers Dubai",
    "Artist Management Company Dubai",
    "Corporate Entertainment Dubai",
    "Live Entertainment Dubai",
    "Event Management Company UAE",
    "Event Planner Abu Dhabi",
    "Corporate Events Dubai",
    "Wedding Planning Dubai",
    "Luxury Events Dubai",
    "Brand Activations Dubai",
    "Festivals & Entertainment Events Dubai",
] as const;

export const DEFAULT_DESCRIPTION =
    "Best Event Management Company in Dubai — Future Vision offers Corporate Event Management Dubai, Wedding Planner Dubai, Conference Organizer Dubai, Exhibition Management Company Dubai, Product Launch Event Agency Dubai, Gala Dinner Organizer Dubai, and Live Entertainment Dubai across UAE.";

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
