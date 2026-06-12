import corpStaffParty from "@/assets/portfolio/portfolio-corporate-staff-party.png";
import corpDesert from "@/assets/portfolio/portfolio-corporate-desert.png";
import corpLaunch from "@/assets/portfolio/portfolio-corporate-launch.png";
import corpExhibition from "@/assets/portfolio/portfolio-corporate-exhibition.png";
import corpDhow from "@/assets/portfolio/portfolio-corporate-dhow.png";
import wedArabic from "@/assets/portfolio/portfolio-wedding-arabic.png";
import wedIndian from "@/assets/portfolio/portfolio-wedding-indian.png";
import wedWestern from "@/assets/portfolio/portfolio-wedding-western.png";
import wedDecor from "@/assets/portfolio/portfolio-wedding-decor.png";
import entDance from "@/assets/portfolio/portfolio-entertainment-dance.png";
import entLive from "@/assets/portfolio/portfolio-entertainment-live.png";
import entMagician from "@/assets/portfolio/portfolio-entertainment-magician.png";

export type PortfolioCategory = "Corporate" | "Weddings" | "Entertainment";

export const PORTFOLIO_ITEMS = [
    { t: "Annual Staff Party", tag: "Corporate Event Management Dubai", place: "Dubai", cat: "Corporate" as const, image: corpStaffParty },
    { t: "Desert Corporate Event", tag: "Team Building Events Dubai", place: "UAE", cat: "Corporate" as const, image: corpDesert },
    { t: "Product Launch", tag: "Product Launch Event Agency Dubai", place: "Dubai", cat: "Corporate" as const, image: corpLaunch },
    { t: "Exhibition Stand", tag: "Exhibition Stand Contractor Dubai", place: "Dubai", cat: "Corporate" as const, image: corpExhibition },
    { t: "Dhow Party", tag: "Corporate Gala Dinner Dubai", place: "Dubai Creek", cat: "Corporate" as const, image: corpDhow },
    { t: "Arabic Wedding", tag: "Luxury Wedding Planner Dubai", place: "Dubai", cat: "Weddings" as const, image: wedArabic },
    { t: "Indian Wedding", tag: "Indian Wedding Planner Dubai", place: "Dubai", cat: "Weddings" as const, image: wedIndian },
    { t: "Western Wedding", tag: "Destination Wedding Planner Dubai", place: "Dubai", cat: "Weddings" as const, image: wedWestern },
    { t: "Wedding Stage Décor", tag: "Wedding Decoration Dubai", place: "Dubai", cat: "Weddings" as const, image: wedDecor },
    { t: "Dance Shows", tag: "Live Entertainment Dubai", place: "Dubai", cat: "Entertainment" as const, image: entDance },
    { t: "Live Entertainment", tag: "Corporate Entertainment Dubai", place: "Dubai", cat: "Entertainment" as const, image: entLive },
    { t: "Magician Sumeet", tag: "Entertainment Agency Dubai", place: "Dubai", cat: "Entertainment" as const, image: entMagician },
] as const;

export const PORTFOLIO_FILTERS = ["All", "Corporate", "Weddings", "Entertainment"] as const;

export const CORPORATE_IMAGES = [corpStaffParty, corpDesert, corpLaunch, corpExhibition, corpDhow] as const;
export const WEDDING_IMAGES = [wedArabic, wedIndian, wedWestern, wedDecor] as const;
export const ENTERTAINMENT_IMAGES = [entDance, entLive, entMagician] as const;

export const SERVICE_HERO_IMAGES = {
    corporate: corpStaffParty,
    weddings: wedArabic,
    entertainment: entDance,
} as const;
