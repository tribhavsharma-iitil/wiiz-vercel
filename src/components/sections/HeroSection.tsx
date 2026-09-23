import Image from "next/image";
import { Button, Container } from "@/components/ui";
import { blurPlaceholders } from "@/lib/constants/blur-placeholders";
import { primaryCta, secondaryCta } from "@/lib/data/navigation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero/wizz-hero-bg.png"
        alt=""
        fill
        priority
        aria-hidden="true"
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <Container className="relative z-10 flex flex-col items-center gap-10 pt-20 text-center md:pt-28">
        <div className="flex max-w-3xl flex-col items-center gap-5">
          <h1 className="text-display-xl font-extrabold">
            <span className="text-brand-ink">Infrastructure so steady, </span>
            <span className="text-brand">you&rsquo;ll forget it&rsquo;s there.</span>
          </h1>
          <p className="max-w-2xl text-body-lg text-muted">
            We&rsquo;re the technology partner powering ViteEats. From real-time routing to demand forecasting, we
            run the compute and intelligence layer behind every delivery.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </Container>

      <div className="relative mx-auto mt-16 w-full max-w-[1440px]">
        <Image
          src="/images/hero/hero-network.png"
          alt="Live delivery map showing an optimized courier route with real-time speed and ETA telemetry"
          width={1536}
          height={1024}
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurPlaceholders.hero}
          className="h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
