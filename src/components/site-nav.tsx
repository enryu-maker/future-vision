"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram, GoldButton } from "./luxury";
import { cn } from "@/lib/utils";

const NAV = [
    { href: "/", label: "Home" },
    { href: "/corporate-events", label: "Corporate Events" },
    { href: "/weddings", label: "Weddings" },
    { href: "/entertainment", label: "Entertainment" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [prevPathname, setPrevPathname] = useState(pathname);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setOpen(false);
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-500",
                scrolled || open
                    ? "bg-background/90 backdrop-blur-md border-b border-border"
                    : "bg-transparent border-b border-transparent",
            )}
        >
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
                <Monogram />

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV.slice(1, -1).map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-[0.72rem] uppercase tracking-[0.24em] transition-colors duration-500",
                                    isActive ? "text-gold" : "text-cream/75 hover:text-gold"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:block">
                    <GoldButton to="/contact" variant="outline">Start Your Event</GoldButton>
                </div>

                <button
                    aria-label="Toggle menu"
                    className="lg:hidden text-cream"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden border-t border-border bg-background">
                    <div className="flex flex-col px-6 py-8 gap-6">
                        {NAV.map((item) => {
                            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "font-display text-2xl transition-colors",
                                        isActive ? "text-gold" : "text-cream hover:text-gold"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <GoldButton to="/contact" variant="outline" className="mt-4 self-start">
                            Start Your Event
                        </GoldButton>
                    </div>
                </div>
            )}
        </header>
    );
}