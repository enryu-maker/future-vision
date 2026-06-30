"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram, GoldButton } from "./luxury";
import { cn } from "@/lib/utils";

const NAV = [
    { href: "/", label: "Home" },
    { href: "/corporate-events", label: "Corporate", title: "Corporate Event Management Dubai" },
    { href: "/weddings", label: "Weddings", title: "Wedding Planner Dubai" },
    { href: "/entertainment", label: "Entertainment", title: "Entertainment Agency Dubai" },
    { href: "/portfolio", label: "Portfolio", title: "Event Portfolio Dubai" },
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
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b",
                scrolled || open
                    ? "bg-background/95 backdrop-blur-xl border-border shadow-sm shadow-black/5"
                    : "bg-background/80 backdrop-blur-lg border-border/60",
            )}
        >
            <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 sm:py-5 lg:px-12 lg:py-5 min-h-[5rem] lg:min-h-[5.75rem]">
                <Monogram className="z-10" />

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
                    {NAV.slice(0, -1).map((item) => {
                        const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                title={"title" in item ? item.title : undefined}
                                className={cn(
                                    "text-[0.72rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 whitespace-nowrap",
                                    isActive ? "text-gold" : "text-cream/80 hover:text-gold",
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:block shrink-0">
                    <GoldButton to="/contact" variant="outline">Contact</GoldButton>
                </div>

                <button
                    aria-label="Toggle menu"
                    className="lg:hidden text-cream shrink-0 p-1"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl">
                    <div className="flex flex-col px-6 py-8 gap-5">
                        {NAV.map((item) => {
                            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    title={"title" in item ? item.title : undefined}
                                    className={cn(
                                        "font-display text-2xl transition-colors",
                                        isActive ? "text-gold" : "text-cream hover:text-gold",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <GoldButton to="/contact" variant="outline" className="mt-4 self-start">
                            Contact
                        </GoldButton>
                    </div>
                </div>
            )}
        </header>
    );
}
