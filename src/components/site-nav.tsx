"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Monogram, GoldButton } from "./luxury";
import { cn } from "@/lib/utils";
import { SITE, PHONES } from "@/data/contact";

const NAV = [
  { href: "/", label: "Home" },
  {
    href: "/corporate-events",
    label: "Corporate",
    title: "Corporate Event Management Dubai",
  },
  {
    href: "/weddings",
    label: "Weddings",
    title: "Wedding Planner Dubai",
    children: [
    ],
  },
  {
    href: "/entertainment",
    label: "Entertainment",
    title: "Entertainment Agency Dubai",
  },
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
        "brand-panel grain fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-white/10",
        scrolled || open ? "shadow-lg shadow-black/30" : "",
      )}
    >
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 sm:py-5 lg:px-12 lg:py-5 min-h-[4.5rem] sm:min-h-[5rem] lg:min-h-[5.75rem]">
        <Monogram className="z-10 min-w-0 max-w-[78vw] sm:max-w-none" />

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
          {NAV.slice(0, -1).map((item) => {
            const hasChildren = "children" in item;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : hasChildren
                  ? pathname.startsWith(item.href)
                  : pathname === item.href;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={"title" in item ? item.title : undefined}
                  className={cn(
                    "text-[0.72rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 whitespace-nowrap",
                    isActive
                      ? "text-orange-500"
                      : "text-white/80 hover:text-orange-500",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  title={"title" in item ? item.title : undefined}
                  className={cn(
                    "flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 whitespace-nowrap",
                    isActive
                      ? "text-orange-500"
                      : "text-white/80 hover:text-orange-500",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                    strokeWidth={2}
                  />
                </Link>

                <div className="invisible absolute left-0 top-full z-50 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="brand-panel min-w-[15rem] border border-white/10 py-3 shadow-lg shadow-black/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        title={child.title}
                        className={cn(
                          "block px-5 py-3 text-[0.72rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 whitespace-nowrap",
                          pathname === child.href
                            ? "text-orange-500"
                            : "text-white/80 hover:text-orange-500",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex flex-col text-right text-xs text-white/75">
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-orange-500 transition-colors"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${PHONES[0].tel}`}
              className="hover:text-orange-500 transition-colors"
            >
              {PHONES[0].display}
            </a>
          </div>
          <GoldButton to="/contact" variant="outline">
            Contact
          </GoldButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-white shrink-0 p-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden relative border-t border-white/10">
          <div className="flex flex-col px-6 py-8 gap-5">
            {NAV.map((item) => {
              const hasChildren = "children" in item;
              const isActive =
                item.href === "/" ? pathname === "/" : pathname === item.href;

              return (
                <div key={item.href} className="flex flex-col gap-3">
                  <Link
                    href={item.href}
                    title={"title" in item ? item.title : undefined}
                    className={cn(
                      "font-display text-3xl font-bold transition-colors",
                      isActive
                        ? "text-orange-500"
                        : "text-white hover:text-orange-500",
                    )}
                  >
                    {item.label}
                  </Link>

                  {hasChildren && (
                    <div className="flex flex-col gap-3 border-l border-white/15 pl-5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          title={child.title}
                          className={cn(
                            "font-display text-xl transition-colors",
                            pathname === child.href
                              ? "text-orange-500"
                              : "text-white/75 hover:text-orange-500",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-2 flex flex-col gap-3 text-base text-white/80">
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-orange-500 transition-colors"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:${PHONES[0].tel}`}
                className="hover:text-orange-500 transition-colors"
              >
                {PHONES[0].display}
              </a>
            </div>
            <GoldButton
              to="/contact"
              variant="outline"
              className="mt-2 self-start"
            >
              Contact
            </GoldButton>
          </div>
        </div>
      )}
    </header>
  );
}
