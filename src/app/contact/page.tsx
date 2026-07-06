"use client"

import { useState, type ReactNode, type FormEvent } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
import { PageHero } from "@/components/page-hero";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";
import { OFFICES, PHONES, SITE } from "@/data/contact";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeebnyon";

const EVENT_TYPES = ["Wedding", "Corporate Event", "Entertainment", "Other"];

function Field({ label, children }: { label: string; children: ReactNode }) {
    return (
        <label className="block">
            <span className="eyebrow text-muted-foreground!">{label}</span>
            <div className="mt-3">{children}</div>
        </label>
    );
}

const inputCls =
    "w-full bg-transparent border-b border-border py-3 text-cream placeholder:text-muted-foreground/60 focus:outline-none focus:border-orange-500 transition-colors font-sans text-base";

export default function ContactPage() {
    const [pending, setPending] = useState(false);
    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setPending(true);
        const form = e.currentTarget;
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });
            if (response.ok) {
                form.reset();
                toast.success("Your enquiry has been received. We will reply within one business day.");
            } else {
                const data = await response.json().catch(() => null);
                toast.error(
                    (data && typeof data.error === "string" ? data.error : null) ??
                        "Something went wrong. Please try again or email us directly.",
                );
            }
        } catch {
            toast.error("Something went wrong. Please try again or email us directly.");
        } finally {
            setPending(false);
        }
    }
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title={<>Get in touch in <em className="not-italic text-orange-500">Dubai</em></>}
                intro="Reach our team at any of our Dubai, Sharjah, or Abu Dhabi offices. Call +971-56-9401230 or email us to start planning your event."
                image={contactHero}
            />

            <ParallaxReveal as="section" className="bg-background pb-32">
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-4">
                    <SeoTags
                        compact
                        tags={["Event Management Company Dubai", "Corporate Event Management Dubai", "Wedding Planner Dubai", "Conference Organizer Dubai", "Live Entertainment Dubai"]}
                    />
                </div>
                <div className="mx-auto grid max-w-[1400px] gap-20 px-6 lg:grid-cols-12 lg:px-12 mt-12">
                    <aside className="lg:col-span-4 space-y-12">
                        <div>
                            <SectionLabel label="Contact" />
                            <p className="mt-6 font-display text-2xl text-cream leading-snug">{SITE.name}</p>
                            <p className="mt-3 text-sm text-muted-foreground">{SITE.region}</p>
                        </div>

                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-4">
                                <Mail className="h-4 w-4 mt-1 text-orange-500 shrink-0" strokeWidth={1.25} />
                                <a href={`mailto:${SITE.email}`} className="text-cream hover:text-orange-500 transition-colors">{SITE.email}</a>
                            </div>
                            {PHONES.map((phone) => (
                                <div key={phone.tel} className="flex items-start gap-4">
                                    <Phone className="h-4 w-4 mt-1 text-orange-500 shrink-0" strokeWidth={1.25} />
                                    <a href={`tel:${phone.tel}`} className="text-cream hover:text-orange-500 transition-colors">{phone.display}</a>
                                </div>
                            ))}
                            <div className="flex items-start gap-4">
                                <Globe className="h-4 w-4 mt-1 text-orange-500 shrink-0" strokeWidth={1.25} />
                                <a href={SITE.url} className="text-cream hover:text-orange-500 transition-colors">{SITE.url}</a>
                            </div>
                        </div>

                        <Hairline className="w-16!" />

                        <div className="space-y-8">
                            <SectionLabel label="Offices" />
                            {OFFICES.map((office) => (
                                <div key={office.city} className="flex items-start gap-4 text-sm">
                                    <MapPin className="h-4 w-4 mt-1 text-orange-500 shrink-0" strokeWidth={1.25} />
                                    <div>
                                        <p className="text-cream font-medium">{office.city} Office</p>
                                        <p className="mt-1 text-muted-foreground leading-relaxed">{office.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={onSubmit} className="lg:col-span-7 lg:col-start-6 space-y-10">
                        <EditorialHeading as="h2">Tell us about your event.</EditorialHeading>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <Field label="Name"><input required name="name" type="text" className={inputCls} /></Field>
                            <Field label="Email"><input required name="email" type="email" className={inputCls} /></Field>
                            <Field label="Phone"><input name="phone" type="tel" className={inputCls} placeholder="+971 50 000 0000" /></Field>
                            <Field label="Event Date">
                                <input name="date" type="date" className={inputCls + " scheme-dark"} />
                            </Field>
                            <Field label="Event Type">
                                <select name="type" className={inputCls} defaultValue="">
                                    <option value="" disabled className="bg-background">Select</option>
                                    {EVENT_TYPES.map((t) => (
                                        <option key={t} value={t} className="bg-background">{t}</option>
                                    ))}
                                </select>
                            </Field>
                        </div>
                        <Field label="Message">
                            <textarea name="message" rows={5} className={inputCls + " resize-none"} placeholder="Tell us about your event — type, location, guest count, budget..." />
                        </Field>
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={pending}
                                className="inline-flex items-center justify-center gap-3 bg-orange-500 px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-background transition-all duration-500 hover:bg-orange-400 disabled:opacity-60"
                            >
                                {pending ? "Sending…" : "Send Enquiry"}
                            </button>
                        </div>
                    </form>
                </div>
            </ParallaxReveal>
        </>
    );
}
