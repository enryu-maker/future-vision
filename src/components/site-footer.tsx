import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { Monogram, Hairline } from "./luxury";
import { SeoTags } from "./seo-tags";
import { OFFICES, PHONES, SITE } from "@/data/contact";

export function SiteFooter() {
    return (
        <footer className="bg-cream text-background">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-12">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Monogram size="footer" />
                        <p className="mt-8 max-w-sm text-sm leading-relaxed text-background/70">
                            {SITE.name} — full-service event management company in Dubai, UAE with offices also Sharjah and Abu Dhabi.
                        </p>
                        <SeoTags
                            className="mt-4 [&_li]:border-background/20 [&_li]:bg-background/10 [&_li]:text-background/75"
                            compact
                            tags={["Event Management Company Dubai", "Corporate Event Management Dubai", "Wedding Planner Dubai", "Live Entertainment Dubai"]}
                        />
                        <p className="mt-4 font-display italic text-background/90 text-sm">
                            {SITE.motto}
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="eyebrow text-orange-400">Navigate</h4>
                        <ul className="mt-6 space-y-3 text-sm text-background/75">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                            <li><Link href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="eyebrow text-orange-400">Services</h4>
                        <ul className="mt-6 space-y-3 text-sm text-background/75">
                            <li><Link href="/corporate-events" title="Corporate Event Management Dubai" className="hover:text-orange-400 transition-colors">Corporate Events</Link></li>
                            <li><Link href="/weddings" title="Wedding Planner Dubai" className="hover:text-orange-400 transition-colors">Weddings</Link></li>
                            <li><Link href="/entertainment" title="Entertainment Agency Dubai" className="hover:text-orange-400 transition-colors">Entertainment</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="eyebrow text-orange-400">Contact</h4>
                        <ul className="mt-6 space-y-3 text-sm text-background/75">
                            <li>
                                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors break-all">
                                    <Mail className="h-3.5 w-3.5 text-orange-400 shrink-0" strokeWidth={1.25} />
                                    {SITE.email}
                                </a>
                            </li>
                            {PHONES.map((phone) => (
                                <li key={phone.tel}>
                                    <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors">
                                        <Phone className="h-3.5 w-3.5 text-orange-400 shrink-0" strokeWidth={1.25} />
                                        {phone.display} (24/7 hotline)
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={SITE.url} className="hover:text-orange-400 transition-colors">{SITE.url.replace("https://", "")}</a>
                            </li>
                        </ul>
                        <div className="mt-6 flex gap-4 text-orange-400/80">
                            <a
                                href="https://www.instagram.com/futurevisionwedding?utm_source=qr&igsh=MXZxdWpxem9vbHZsbA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-orange-400 transition-colors"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href={`mailto:${SITE.email}`} aria-label="Email" className="hover:text-orange-400 transition-colors"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-3 border-t border-background/15 pt-12">
                    {OFFICES.map((office) => (
                        <div key={office.city}>
                            <h4 className="eyebrow text-orange-400">{office.city} Office</h4>
                            <p className="mt-4 text-sm text-background/65 leading-relaxed">{office.address}</p>
                        </div>
                    ))}
                </div>

                <Hairline className="mt-20 bg-background/15!" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-xs tracking-[0.18em] uppercase text-background/50">
                    <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
                    <p>Dubai &middot; Sharjah &middot; Abu Dhabi, UAE</p>
                </div>
            </div>
        </footer>
    );
}
