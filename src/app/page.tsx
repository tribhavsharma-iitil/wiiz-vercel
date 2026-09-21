import {
  AboutSection,
  ContactSection,
  HeroSection,
  LogoMarquee,
  MissionSection,
  ServicesSection,
  SolutionsSection,
  WhyUsSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <SolutionsSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}
