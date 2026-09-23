import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { footerLinkColumns, footerTagline } from "@/lib/data/footer";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand py-10">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex max-w-[515px] flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <Image src="/brand/wiiz-mark.svg" alt="" width={103} height={34} aria-hidden="true" />
              <span className="h-8 w-px bg-white/30" aria-hidden="true" />
              <span className="font-display text-[32px] font-light tracking-tight text-white">Techprise</span>
            </div>
            <p className="text-body-sm leading-relaxed text-white/70">{footerTagline}</p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/footer/duns-badge.png"
                alt="D-U-N-S Registered — certified on Dun & Bradstreet"
                width={64}
                height={54}
              />
              <div className="flex flex-col gap-1.5 text-[11px] font-semibold leading-snug">
                <p className="text-white">D-U-N-S® Registered</p>
                <p className="text-white/70">Certified on Dun &amp; Bradstreet</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-body-sm sm:flex-row sm:gap-16">
            {footerLinkColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4 sm:w-[140px]">
                <p className="font-semibold text-white">{column.title}</p>
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <hr className="border-white/10" />

        <div className="flex flex-col items-start gap-4 text-[13px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
