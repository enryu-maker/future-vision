import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
    title: "Event Portfolio Dubai | Exhibition and Event Management Company Dubai",
    description:
        "Event Portfolio Dubai — Corporate Event Management Dubai, Wedding Planner Dubai, Product Launch Event Management Dubai, Exhibition Stand Contractor Dubai, Indian Wedding Planner Dubai, and Live Entertainment Dubai by Future Vision.",
    path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return children;
}
