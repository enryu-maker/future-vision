export const SITE = {
    name: "Future Vision Events & Weddings",
    shortName: "Future Vision",
    url: "https://futurevision.ae",
    email: "futurevision@eim.ae",
    motto: "You imagine it and we will make it happen",
    tagline: "Elegance In Every Detail",
    region: "Dubai, UAE",
} as const;

export interface PhoneContact {
    display: string;
    tel: string;
    note?: string;
}

export const PHONES: readonly PhoneContact[] = [
    // { display: "+971-50-3576449", tel: "+971503576449", note: "24-hour line" },
    { display: "+971-56-9401230", tel: "+971569401230" },
];

export const PHONES_INTERNATIONAL = [
    // { display: "00971-50-3576449", tel: "+971503576449" },
    { display: "00971-56-9401230", tel: "+971569401230" },
] as const;

export const OFFICES = [
    {
        city: "Dubai",
        address: "Oud Metha Building, Oud Metha, Near Lamcy Plaza, Dubai",
    },
    {
        city: "Sharjah",
        address: "Burj 2000 / Damas Building, Rolla, Sharjah, U.A.E",
    },
    {
        city: "Abu Dhabi",
        address: "Al Bateen Commercial Building, Al Bateen Area, 34th Street, Abu Dhabi",
    },
] as const;
