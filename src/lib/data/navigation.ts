import type { CallToAction, NavLink } from "@/lib/types";

export const primaryNavLinks: readonly NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why ViteEats", href: "#why-viteeats" },
  { label: "Contact", href: "#contact" },
];

export const primaryCta: CallToAction = {
  label: "Get Started →",
  href: "#contact",
};

export const secondaryCta: CallToAction = {
  label: "Get a live demo",
  href: "#contact",
};
