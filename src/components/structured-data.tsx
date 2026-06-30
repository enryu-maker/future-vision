import { OFFICES, PHONES, SITE } from "@/data/contact";

export function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EventPlanner",
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: PHONES[0].display,
        description:
            "Best Event Management Company in Dubai — Corporate Event Management Dubai, Wedding Planner Dubai, Conference Organizer Dubai, Exhibition Management Company Dubai, Product Launch Event Agency Dubai, Gala Dinner Organizer Dubai, Brand Activation Agency Dubai, and Live Entertainment Dubai across UAE.",
        slogan: SITE.motto,
        areaServed: [
            { "@type": "City", name: "Dubai" },
            { "@type": "City", name: "Dubai Marina" },
            { "@type": "City", name: "Business Bay" },
            { "@type": "City", name: "Palm Jumeirah" },
            { "@type": "City", name: "Sharjah" },
            { "@type": "City", name: "Abu Dhabi" },
            { "@type": "Country", name: "United Arab Emirates" },
        ],
        address: OFFICES.map((office) => ({
            "@type": "PostalAddress",
            addressLocality: office.city,
            addressRegion: office.city,
            addressCountry: "AE",
            streetAddress: office.address,
        })),
        sameAs: [SITE.url],
        knowsAbout: [
            "Event Management Company Dubai",
            "Corporate Event Management Dubai",
            "Corporate Event Planner Dubai",
            "Conference Organizer Dubai",
            "Exhibition Management Company Dubai",
            "Product Launch Event Agency Dubai",
            "Gala Dinner Organizer Dubai",
            "Wedding Planner Dubai",
            "Luxury Wedding Planner Dubai",
            "Indian Wedding Planner Dubai",
            "Beach Wedding Planner Dubai",
            "Entertainment Agency Dubai",
            "Live Entertainment Dubai",
            "Brand Activation Agency Dubai",
            "MICE Events Dubai",
            "Team Building Events Dubai",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
