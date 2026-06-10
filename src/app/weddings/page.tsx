import type { Metadata } from "next";
import { ContactBand, EditorialHeading, Hairline, SectionLabel } from "@/components/luxury";
import { PageHero } from "@/components/page-hero";
import { SERVICE_HERO_IMAGES, WEDDING_IMAGES } from "@/data/portfolio";
import { pageMetadata } from "@/data/seo";

const heroImg = SERVICE_HERO_IMAGES.weddings;

export const metadata: Metadata = pageMetadata({
  title: "Wedding Planners & Decorators in Dubai, UAE",
  description:
    "Certified wedding planners in Dubai for Arabic, Indian and Western weddings. Stage décor, mandap, doli, palkhi, fresh flowers and full planning. Offices in Dubai, Sharjah & Abu Dhabi.",
  path: "/weddings",
});

const TRADITIONS = [
  {
    t: "Arabic Weddings",
    c: "Sacred and eventful celebrations that honour Arabic culture. From Kosha stage decoration and Zaffa dancers to Arabic coffee, henna designers and lady Arabic DJs — every detail is crafted with authenticity.",
    services: ["Kosha / Stage Decoration", "Zaffa Dancers", "Fresh Flower Decoration", "Arabic Coffee", "Henna Designers", "Lady Arabic DJs", "Al Gemat Cooks", "Limousine Service"],
  },
  {
    t: "Indian Weddings",
    c: "Extravagant celebrations full of festivity, flawlessly executed within your budget and desires. Specializing in Indian Wedding Decorators Dubai with mandap, doli, palkhi and fresh flower décor.",
    services: ["Wedding Stage Décor", "Indian Mandap & Jhula", "Doli & Palkhi", "Bollywood Dance Choreographers", "Ladies Sangeet", "Henna Designers", "Dhol Players", "Fresh Flower Decoration"],
  },
  {
    t: "Western Weddings",
    c: "From the guest list to the wedding theme, bridal car and reception — every detail from stepping into the altar to slicing the cake is properly planned and executed.",
    services: ["Stage Set-Up & Decoration", "Fresh Flower Decoration", "Gazebos & Tents", "Photo & Video", "DJ's & MC's", "Limousine Service", "Lights & Sound", "Table Centre Pieces"],
  },
];

const PROCESS = [
  { n: "I", t: "Consultation", c: "We meet with the couple to understand their wishes, budget and timeframe — the foundation of every wedding we plan." },
  { n: "II", t: "Proposal", c: "We go to the drawing board to create an initial proposal that reflects your ideas and personality while respecting your budget." },
  { n: "III", t: "Production", c: "Once the proposal is finalized, we begin production — invitations, décor, florals, catering and every detail in between." },
  { n: "IV", t: "Celebration", c: "A stress-free wedding day for you and your family. We handle everything so you can simply enjoy your special moment." },
];

export default function WeddingsPage() {
  const GALLERY = [
    { t: "Arabic Wedding", image: WEDDING_IMAGES[0] },
    { t: "Indian Wedding", image: WEDDING_IMAGES[1] },
    { t: "Western Wedding", image: WEDDING_IMAGES[2] },
    { t: "Wedding Stage Décor", image: WEDDING_IMAGES[3] },
  ];
  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title={<>Certified wedding planners in <em className="not-italic text-gold">Dubai, UAE</em>.</>}
        intro="Dubai has become a popular destination for couples looking to exchange wedding vows. Future Vision ensures you enjoy your special day while we take care of every preparation."
        hue="warm"
        image={heroImg}
      />

      <section className="bg-surface py-28">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <SectionLabel index="I" label="About" />
            <EditorialHeading className="mt-8">Your day, beautifully planned.</EditorialHeading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-[1.85] space-y-5">
            <p>
              As wedding planners in Dubai, Future Vision makes sure you enjoy your day while we take care of all your preparations. With services like Wedding Stage Décor, Indian Mandap, Doli, Palkhi and fresh flower décor, we specialize in wedding decoration across the UAE.
            </p>
            <p>
              Our own warehouse and equipment rental division enables us to remain cost competitive while ensuring excellent quality equipment and décor — all within your desired budget.
            </p>
            <p className="font-display italic text-cream/90 text-lg">
              Your wedding is something you&apos;ll remember and treasure for the rest of your life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="II" label="Wedding Traditions" />
          <EditorialHeading className="mt-8 max-w-xl">Arabic, Indian &amp; Western weddings.</EditorialHeading>
          <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
            {TRADITIONS.map((s) => (
              <div key={s.t} className="bg-background p-10 lg:p-12">
                <h3 className="font-display text-3xl text-cream">{s.t}</h3>
                <Hairline className="mt-5 w-12!" />
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.c}</p>
                <ul className="mt-8 space-y-2">
                  {s.services.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground before:mr-2 before:text-gold before:content-['—']">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2 py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="III" label="Gallery" />
          <EditorialHeading className="mt-8">Weddings we&apos;ve created.</EditorialHeading>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <article key={g.t} className="group relative aspect-4/5 overflow-hidden bg-surface">
                <img src={g.image.src} alt={g.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1400 ease-out group-hover:scale-[1.05]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 60 / 0.88) 100%)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="eyebrow">Weddings &middot; Dubai</span>
                  <h3 className="mt-3 font-display text-2xl text-cream">{g.t}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionLabel index="IV" label="Planning Process" />
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
      </section>

      <section className="bg-surface py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-display text-[8rem] leading-none text-gold/50">&ldquo;</span>
          <blockquote className="-mt-12 font-display text-3xl sm:text-4xl font-light italic text-cream leading-tight">
            You imagine it and we will make it happen.
          </blockquote>
          <Hairline className="w-16! mx-auto mt-10" />
          <p className="eyebrow mt-4">Future Vision Events &amp; Weddings &middot; Dubai, UAE</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
