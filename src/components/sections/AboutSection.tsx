import Image from "next/image";
import { Container, MetricCard, SectionHeading, TrustPill } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { blurPlaceholders } from "@/lib/constants/blur-placeholders";
import { performanceMetrics } from "@/lib/data/metrics";

export function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-24 bg-white py-20 md:py-24 lg:py-[100px]">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-6">
            <SectionHeading
              eyebrow="About WILZ"
              title={
                <>
                  The infrastructure behind <span className="text-brand">every delivery.</span>
                </>
              }
              description={
                <>
                  <p>You cannot out-engineer physics. But you can eliminate the infrastructure that slows you down.</p>
                  <p>
                    WIIZ is the compute and intelligence layer behind ViteEats, we run the routing, pricing, demand
                    forecasting, and fleet tracking for every order they deliver, across an entire city at once, in
                    real time.
                  </p>
                </>
              }
            />

            <div className="flex flex-wrap gap-4">
              <TrustPill>
                <CheckIcon className="size-4 text-brand-ink" />
                <span className="text-body-md font-semibold text-brand">Coded</span>
              </TrustPill>
              <TrustPill>
                <CheckIcon className="size-4 text-brand-ink" />
                <span className="text-body-md font-semibold text-brand">100% Secure</span>
              </TrustPill>
            </div>
          </div>

          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-card border border-border-subtle lg:min-h-0">
            <Image
              src="/images/about/network-diagram.jpg"
              alt="Illustration of a connected city network representing WIIZ's real-time logistics graph"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurPlaceholders.about}
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 rounded-card border border-border-subtle bg-surface-tint p-6 sm:p-10">
          {performanceMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </Container>
    </section>
  );
}
