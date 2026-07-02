import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { GalleryCard } from "@/components/gallery-card";
import { ParallaxReveal } from "@/components/parallax";
import { SeoTags } from "@/components/seo-tags";
import { SERVICE_HERO_IMAGES, WEDDING_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.weddings;

export const metadata: Metadata = pageMetadata({
  title: "Wedding Planner Dubai | Luxury Wedding Planner Dubai",
  description:
    "Wedding Planner Dubai — Future Vision is a leading Luxury Wedding Planner Dubai, Wedding Event Management Dubai, Indian Wedding Planner Dubai, Destination Wedding Planner Dubai, Beach Wedding Planner Dubai, and Wedding Decoration Dubai company in UAE.",
  path: "/weddings",
});

const TRADITIONS = [
  {
    t: "Arabic Weddings",
    c: "Sacred celebrations honouring Arabic culture — Kosha stage decoration, Zaffa dancers, Arabic coffee, henna designers, and authentic décor.",
    services: ["Kosha / Stage Decoration", "Zaffa Dancers", "Fresh Flower Decoration", "Arabic Coffee", "Henna Designers", "Lady Arabic DJs", "Al Gemat Cooks", "Limousine Service"],
    tags: ["Luxury Wedding Planner Dubai", "Wedding Decoration Dubai", "Wedding Event Management Dubai"],
  },
  {
    t: "Indian Weddings",
    c: "Extravagant multi-day celebrations with mandap, doli, palkhi, fresh flower décor, and Bollywood choreography — flawlessly executed within your budget.",
    services: ["Wedding Stage Décor", "Indian Mandap & Jhula", "Doli & Palkhi", "Bollywood Dance Choreographers", "Ladies Sangeet", "Henna Designers", "Dhol Players", "Fresh Flower Decoration"],
    tags: ["Indian Wedding Planner Dubai", "Wedding Decoration Dubai", ],
  },
  {
    t: "Western Weddings",
    c: "From guest list to bridal car and reception — every detail from the altar to the cake is properly planned and executed.",
    services: ["Stage Set-Up & Decoration", "Fresh Flower Decoration", "Gazebos & Tents", "Photo & Video", "DJ's & MC's", "Limousine Service", "Lights & Sound", "Table Centre Pieces"],
    tags: ["Destination Wedding Planner Dubai", "Beach Wedding Planner Dubai", "Wedding Organizer Dubai"],
  },
];

const PROCESS = [
  { n: "I", t: "Consultation", c: "We meet with the couple to understand wishes, budget, and timeframe." },
  { n: "II", t: "Proposal", c: "An initial proposal reflecting your ideas and personality within your budget." },
  { n: "III", t: "Production", c: "Invitations, décor, florals, catering, and every detail brought to life." },
  { n: "IV", t: "Celebration", c: "A stress-free wedding day — we handle everything so you can simply enjoy." },
];

const GALLERY_LABELS = ["Floral Wedding Mandap", "Marble Aisle Wedding", "Blush Floral Stage", "Grand Ballroom Wedding"];

export default function WeddingsPage() {
  const GALLERY = GALLERY_LABELS.map((label, i) => ({ t: label, image: WEDDING_IMAGES[i] }));

  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title={<>Wedding planners in <em className="not-italic text-gold">Dubai, UAE</em></>}
        intro="Certified wedding planners in Dubai — we ensure you enjoy your special day while we take care of every preparation, from stage décor to fresh flowers."
        hue="warm"
        image={heroImg}
      />

      <ParallaxReveal as="section" className="bg-surface py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SeoTags tags={["Wedding Planner Dubai", "Luxury Wedding Planner Dubai", "Wedding Event Management Dubai", "Wedding decorator in Dubai"]} />
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12 mt-10">
          <div className="lg:col-span-5">
            <SectionLabel index="I" label="About" />
            <EditorialHeading className="mt-8">Your day, beautifully planned.</EditorialHeading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5 text-sm sm:text-base">
            <p>
              As wedding planners in Dubai, Future Vision makes sure you enjoy your day while we take care of all preparations — Wedding Stage Décor, Indian Mandap, Doli, Palkhi, and fresh flower décor across the UAE.
            </p>
            <p>
              Our warehouse and equipment division keeps us cost competitive while ensuring excellent quality — all within your desired budget.
            </p>
            <p className="font-display italic text-cream/90 text-lg">
              Your wedding is something you&apos;ll treasure for the rest of your life.
            </p>
          </div>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="II" label="Wedding Types" />
          <EditorialHeading className="mt-8 max-w-xl">Arabic, Indian &amp; Western weddings.</EditorialHeading>
          <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
            {TRADITIONS.map((s) => (
              <div key={s.t} className="bg-background p-8 lg:p-10 flex flex-col">
                <h3 className="font-display text-2xl lg:text-3xl text-cream">{s.t}</h3>
                <Hairline className="mt-5 w-12!" />
                <p className="mt-5 text-muted-foreground leading-relaxed text-sm flex-grow">{s.c}</p>
                <ul className="mt-6 space-y-2">
                  {s.services.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground before:mr-2 before:text-gold before:content-['—']">
                      {item}
                    </li>
                  ))}
                </ul>
                <SeoTags className="mt-6" tags={s.tags} compact />
              </div>
            ))}
          </div>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-surface-2 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="III" label="Gallery" />
          <EditorialHeading className="mt-8">Weddings we&apos;ve created.</EditorialHeading>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g) => (
              <GalleryCard
                key={g.t}
                src={g.image.src}
                alt={g.t}
                eyebrow="Weddings · Dubai"
                title={g.t}
              />
            ))}
          </div>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="IV" label="Process" />
          <EditorialHeading className="mt-8">From first meeting to wedding day.</EditorialHeading>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n}>
                <span className="font-display text-3xl text-gold">{p.n}</span>
                <Hairline className="mt-5 w-10!" />
                <h3 className="mt-5 font-display text-xl text-cream">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.c}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxReveal>

      <ParallaxReveal as="section" className="bg-surface py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-display text-[6rem] sm:text-[8rem] leading-none text-gold/50">&ldquo;</span>
          <blockquote className="-mt-10 sm:-mt-12 font-display text-2xl sm:text-3xl font-light italic text-cream leading-snug">
            You imagine it and we will make it happen.
          </blockquote>
          <Hairline className="w-16! mx-auto mt-8" />
          <p className="eyebrow mt-4">Future Vision Events &amp; Weddings &middot; Dubai</p>
          <SeoTags className="justify-center mt-4" compact tags={["Wedding Planner Dubai", "Wedding Decoration Dubai"]} />
        </div>
      </ParallaxReveal>

      <ContactBand />
    </>
  );
}
