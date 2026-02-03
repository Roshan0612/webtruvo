"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#10b981]/10 via-white to-[#3b82f6]/10">
      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="eyebrow text-[#10b981]">Ready to Get Started?</p>
            <h2 className="section-title">
              Let&apos;s Transform Your Digital Presence
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Book a free strategy call to discuss your growth objectives and discover how we can help you achieve measurable results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-base px-8">
              <a href="https://cal.com/roshan-gawade-fiwggl/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                Schedule Your Strategy Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8">
              <Link href="#services">
                Explore Our Services
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
            <div className="soft-panel">
              <div className="text-2xl font-bold text-[#10b981] mb-2">Free</div>
              <p className="text-sm text-[#6b7280]">No obligation consultation</p>
            </div>
            <div className="soft-panel">
              <div className="text-2xl font-bold text-[#10b981] mb-2">30 Min</div>
              <p className="text-sm text-[#6b7280]">Quick discovery session</p>
            </div>
            <div className="soft-panel">
              <div className="text-2xl font-bold text-[#10b981] mb-2">Actionable</div>
              <p className="text-sm text-[#6b7280]">Walk away with insights</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
