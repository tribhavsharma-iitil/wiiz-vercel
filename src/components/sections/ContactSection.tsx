import { Container, SectionHeading, TrustPill } from "@/components/ui";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="w-full scroll-mt-24 bg-surface-tint py-20 md:py-24 lg:py-[100px]">
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-20">
        <div className="flex flex-1 flex-col gap-8">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Ready to <span className="text-brand">deploy?</span>
              </>
            }
            description="Tell us about your network and we'll tell you what it could be doing."
          />

          <TrustPill className="w-fit">
            <span className="size-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
            <span className="text-[13px] font-medium text-ink">We reply within 24 hours — usually faster.</span>
          </TrustPill>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
