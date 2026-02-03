"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MetricProps {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

function AnimatedMetric({ label, value, suffix, color }: MetricProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = value / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className="text-4xl md:text-5xl font-bold"
        style={{ color }}
      >
        {displayValue}
        {suffix}
      </div>
      <p className="text-[#6b7280] text-sm md:text-base mt-2">{label}</p>
    </motion.div>
  );
}

export default function MetricsSection() {
  const metrics: MetricProps[] = [
    { label: "Expert Team", value: 100, suffix: "%", color: "#10b981" },
    { label: "Quality Focus", value: 100, suffix: "%", color: "#3b82f6" },
    { label: "On-Time Delivery", value: 100, suffix: "%", color: "#8b5cf6" },
    { label: "Custom Solutions", value: 100, suffix: "%", color: "#10b981" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#f9fafb] to-white">
      <div className="container-default">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="eyebrow text-[#10b981]">Our Commitment</span>
          <h2 className="section-title mt-4">What We Bring to Every Project</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Dedicated expertise and unwavering commitment to delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="soft-panel text-center hover:shadow-lg transition-all"
              style={{
                borderTopColor: metric.color,
                borderTopWidth: "3px",
              }}
            >
              <AnimatedMetric {...metric} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let&apos;s start your project today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
