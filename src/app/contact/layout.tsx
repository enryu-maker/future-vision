import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
    title: "Contact Event Planner Dubai | Event Management Company Dubai",
    description:
        "Contact the Best Event Management Company in Dubai — Future Vision. Call +971-56-9401230. Corporate Event Management Dubai, Wedding Planner Dubai, Conference Organizer Dubai, Exhibition Management Company Dubai. Offices in Dubai, Sharjah & Abu Dhabi.",
    path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
