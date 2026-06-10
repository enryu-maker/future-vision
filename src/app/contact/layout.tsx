import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Future Vision",
    description: "Begin a private conversation with the Future Vision atelier.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
