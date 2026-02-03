"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Booking() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-[#f9fafb] to-white">
      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-[#e5e7eb] bg-white shadow-lg hover:shadow-2xl transition-all">
            <CardHeader className="space-y-4">
              <p className="eyebrow text-[#10b981]">Contact</p>
              <CardTitle className="text-3xl text-[#000000] font-bold">
                Schedule Your Strategy Call
              </CardTitle>
              <p className="text-base text-[#6b7280]">
                Speak with a senior consultant to review your current digital systems and
                identify the highest-impact growth opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                <iframe
                  title="Strategy call booking"
                  src="https://cal.com/roshan-gawade-fiwggl/30min?overlayCalendar=true"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
