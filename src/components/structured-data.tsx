import { OFFICES, PHONES, SITE } from "@/data/contact";

export function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EventPlanner",
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: PHONES.map((p) => p.display),
        description:
            "Full-service entertainment and event management company in Dubai, UAE — corporate events, weddings, and live entertainment across the UAE and Middle East.",
        slogan: SITE.motto,
        areaServed: [
            { "@type": "City", name: "Dubai" },
            { "@type": "City", name: "Sharjah" },
            { "@type": "City", name: "Abu Dhabi" },
            { "@type": "Country", name: "United Arab Emirates" },
        ],
        address: OFFICES.map((office) => ({
            "@type": "PostalAddress",
            addressLocality: office.city,
            addressRegion: office.city === "Dubai" ? "Dubai" : office.city,
            addressCountry: "AE",
            streetAddress: office.address,
        })),
        sameAs: [SITE.url],
        knowsAbout: [
            "Corporate Events",
            "Wedding Planning",
            "Arabic Weddings",
            "Indian Weddings",
            "Western Weddings",
            "Live Entertainment",
            "Event Management",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
