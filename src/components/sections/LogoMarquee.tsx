import Image from "next/image";
import { partnerLogos } from "@/lib/data/partners";

export function LogoMarquee() {
  return (
    <section
      className="group w-full overflow-hidden border-y border-border-subtle bg-surface-tint py-8"
      aria-label="Trusted by delivery and logistics platforms"
    >
      <div className="flex w-max animate-marquee items-center gap-24 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((duplicate) => (
          <ul key={duplicate} aria-hidden={duplicate === 1} className="flex shrink-0 items-center gap-24">
            {partnerLogos.map((logo) => (
              <li key={`${duplicate}-${logo.id}`} className="flex shrink-0 items-center opacity-90">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
