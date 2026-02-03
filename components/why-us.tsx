"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Zap, Gauge, MessageSquare } from "lucide-react";

const values = [
  {
    title: "Strategy-First Execution",
    description: "Every engagement starts with a clear growth thesis and success metrics.",
    icon: Target,
    color: "#10b981",
    gradient: "from-[#10b981] to-[#059669]"
  },
  {
    title: "Automation-Focused Systems",
    description: "We streamline handoffs and workflows to protect margin and speed.",
    icon: Zap,
    color: "#3b82f6",
    gradient: "from-[#3b82f6] to-[#2563eb]"
  },
  {
    title: "Performance-Oriented Mindset",
    description: "We obsess over speed, SEO, and measurable conversion outcomes.",
    icon: Gauge,
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#7c3aed]"
  },
  {
    title: "Clear Communication",
    description: "No jargon. No surprises. You always know what's happening.",
    icon: MessageSquare,
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#7c3aed]"
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-white via-[#f9fafb] to-white">
      <div className="container-default space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <p className="eyebrow text-[#10b981]">Partnership</p>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We are a senior team focused on operational rigor, dependable delivery, and
            exceptional project outcomes.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border-[#e5e7eb] transition-all duration-300 hover:shadow-2xl group relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  <CardContent className="space-y-4 p-6 relative">
                    {/* Icon with animated background */}
                    <motion.div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-xl relative"
                      style={{
                        background: `${value.color}15`,
                        borderColor: value.color,
                        borderWidth: "2px",
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-7 w-7" style={{ color: value.color }} />
                    </motion.div>

                    {/* Title with gradient on hover */}
                    <h3 className="text-lg font-bold text-[#000000] group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-[#059669] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {value.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      className="h-1 rounded-full"
                      style={{ backgroundColor: value.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
