"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return reduced;
}

function useParallax(speed = 0.35) {
    const ref = useRef<HTMLElement>(null);
    const [offset, setOffset] = useState(0);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (reduced) return;

        const el = ref.current;
        if (!el) return;

        let raf = 0;
        const update = () => {
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            setOffset((center - viewCenter) * speed);
        };

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [speed, reduced]);

    return { ref, offset: reduced ? 0 : offset };
}

export function ParallaxImage({
    src,
    alt = "",
    className,
    imageClassName,
    speed = 0.35,
    scale = 1.15,
    opacity = 1,
}: {
    src: string;
    alt?: string;
    className?: string;
    imageClassName?: string;
    speed?: number;
    scale?: number;
    opacity?: number;
}) {
    const { ref, offset } = useParallax(speed);

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className={cn("absolute inset-0 overflow-hidden", className)}>
            <img
                src={src}
                alt={alt}
                aria-hidden={!alt}
                loading="eager"
                className={cn(
                    "absolute left-0 top-[-10%] h-[120%] w-full object-cover will-change-transform",
                    imageClassName,
                )}
                style={{
                    transform: `translate3d(0, ${offset}px, 0) scale(${scale})`,
                    opacity,
                }}
            />
        </div>
    );
}

export function ParallaxContent({
    children,
    className,
    speed = 0.12,
}: {
    children: ReactNode;
    className?: string;
    speed?: number;
}) {
    const { ref, offset } = useParallax(-speed);

    return (
        <div
            ref={ref as RefObject<HTMLDivElement>}
            className={cn("will-change-transform", className)}
            style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        >
            {children}
        </div>
    );
}

export function ParallaxReveal({
    children,
    className,
    delay = 0,
    as: Tag = "div",
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (reduced) {
            setVisible(true);
            return;
        }

        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [reduced]);

    return (
        <Tag
            ref={ref as RefObject<HTMLDivElement>}
            className={cn(
                "transition-all duration-1000 ease-out motion-reduce:transition-none",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 motion-reduce:opacity-100 motion-reduce:translate-y-0",
                className,
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}

export function ParallaxCardImage({
    src,
    alt,
    className,
    speed = 0.2,
}: {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
}) {
    const { ref, offset } = useParallax(speed);

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className={cn("absolute inset-0 overflow-hidden", className)}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="absolute left-0 top-[-8%] h-[116%] w-full object-cover will-change-transform transition-transform duration-1400 ease-out group-hover:scale-[1.05]"
                style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            />
        </div>
    );
}
