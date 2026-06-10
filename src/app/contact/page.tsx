"use client"

import { useState, type ReactNode, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";

const EVENT_TYPES = ["Wedding", "Corporate Event", "Entertainment Production", "Private Celebration", "Other"];

function Field({ label, children }: { label: string; children: ReactNode }) {
    return (
        <label className="block">
            <span className="eyebrow text-muted-foreground!">{label}</span>
            <div className="mt-3">{children}</div>
        </label>
    );
}

const inputCls =
    "w-full bg-transparent border-b border-border py-3 text-cream placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors font-sans text-base";

export default function ContactPage() {
    const [pending, setPending] = useState(false);
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setPending(true);
        const form = e.currentTarget;
        setTimeout(() => {
            setPending(false);
            form.reset();
            toast.success("Your enquiry has been received. The atelier will reply within one business day.");
        }, 600);
    }
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title={<>Begin a <em className="not-italic text-gold">private</em> conversation.</>}
                intro="Share a few details about the occasion you have in mind. Our atelier will reply within one business day."
                image={contactHero}
            />

            <section className="bg-background pb-32">
                <div className="mx-auto grid max-w-[1400px] gap-20 px-6 lg:grid-cols-12 lg:px-12">
                    <aside className="lg:col-span-4 space-y-12">
                        <div>
                            <SectionLabel label="Atelier" />
                            <p className="mt-6 font-display text-2xl text-cream leading-snug">London &middot; Dubai &middot; Paris</p>
                        </div>

                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-4">
                                <Mail className="h-4 w-4 mt-1 text-gold" strokeWidth={1.25} />
                                <a href="mailto:atelier@futurevision.co" className="text-cream hover:text-gold transition-colors">atelier@futurevision.co</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-4 w-4 mt-1 text-gold" strokeWidth={1.25} />
                                <span className="text-cream">+44 (0) 20 7946 0000</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-4 w-4 mt-1 text-gold" strokeWidth={1.25} />
                                <span className="text-cream">14 Hertford Street, Mayfair, London</span>
                            </div>
                        </div>

                        <Hairline className="w-16!" />
                        <div>
                            <SectionLabel label="Hours" />
                            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                                By private appointment.<br />Monday to Friday &middot; 09:00 — 18:00 GMT
                            </p>
                        </div>
                    </aside>

                    <form onSubmit={onSubmit} className="lg:col-span-7 lg:col-start-6 space-y-10">
                        <EditorialHeading as="h2">Tell us about your occasion.</EditorialHeading>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <Field label="Name"><input required name="name" type="text" className={inputCls} /></Field>
                            <Field label="Email"><input required name="email" type="email" className={inputCls} /></Field>
                            <Field label="Phone"><input name="phone" type="tel" className={inputCls} /></Field>
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
                            <textarea name="message" rows={5} className={inputCls + " resize-none"} placeholder="A few words about your vision, guest count, location..." />
                        </Field>
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={pending}
                                className="inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.28em] text-background transition-all duration-500 hover:bg-gold-soft disabled:opacity-60"
                            >
                                {pending ? "Sending…" : "Send Enquiry"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
