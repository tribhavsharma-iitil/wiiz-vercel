import { Container, SectionHeading, SolutionCard } from "@/components/ui";
import { solutions } from "@/lib/data/solutions";

export function SolutionsSection() {
  return (
    <section id="solutions" className="w-full scroll-mt-24 bg-white py-20 md:py-24 lg:py-[100px]">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              One platform. <span className="text-brand">Zero logistics headaches.</span>
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
