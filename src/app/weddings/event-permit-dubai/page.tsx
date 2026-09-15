import type { Metadata } from "next";
import {
  ContactBand,
  EditorialHeading,
  GoldButton,
  Hairline,
  SectionLabel,
} from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
import { SERVICE_HERO_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.corporate;

const permitSeo = pageMetadata({
  title: "Event Permit Dubai UAE — What Organizers Should Know",
  description:
    "Event permits in Dubai UAE explained — venue approval, event type and scale, location and production elements. Future Vision manages events across Dubai, Sharjah and Abu Dhabi.",
  path: "/weddings/event-permit-dubai",
});

export const metadata: Metadata = {
  ...permitSeo,
  title: { absolute: "Event Permit Dubai UAE — What Organizers Should Know" },
  keywords: [
    "Event Permit Dubai UAE",
    "Event Management Company in Dubai",
    "Event Organizers in Dubai UAE",
  ],
  alternates: {
    ...permitSeo.alternates,
    languages: {
      "en-AE": "https://www.futurevision.ae/weddings/event-permit-dubai",
      "x-default": "https://www.futurevision.ae/weddings/event-permit-dubai",
    },
  },
};

const PERMIT_FACTORS = [
  {
    n: "01",
    t: "Venue Approval",
    c: "Many hotels, event halls, and outdoor venues in Dubai have their own booking and compliance process that ties into local permitting requirements.",
  },
  {
    n: "02",
    t: "Event Type and Scale",
    c: "A private wedding inside a hotel ballroom is treated differently from a public exhibition, a large corporate conference, or a live entertainment show with performers.",
  },
  {
    n: "03",
    t: "Location",
    c: "Permits for outdoor, beachfront, or public-space events are typically more involved than events held inside a licensed venue.",
  },
  {
    n: "04",
    t: "Entertainment and Production Elements",
    c: "Live bands, performers, or large-scale staging can bring additional considerations depending on the venue and audience size.",
  },
];

const WHAT_WE_HANDLE = [
  {
    t: "Corporate Events",
    c: "Conferences, product launches, gala dinners, exhibitions, team building, and annual company celebrations.",
    tags: ["Conference Organizers in Dubai", "Product Launch Company in Dubai"],
  },
  {
    t: "Weddings",
    c: "Arabic, Indian, and Western weddings, from full planning to stage décor, mandap setups, fresh flowers, and destination celebrations.",
    tags: [
      "Wedding Planners in Dubai UAE",
      "Destination Wedding Planner in Dubai UAE",
    ],
  },
  {
    t: "Entertainment",
    c: "Dance shows, live bands, DJs, musicians, magicians, and performers for corporate events, weddings, and private parties.",
    tags: ["Entertainment Agency in Dubai UAE", "Party planners in Dubai"],
  },
  {
    t: "Full Production",
    c: "Sound, light, staging, translation equipment, travel coordination, and exhibition stands, all managed under one team.",
    tags: ["Event Production Company in Dubai UAE"],
  },
];

const WHY_US = [
  "20+ years of experience planning and producing events across the UAE",
  "1000+ successful events, from intimate celebrations to large-scale corporate productions",
  "End-to-end event planning, from concept development through on-the-day execution",
  "Professional production team handling staging, AV, décor, and logistics in-house",
  "Dedicated client support, with replies within one business day",
  "Offices in Dubai, Sharjah, and Abu Dhabi, giving us reach across the UAE",
];

const FAQS = [
  {
    q: "Does every event in Dubai need a permit?",
    a: "Requirements vary by event type, venue, and location. Many events held inside licensed hotels or event venues are managed as part of that venue's own booking and compliance process, while public or outdoor events typically involve additional approvals. It's best to confirm directly with your venue or the relevant Dubai authority for your specific event.",
  },
  {
    q: "Does Future Vision arrange event permits for clients?",
    a: "Permit and licensing requirements are typically managed through your venue or the relevant government authority, and they vary depending on your event. Future Vision's focus is on the planning, design, and production side of your event — get in touch and our team can talk through your event details with you.",
  },
  {
    q: "What types of events does Future Vision manage?",
    a: "We manage corporate events (conferences, product launches, gala dinners, exhibitions, and team building), weddings (Arabic, Indian, and Western), and entertainment bookings (live bands, DJs, musicians, dancers, and performers) across Dubai and the wider UAE.",
  },
  {
    q: "How far in advance should I start planning?",
    a: "Since venue booking, approvals, and production all take time, it's best to start as early as possible — particularly for large-scale conferences, exhibitions, or weddings with custom décor. Reach out early and we can help map out a realistic timeline.",
  },
  {
    q: "Do you work outside Dubai?",
    a: "Yes. Alongside our Dubai office, we also have offices in Sharjah and Abu Dhabi, and produce events across the UAE.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EventPermitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Event Permits"
        title={
          <>
            Event permits in{" "}
            <em className="not-italic text-orange-500">Dubai, UAE</em>
          </>
        }
        intro="If you're organizing a corporate event, wedding, exhibition, or entertainment show in Dubai, permits and approvals are usually one of the first practical questions that come up — right alongside venue, budget, and date."
        image={heroImg}
      />

      <ParallaxReveal as="section" className="bg-surface py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SeoTags
            tags={[
              "Event Permit Dubai UAE",
              "Event Management Company in Dubai",
              "Event Organizers in Dubai UAE",
            ]}
          />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-10">
          <SectionLabel index="I" label="What It Covers" />
          <EditorialHeading className="mt-8 max-w-2xl">
            What an event permit usually covers in Dubai.
          </EditorialHeading>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed text-base">
            Requirements can differ depending on the type of event, the venue,
            and whether it&apos;s held indoors, outdoors, or in a public space,
            so it&apos;s worth understanding the basics early, before your
            planning timeline gets tight. Dubai regulates public and commercial
            events to keep them safe, properly licensed, and aligned with local
            guidelines.
          </p>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {PERMIT_FACTORS.map((p) => (
              <div key={p.n} className="bg-surface p-8 lg:p-10 flex flex-col">
                <span className="font-display text-3xl sm:text-2xl text-orange-500">
                  {p.n}
                </span>
                <Hairline className="mt-6 w-10!" />
                <h2 className="mt-6 font-display text-2xl lg:text-3xl text-cream leading-tight">
                  {p.t}
                </h2>
                <p className="mt-4 text-base sm:text-sm text-muted-foreground leading-relaxed">
                  {p.c}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-muted-foreground leading-relaxed text-base">
            Because requirements can vary case by case, it&apos;s always worth
            confirming directly with your venue and the relevant Dubai authority
            for your specific event, rather than assuming one approval process
            fits every occasion.
          </p>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="II" label="Where We Fit In" />
          <EditorialHeading className="mt-8 max-w-2xl">
            What we handle, start to finish.
          </EditorialHeading>
          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed text-base">
            Permits and approvals are only one piece of getting an event off the
            ground. The bigger, more time-consuming part — the part that
            actually shapes how your event looks, feels, and runs — is the
            planning and production itself. This is where Future Vision has
            spent over 20 years building expertise: turning a date on a calendar
            into a fully produced corporate event, wedding, or entertainment
            experience across the UAE.
          </p>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_HANDLE.map((w) => (
              <div
                key={w.t}
                className="bg-background p-8 lg:p-10 flex flex-col"
              >
                <h2 className="font-display text-2xl lg:text-3xl text-orange-500 leading-tight">
                  {w.t}
                </h2>
                <Hairline className="mt-4 w-10!" />
                <p className="mt-4 text-base sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                  {w.c}
                </p>
                <SeoTags className="mt-5" tags={w.tags} compact />
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-muted-foreground leading-relaxed text-base">
            Our process runs through four stages — brief, plan, build, and
            deliver — so that once your venue and any required approvals are
            sorted, the creative and logistical side of your event is in
            experienced hands from concept through to the final guest departure.
          </p>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-surface-2 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="III" label="Why Future Vision" />
          <EditorialHeading className="mt-8 max-w-2xl">
            Why work with an experienced event team.
          </EditorialHeading>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-background p-6"
              >
                <p className="font-display text-xl text-cream leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-muted-foreground leading-relaxed text-base">
            Whether you&apos;re organizing a formal conference, a company gala,
            an exhibition stand, or a wedding celebration, having a team
            that&apos;s produced hundreds of events before means fewer surprises
            and a smoother path from first brief to final execution.
          </p>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-background py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionLabel index="IV" label="FAQs" />
          <EditorialHeading className="mt-8">
            Common questions.
          </EditorialHeading>
          <div className="mt-14 space-y-10">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h2 className="font-display text-2xl lg:text-3xl text-orange-500 leading-snug">
                  {f.q}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-[1.85]">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-surface py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel label="Planning an event in Dubai?" />
          <p className="mt-8 text-muted-foreground leading-[1.85] text-base">
            Once your venue and approvals are in place, let Future Vision take
            care of the rest — from first concept to final execution. Corporate
            events, weddings, conferences, exhibitions, product launches, gala
            dinners, and live entertainment, all managed by one experienced
            team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GoldButton to="/contact" variant="solid">
              Contact Us
            </GoldButton>
            <GoldButton to="/portfolio" variant="solid">
              View Our Portfolio
            </GoldButton>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Dubai &middot; Sharjah &middot; Abu Dhabi, UAE
          </p>
        </div>
      </ParallaxReveal>

      <ContactBand />
    </>
  );
}
