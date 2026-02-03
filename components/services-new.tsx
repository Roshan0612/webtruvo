"use client";

import { Code2, Gauge, Workflow, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description: "Conversion-ready web experiences engineered for credibility and growth.",
    icon: Code2,
    color: "#10b981",
    bullets: [
      "Custom responsive websites",
      "Landing pages",
      "E-commerce setup",
      "Performance optimization",
      "Technical SEO foundation"
    ]
  },
  {
    title: "SEO & Performance",
    description: "Technical and content improvements that lift organic visibility.",
    icon: Gauge,
    color: "#3b82f6",
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
    color: "#8b5cf6",
    bullets: [
      "Make automation",
      "Zapier workflows",
      "CRM integrations",
      "Lead follow-ups",
      "API connections"
    ]
  },
  {
    title: "Digital Systems",
    description: "Tailored systems designed around your internal workflows.",
    icon: Wrench,
    color: "#8b5cf6",
    bullets: [
      "Booking systems",
      "Client dashboards",
      "Internal tools",
      "Backend solutions"
    ]
  }
];

export function ServicesNew() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-default space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4"
        >
          <p className="eyebrow text-[#10b981]">Capabilities</p>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            We partner with growth-minded leadership teams to deliver measurable digital
            outcomes. Every engagement is scoped around performance, reliability, and
            quality execution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="space-y-4">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-xl"
                      style={{
                        background: `${service.color}15`,
                        borderColor: service.color,
                        borderWidth: "2px",
                      }}
                    >
                      <Icon className="h-7 w-7" style={{ color: service.color }} />
                    </div>
                    <CardTitle className="text-lg text-[#000000]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-[#6b7280]">{service.description}</p>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span
                            className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="text-sm text-[#6b7280]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
