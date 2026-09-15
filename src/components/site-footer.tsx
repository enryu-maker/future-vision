import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { Monogram, Hairline } from "./luxury";
import { SeoTags } from "./seo-tags";
import { OFFICES, PHONES, SITE } from "@/data/contact";

export function SiteFooter() {
    return (
        <footer className="brand-panel grain text-white/85 border-t border-white/10">
            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-20 pb-12 sm:pt-24">
                <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-x-10">
                    <div className="lg:col-span-5 min-w-0">
                        <Monogram size="footer" className="block w-full max-w-full min-w-0 [&_img]:max-w-full" />
                        <p className="mt-8 max-w-sm text-base sm:text-sm leading-relaxed text-white/75">
                            {SITE.name} — full-service event management company in Dubai, UAE with offices also Sharjah and Abu Dhabi.
                        </p>
                        <SeoTags
                            className="mt-4 [&_li]:border-white/20 [&_li]:bg-white/10 [&_li]:text-white/80 [&_li]:text-sm"
                            compact
                            tags={["Event Management Company Dubai", "Corporate Event Management Dubai", "Wedding Planner Dubai", "Live Entertainment Dubai"]}
                        />
                        <p className="mt-6 font-display text-xl sm:text-2xl italic text-orange-500 leading-snug">
                            {SITE.motto}
                        </p>
                    </div>

                    <div className="lg:col-span-2 min-w-0">
                        <h4 className="text-xs font-sans font-normal uppercase tracking-[0.28em] text-orange-400 sm:tracking-[0.32em]">Navigate</h4>
                        <ul className="mt-5 space-y-3 text-base sm:text-sm text-white/80">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                            <li><Link href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 min-w-0">
                        <h4 className="text-xs font-sans font-normal uppercase tracking-[0.28em] text-orange-400 sm:tracking-[0.32em]">Services</h4>
                        <ul className="mt-5 space-y-3 text-base sm:text-sm text-white/80">
                            <li><Link href="/corporate-events" title="Corporate Event Management Dubai" className="hover:text-orange-400 transition-colors">Corporate Events</Link></li>
                            <li><Link href="/weddings" title="Wedding Planner Dubai" className="hover:text-orange-400 transition-colors">Weddings</Link></li>
                            <li><Link href="/entertainment" title="Entertainment Agency Dubai" className="hover:text-orange-400 transition-colors">Entertainment</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 min-w-0">
                        <h4 className="text-xs font-sans font-normal uppercase tracking-[0.28em] text-orange-400 sm:tracking-[0.32em]">Contact</h4>
                        <ul className="mt-5 space-y-4 text-base sm:text-sm text-white/80">
                            <li>
                                <a href={`mailto:${SITE.email}`} className="inline-flex items-start gap-3 hover:text-orange-400 transition-colors break-all">
                                    <Mail className="h-4 w-4 mt-1 text-orange-400 shrink-0" strokeWidth={1.25} />
                                    {SITE.email}
                                </a>
                            </li>
                            {PHONES.map((phone) => (
                                <li key={phone.tel}>
                                    <a href={`tel:${phone.tel}`} className="inline-flex items-start gap-3 hover:text-orange-400 transition-colors">
                                        <Phone className="h-4 w-4 mt-1 text-orange-400 shrink-0" strokeWidth={1.25} />
                                        {phone.display} (24/7 hotline)
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={SITE.url} className="hover:text-orange-400 transition-colors">{SITE.url.replace("https://", "")}</a>
                            </li>
                        </ul>
                        <div className="mt-8 flex gap-5 text-orange-500">
                            <a
                                href="https://www.instagram.com/futurevisionwedding?utm_source=qr&igsh=MXZxdWpxem9vbHZsbA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-orange-400 transition-colors"
                            >
                                <Instagram className="h-8 w-8 sm:h-7 sm:w-7" strokeWidth={1.5} />
                            </a>
                            <a
                                href={`mailto:${SITE.email}`}
                                aria-label="Email"
                                className="hover:text-orange-400 transition-colors"
                            >
                                <Mail className="h-8 w-8 sm:h-7 sm:w-7" strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 sm:mt-16 grid gap-8 sm:grid-cols-3 border-t border-white/10 pt-10 sm:pt-12">
                    {OFFICES.map((office) => (
                        <div key={office.city}>
                            <h4 className="text-xs font-sans font-normal uppercase tracking-[0.28em] text-orange-400 sm:tracking-[0.32em]">{office.city} Office</h4>
                            <p className="mt-4 text-base sm:text-sm text-white/70 leading-relaxed">{office.address}</p>
                        </div>
                    ))}
                </div>

                <Hairline className="mt-16 sm:mt-20 bg-white/15!" />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-sm sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/55">
                    <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
                    <p>Dubai &middot; Sharjah &middot; Abu Dhabi, UAE</p>
                </div>
            </div>
        </footer>
    );
}
