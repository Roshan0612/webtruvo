"use client";

import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery Call",
    description: "We assess your current digital foundation and growth priorities."
  },
  {
    title: "Strategy & Planning",
    description: "We define the roadmap, success metrics, and delivery plan."
  },
  {
    title: "Build & Implementation",
    description: "We execute with senior specialists and transparent milestones."
  },
  {
    title: "Launch & Handoff",
    description: "We deliver your complete solution with documentation and training."
  }
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-[#f9fafb]">
      <div className="container-default space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-4"
        >
          <p className="eyebrow text-[#10b981]">Methodology</p>
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle">
            Every project is guided by a structured process designed to reduce risk and
            deliver measurable outcomes.
          </p>
        </motion.div>
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#10b981] font-semibold">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-bold text-[#000000]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#6b7280]">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <>
                  <Separator className="my-4 md:hidden" orientation="horizontal" />
                  <Separator className="mx-4 hidden md:block" orientation="vertical" />
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
