"use client";

import { MessageCircle } from "lucide-react";
import { PHONES } from "@/data/contact";

const WHATSAPP_URL = `https://wa.me/${PHONES[0].tel.replace("+", "")}`;

export function WhatsAppButton() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-105 hover:bg-[#20bd5a] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        >
            <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} fill="currentColor" />
        </a>
    );
}
