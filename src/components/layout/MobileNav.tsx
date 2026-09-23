"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import type { CallToAction, NavLink } from "@/lib/types";

interface MobileNavProps {
  readonly links: readonly NavLink[];
  readonly cta: CallToAction;
}

export function MobileNav({ links, cta }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex size-10 items-center justify-center rounded-control border border-border-subtle text-brand-ink"
      >
        <span className="sr-only">Toggle navigation</span>
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
          {isOpen ? (
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border-subtle bg-white px-6 py-4 shadow-lg"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2.5 text-body-md font-medium text-brand-ink hover:bg-surface-tint"
            >
              {link.label}
            </Link>
          ))}
          <Button href={cta.href} variant="primary" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
            {cta.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
