import { Container } from "@/components/ui";

export function MissionSection() {
  return (
    <section className="w-full bg-brand py-20 md:py-24 lg:py-[100px]">
      <Container className="flex gap-8 md:gap-12">
        <span className="hidden w-0.5 shrink-0 self-stretch bg-white sm:block" aria-hidden="true" />
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="text-display-lg font-bold text-white">
            Great delivery tech shouldn&rsquo;t be a privilege of the giants.{" "}
            <span className="text-brand-sky">We&rsquo;re here to hand it to everyone else.</span>
          </h2>
          <p className="text-body-lg leading-relaxed text-white/70 md:text-[24px] md:leading-[34px]">
            We built the infrastructure that runs ViteEats at scale, and we&rsquo;re making that same
            high-performance logistics intelligence accessible to every ambitious delivery business, without the
            years of infrastructure development it usually takes to get there.
          </p>
        </div>
      </Container>
    </section>
  );
}
