import { CallToAction } from "@/components/call-to-action";
import { CaseStudies } from "@/components/case-studies";
import HeroNew from "@/components/hero-new";
import { Process } from "@/components/process";
import { ServicesNew } from "@/components/services-new";
import { WhyUs } from "@/components/why-us";
import MetricsSection from "@/components/metrics-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webtruvo",
  description:
    "Webtruvo delivers websites, SEO optimization, and automation systems that help businesses scale efficiently.",
  url: "https://webtruvo.com",
  areaServed: "Global",
  serviceType: [
    "Website Development",
    "SEO Optimization",
    "Workflow Automation",
    "Custom Digital Systems"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "webtruvo@gmail.com"
  }
};

export default function HomePage() {
  return (
    <main>
      <HeroNew />
      <MetricsSection />
      <ServicesNew />
      <Process />
      <WhyUs />
      <CaseStudies />
      <CallToAction />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
