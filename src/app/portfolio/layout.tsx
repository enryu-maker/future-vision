import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
    title: "Portfolio — Corporate Events, Weddings & Entertainment in Dubai",
    description:
        "View Future Vision's portfolio of corporate events, Arabic, Indian and Western weddings, and live entertainment productions across Dubai, Sharjah and Abu Dhabi, UAE.",
    path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return children;
}
