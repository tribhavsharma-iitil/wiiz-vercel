import { Container, SectionHeading, ServiceCard } from "@/components/ui";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="w-full scroll-mt-24 bg-surface-tint py-20 md:py-24 lg:py-[100px]">
      <Container className="flex flex-col items-start gap-12 md:items-center md:justify-center">
        <SectionHeading
          eyebrow="Services"
          align="center"
          title={
            <>
              Everything you need to run logistics at <span className="text-brand">AI speed.</span>
            </>
          }
          description="Take the whole platform, or pick the pieces you're missing. We don't judge."
        />

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
