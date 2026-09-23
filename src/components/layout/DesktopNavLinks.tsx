"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface DesktopNavLinksProps {
  readonly links: readonly NavLink[];
}

/** Bolds whichever nav link matches the section currently in view, and updates instantly on click. */
export function DesktopNavLinks({ links }: DesktopNavLinksProps) {
  const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? "");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveHref(`#${mostVisible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  return (
    <ul className="hidden items-center gap-8 text-body-sm lg:flex">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={() => setActiveHref(link.href)}
            aria-current={activeHref === link.href ? "true" : undefined}
            className={cn(
              "transition-colors",
              activeHref === link.href ? "font-bold text-brand" : "font-medium text-muted-foreground hover:text-brand",
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
