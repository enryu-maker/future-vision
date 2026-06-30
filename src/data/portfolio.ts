import corpGalaBallroom from "@/assets/portfolio/portfolio-corporate-gala-ballroom.png";
import corpConferenceAida from "@/assets/portfolio/portfolio-corporate-conference-aida.png";
import corpGalaAwards from "@/assets/portfolio/portfolio-corporate-gala-awards.png";
import corpEmiratesNbd from "@/assets/portfolio/portfolio-corporate-emirates-nbd.png";
import corpWionSummit from "@/assets/portfolio/portfolio-corporate-wion-summit.png";
import corpOrchestra from "@/assets/portfolio/portfolio-corporate-orchestra.png";
import wedMandap from "@/assets/portfolio/portfolio-wedding-mandap.png";
import wedMarbleAisle from "@/assets/portfolio/portfolio-wedding-marble-aisle.png";
import wedBlushStage from "@/assets/portfolio/portfolio-wedding-blush-stage.png";
import wedBallroom from "@/assets/portfolio/portfolio-wedding-ballroom.png";
import entConcert from "@/assets/portfolio/portfolio-entertainment-concert.png";
import entShowgirls from "@/assets/portfolio/portfolio-entertainment-showgirls.png";
import entDancers from "@/assets/portfolio/portfolio-entertainment-dancers.png";
import entMagician from "@/assets/portfolio/portfolio-entertainment-magician.png";

export type PortfolioCategory = "Corporate" | "Weddings" | "Entertainment";

export const PORTFOLIO_ITEMS = [
    { t: "Corporate Gala Ballroom", tag: "Gala Dinner Organizer Dubai", place: "Dubai", cat: "Corporate" as const, image: corpGalaBallroom },
    { t: "Floral Wedding Mandap", tag: "Luxury Wedding Planner Dubai", place: "Dubai", cat: "Weddings" as const, image: wedMandap },
    { t: "Live Concert Dubai", tag: "Live Entertainment Dubai", place: "Dubai", cat: "Entertainment" as const, image: entConcert },
    { t: "International Conference", tag: "Conference Organizer Dubai", place: "Abu Dhabi", cat: "Corporate" as const, image: corpConferenceAida },
    { t: "Marble Aisle Wedding", tag: "Wedding Decoration Dubai", place: "Dubai", cat: "Weddings" as const, image: wedMarbleAisle },
    { t: "Carnival Showgirls", tag: "Corporate Entertainment Dubai", place: "Dubai", cat: "Entertainment" as const, image: entShowgirls },
    { t: "Corporate Awards Gala", tag: "Corporate Gala Dinner Dubai", place: "Dubai", cat: "Corporate" as const, image: corpGalaAwards },
    { t: "Blush Floral Stage", tag: "Wedding Event Management Dubai", place: "Dubai", cat: "Weddings" as const, image: wedBlushStage },
    { t: "Silver Dance Performers", tag: "Event Performers Dubai", place: "Dubai", cat: "Entertainment" as const, image: entDancers },
    { t: "Grand Ballroom Wedding", tag: "Destination Wedding Planner Dubai", place: "Dubai", cat: "Weddings" as const, image: wedBallroom },
    { t: "Emirates NBD Summit", tag: "Corporate Event Management Dubai", place: "Dubai", cat: "Corporate" as const, image: corpEmiratesNbd },
    { t: "WION Global Summit", tag: "Conference Management Company Dubai", place: "Dubai", cat: "Corporate" as const, image: corpWionSummit },
    { t: "Live Orchestra Gala", tag: "Corporate Entertainment Dubai", place: "Sharjah", cat: "Corporate" as const, image: corpOrchestra },
] as const;

export const PORTFOLIO_FILTERS = ["All", "Corporate", "Weddings", "Entertainment"] as const;

export const CORPORATE_IMAGES = [
    corpGalaBallroom,
    corpConferenceAida,
    corpGalaAwards,
    corpEmiratesNbd,
    corpWionSummit,
    corpOrchestra,
] as const;

export const WEDDING_IMAGES = [wedMandap, wedMarbleAisle, wedBlushStage, wedBallroom] as const;
export const ENTERTAINMENT_IMAGES = [entConcert, entShowgirls, entDancers] as const;

export const SERVICE_HERO_IMAGES = {
    corporate: corpGalaBallroom,
    weddings: wedMarbleAisle,
    entertainment: entMagician,
} as const;
