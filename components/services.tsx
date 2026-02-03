import { Code2, Gauge, Workflow, Wrench } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Website Development",
    description: "Conversion-ready web experiences engineered for credibility and growth.",
    icon: Code2,
    bullets: [
      "Custom responsive websites",
      "Landing pages",
      "E-commerce setup",
      "Performance optimization",
      "Technical SEO foundation"
    ]
  },
  {
    title: "SEO & Performance Optimization",
    description: "Technical and content improvements that lift organic visibility.",
    icon: Gauge,
    bullets: [
      "On-page SEO",
      "Technical audits",
      "Keyword research",
      "Local SEO",
      "Speed improvements"
    ]
  },
  {
    title: "Workflow Automation",
    description: "Automations that reduce manual work and keep revenue moving.",
    icon: Workflow,
    bullets: [
      "Make automation",
      "Zapier workflows",
      "CRM integrations",
      "Lead follow-ups",
      "API connections"
    ]
  },
  {
    title: "Custom Digital Systems",
    description: "Tailored systems designed around your internal workflows.",
    icon: Wrench,
    bullets: [
      "Booking systems",
      "Client dashboards",
      "Internal tools",
      "Backend solutions"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-[#f4f6f8]">
      <div className="container-default space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            We partner with growth-minded leadership teams to deliver measurable digital
            outcomes. Every engagement is scoped around performance, reliability, and
            long-term scalability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group h-full border-[#d8e0e7] transition-transform duration-200 hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#d8e0e7] bg-white">
                    <Icon className="h-6 w-6 text-[#0b2a3f]" />
                  </div>
                  <CardTitle className="text-xl text-[#122334]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-[#4b5f73]">
                  <p>{service.description}</p>
                  <ul className="space-y-2 text-[#4b5f73]">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8ca0b3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
