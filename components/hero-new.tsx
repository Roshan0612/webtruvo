"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import VehicleAnimation from "./vehicle-animation";

export default function HeroNew() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    },
  };

  return (
    <section className="min-h-screen w-full bg-white overflow-hidden">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20 lg:py-0">
          {/* Left Side - Text & Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:space-y-10"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="eyebrow text-[#10b981]">Welcome to Webtruvo</span>
              <h1 className="section-title leading-tight">
                Transform Your <span className="bg-gradient-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">Digital Growth</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#6b7280] max-w-xl leading-relaxed"
            >
              Elevate your online presence with our comprehensive digital growth solutions. We deliver measurable results through strategic website optimization, SEO excellence, and intelligent automation.
            </motion.p>

            {/* Key Features */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 rounded-full border-2 border-[#10b981] bg-[#10b981]/5">
                <p className="text-sm font-semibold text-[#10b981]">🚀 Fast Delivery</p>
              </div>
              <div className="px-4 py-2 rounded-full border-2 border-[#3b82f6] bg-[#3b82f6]/5">
                <p className="text-sm font-semibold text-[#3b82f6]">💡 Strategic Approach</p>
              </div>
              <div className="px-4 py-2 rounded-full border-2 border-[#8b5cf6] bg-[#8b5cf6]/5">
                <p className="text-sm font-semibold text-[#8b5cf6]">📈 Measurable Results</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button asChild size="lg">
                <a href="https://cal.com/roshan-gawade-fiwggl/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            <VehicleAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
