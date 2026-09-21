import Image from "next/image";
import Link from "next/link";
import { Button, Container } from "@/components/ui";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileNav } from "./MobileNav";
import { primaryCta, primaryNavLinks } from "@/lib/data/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-white/95 backdrop-blur">
      <Container as="nav" className="relative flex items-center justify-between py-4" aria-label="Primary">
        <Link href="/" className="shrink-0" aria-label="WIIZ | Techprise home">
          <Image src="/brand/wiiz-techprise-lockup.svg" alt="WIIZ | Techprise" width={211} height={44} priority />
        </Link>

        <DesktopNavLinks links={primaryNavLinks} />

        <Button href={primaryCta.href} variant="primary" className="hidden md:inline-flex">
          {primaryCta.label}
        </Button>

        <MobileNav links={primaryNavLinks} cta={primaryCta} />
      </Container>
    </header>
  );
}
