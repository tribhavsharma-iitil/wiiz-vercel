import type { FooterLinkColumn } from "@/lib/types";

export const footerLinkColumns: readonly FooterLinkColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "ViteEats", href: "#why-viteeats" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export const footerTagline =
  "WIIZ is the compute and intelligence layer behind ViteEats — routing, pricing, forecasting, and fleet tracking for modern delivery networks.";
