"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedCounter({
    value,
    suffix = "",
    label,
    className,
}: {
    value: number;
    suffix?: string;
    label: string;
    className?: string;
}) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const duration = 1600;
        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [started, value]);

    return (
        <div
            ref={ref}
            className={cn(
                "flex flex-col items-center justify-center rounded-xl bg-orange-500 px-6 py-8 text-center text-white shadow-md shadow-orange-500/20",
                className,
            )}
        >
            <p className="font-display text-4xl sm:text-5xl font-bold leading-none tracking-tight">
                {count}
                {suffix}
            </p>
            <p className="mt-3 text-sm sm:text-base font-medium leading-snug text-white/95">{label}</p>
        </div>
    );
}
