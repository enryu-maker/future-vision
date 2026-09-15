const schema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.futurevision.ae/#organization",
  name: "Future Vision Events & Weddings",
  url: "https://www.futurevision.ae/",
  description:
    "Future Vision Events & Weddings is a full-service event management company in the UAE providing corporate event management, conferences, exhibitions, product launches, weddings, gala dinners and live entertainment services.",
  email: "futurevision@eim.ae",
  telephone: "+971-56-9401230",
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oud Metha Building, Oud Metha, Near Lamcy Plaza",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-56-9401230",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: ["English"],
  },
  knowsAbout: [
    "Event Management",
    "Corporate Events",
    "Conferences",
    "Exhibitions",
    "Product Launches",
    "Wedding Planning",
    "Gala Dinners",
    "Live Entertainment",
    "Event Production",
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
