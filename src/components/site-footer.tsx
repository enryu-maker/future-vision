import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Monogram, Hairline } from "./luxury";

export function SiteFooter() {
    return (
        <footer className="bg-surface-2 text-cream/80">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-12">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Monogram />
                        <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            An international atelier for luxury events — weddings, corporate moments, and world-class entertainment, composed with precision and quiet elegance.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="eyebrow">Navigate</h4>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="eyebrow">Services</h4>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li><Link href="/corporate-events" className="hover:text-gold transition-colors">Corporate Events</Link></li>
                            <li><Link href="/weddings" className="hover:text-gold transition-colors">Weddings</Link></li>
                            <li><Link href="/entertainment" className="hover:text-gold transition-colors">Entertainment &amp; Artists</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="eyebrow">Atelier</h4>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li>London &middot; Dubai &middot; Paris</li>
                            <li><a href="mailto:atelier@futurevision.co" className="hover:text-gold transition-colors">atelier@futurevision.co</a></li>
                            <li>+44 (0) 20 7946 0000</li>
                        </ul>
                        <div className="mt-6 flex gap-4 text-gold/70">
                            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram className="h-4 w-4" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin className="h-4 w-4" /></a>
                            <a href="mailto:atelier@futurevision.co" aria-label="Email" className="hover:text-gold transition-colors"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </div>

                <Hairline className="mt-20" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Future Vision. All rights reserved.</p>
                    <p>An international event atelier</p>
                </div>
            </div>
        </footer>
    );
}