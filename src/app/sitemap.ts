import type { MetadataRoute } from "next";
import { SITE } from "@/data/contact";

const ROUTES = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/corporate-events", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/weddings", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/entertainment", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return ROUTES.map(({ path, priority, changeFrequency }) => ({
        url: `${SITE.url}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
