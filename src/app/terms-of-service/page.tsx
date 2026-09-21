import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of WIIZ.",
};

export default function TermsOfServicePage() {
  return (
    <Container as="article" className="flex flex-col gap-6 py-20 md:py-24">
      <h1 className="text-display-lg font-bold text-brand-ink">Terms of Service</h1>
      <p className="max-w-2xl text-body-lg text-muted">
        This page is a placeholder. Replace it with your organization&rsquo;s actual terms of service before
        launching to production.
      </p>
    </Container>
  );
}
