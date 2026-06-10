import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio — Future Vision",
    description: "Selected commissions across weddings, corporate events and entertainment, from London to Kyoto.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return children;
}
