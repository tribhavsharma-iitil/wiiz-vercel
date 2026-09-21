import { Container, SectionHeading } from "@/components/ui";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { infrastructureDiagram } from "@/lib/data/diagram";
import { cn } from "@/lib/utils/cn";
import type { DiagramCard as DiagramCardData } from "@/lib/types";

function DiagramCard({ card }: { card: DiagramCardData }) {
  const isPrimary = card.variant === "primary";

  return (
    <div
      className={cn(
        "flex flex-1 flex-col gap-3 rounded-xl border bg-white p-5",
        isPrimary ? "border-[1.5px] border-brand" : "border-border-subtle",
      )}
    >
      <p className="text-body-md font-semibold text-brand-ink">{card.title}</p>
      <ul className="flex flex-col gap-2.5">
        {card.capabilities.map((capability) => (
          <li key={capability} className="flex items-center gap-2">
            <CheckIcon className={cn("size-3.5 shrink-0", isPrimary ? "text-brand" : "text-brand-sky")} />
            <span className="text-body-sm text-ink">{capability}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyUsSection() {
  const [wilzCore, viteEatsApp] = infrastructureDiagram;

  return (
    <section id="why-viteeats" className="w-full scroll-mt-24 bg-brand py-20 md:py-24 lg:py-[100px]">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <SectionHeading
            eyebrow="Why ViteEats runs on us"
            theme="dark"
            title={
              <>
                You focus on the business. We run the <span className="text-brand-sky">infrastructure.</span>
              </>
            }
            description="ViteEats doesn't think about routing, surge pricing, or fleet health. Because we do it, every second of every order. We're the partner that runs the entire delivery layer in the background, so they can focus on the food, the customers, and the growth."
          />
        </div>

        <div className="flex flex-1 items-center gap-6 rounded-card border border-white/[0.08] bg-white/[0.08] p-8">
          <DiagramCard card={wilzCore} />
          <ArrowRightIcon className="size-6 shrink-0 text-white" />
          <DiagramCard card={viteEatsApp} />
        </div>
      </Container>
    </section>
  );
}
