import Image from "next/image";
import type { ServiceItem } from "@/lib/types";
import { GlowEllipse } from "@/components/icons";

interface ServiceCardProps {
  readonly service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-card border border-border-subtle bg-white p-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-heading-md font-semibold text-brand-ink">{service.title}</h3>
        <p className="text-body-md text-muted">{service.description}</p>
        <p className="text-[13px] font-medium text-brand">{service.highlight}</p>
      </div>

      <div className="relative -mx-6 flex h-[194px] items-end justify-center">
        <GlowEllipse className="pointer-events-none absolute bottom-[54px] h-[85px] w-[250px]" />
        <Image
          src={service.image.src}
          alt={service.image.alt}
          width={290}
          loading="eager"
          height={194}
          placeholder="blur"
          blurDataURL={service.image.blurDataURL}
          className="relative h-full w-auto object-contain"
        />
      </div>
    </article>
  );
}
