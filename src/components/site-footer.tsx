import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Monogram, Hairline } from "./luxury";
import { OFFICES, PHONES, SITE } from "@/data/contact";

export function SiteFooter() {
    return (
        <footer className="bg-surface-2 text-cream/80">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-12">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Monogram />
                        <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            {SITE.name} — a full-service entertainment and event management company based in Dubai, UAE, with offices in Sharjah and Abu Dhabi.
                        </p>
                        <p className="mt-4 font-display italic text-cream/90 text-sm">
                            {SITE.motto}
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
                            <li><Link href="/entertainment" className="hover:text-gold transition-colors">Entertainment</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="eyebrow">Contact</h4>
                        <ul className="mt-6 space-y-3 text-sm">
                            <li>
                                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                                    <Mail className="h-3.5 w-3.5 text-gold" strokeWidth={1.25} />
                                    {SITE.email}
                                </a>
                            </li>
                            {PHONES.map((phone) => (
                                <li key={phone.tel}>
                                    <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                                        <Phone className="h-3.5 w-3.5 text-gold" strokeWidth={1.25} />
                                        {phone.display}
                                        {"note" in phone && phone.note ? ` (${phone.note})` : ""}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={SITE.url} className="hover:text-gold transition-colors">{SITE.url.replace("https://", "")}</a>
                            </li>
                        </ul>
                        <div className="mt-6 flex gap-4 text-gold/70">
                            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram className="h-4 w-4" /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin className="h-4 w-4" /></a>
                            <a href={`mailto:${SITE.email}`} aria-label="Email" className="hover:text-gold transition-colors"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-3 border-t border-border pt-12">
                    {OFFICES.map((office) => (
                        <div key={office.city}>
                            <h4 className="eyebrow">{office.city} Office</h4>
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{office.address}</p>
                        </div>
                    ))}
                </div>

                <Hairline className="mt-20" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
                    <p>Dubai &middot; Sharjah &middot; Abu Dhabi, UAE</p>
                </div>
            </div>
        </footer>
    );
}
