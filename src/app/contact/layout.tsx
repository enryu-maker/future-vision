import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
    title: "Contact Us — Event Planners in Dubai, UAE",
    description:
        "Contact Future Vision Events & Weddings in Dubai, Sharjah or Abu Dhabi. Email futurevision@eim.ae or call +971-50-3576449 (24-hour line). Plan your corporate event or wedding today.",
    path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
