"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const studies = [
  {
    title: "Beauty & Makeup Artist",
    industry: "Beauty & Wellness",
    image: "https://res.cloudinary.com/dswa5docr/image/upload/v1762324496/WhatsApp_Image_2025-11-05_at_12.03.50_358abeba_b4rirx.jpg",
    challenge: "Need for professional online presence to showcase portfolio and attract clients.",
    solution: "Custom website with portfolio gallery, online booking system, and mobile-optimized design.",
    result: "Beautiful digital showcase with seamless client booking"
  },
  {
    title: "Fitness & Gym Studio",
    industry: "Health & Fitness",
    image: "https://res.cloudinary.com/dswa5docr/image/upload/v1762323535/WhatsApp_Image_2025-11-05_at_11.48.43_6b3fe802_lxbfdq.jpg",
    challenge: "Required modern website to promote services and enable class bookings.",
    solution: "Responsive fitness website with class schedules, membership plans, and contact integration.",
    result: "Professional online presence driving member sign-ups"
  },
  {
    title: "Small Business Solutions",
    industry: "E-commerce",
    image: "https://res.cloudinary.com/dswa5docr/image/upload/v1770124712/17c52075-7908-4a49-abe1-711a84f695db.png",
    challenge: "Manual processes slowing down operations and sales.",
    solution: "Automated workflows, inventory management, and payment integration.",
    result: "Streamlined operations and increased efficiency"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-[#f9fafb]">
      <div className="container-default space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-4"
        >
          <p className="eyebrow text-[#10b981]">Portfolio</p>
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Real projects we've delivered for businesses looking to establish their digital presence.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-[#e5e7eb] hover:shadow-lg transition-all overflow-hidden">
                {/* Image Section */}
                {study.image && (
                  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#f9fafb]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg text-[#000000]">{study.title}</CardTitle>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#10b981] font-semibold">
                    {study.industry}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-[#6b7280]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000000]">
                      Challenge
                    </p>
                    <p className="mt-2">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000000]">
                      Solution
                    </p>
                    <p className="mt-2">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000000]">
                      Result
                    </p>
                    <p className="mt-2 text-[#10b981] font-bold">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
