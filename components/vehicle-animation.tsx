"use client";

import { motion } from "framer-motion";

export default function VehicleAnimation() {
  // Road segments with capabilities cards
  const segments = [
    { title: "Web Development", value: "✓", color: "#10b981" },
    { title: "SEO & Performance", value: "✓", color: "#3b82f6" },
    { title: "Automation", value: "✓", color: "#8b5cf6" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Road */}
      <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
        {/* Vertical Road */}
        <div className="w-24 h-full relative">
          {/* Road base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-[#3b82f6]/10 rounded-full" />

          {/* Dotted center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-[#10b981] via-[#3b82f6] to-[#8b5cf6] opacity-30" />
            <div className="absolute inset-0 h-2 bg-[#10b981] rounded-full animate-pulse" style={{ animation: "float 3s ease-in-out infinite" }} />
          </div>

          {/* Metric cards along the road */}
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className="absolute left-32 w-56"
              style={{ top: `${(index + 1) * 25}%` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <div
                className="p-4 rounded-xl border-2 bg-white shadow-lg"
                style={{ borderColor: segment.color }}
              >
                <p className="text-sm text-[#9ca3af] uppercase tracking-wide">
                  {segment.title}
                </p>
                <p className="text-2xl font-bold mt-1" style={{ color: segment.color }}>
                  {segment.value}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Animated Vehicle */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Vehicle SVG */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="filter drop-shadow-lg"
            >
              {/* Vehicle body */}
              <rect
                x="15"
                y="30"
                width="50"
                height="20"
                rx="4"
                fill="#10b981"
              />

              {/* Cabin */}
              <rect
                x="20"
                y="20"
                width="40"
                height="15"
                rx="3"
                fill="#059669"
              />

              {/* Windows */}
              <rect x="25" y="23" width="12" height="8" fill="#a7f3d0" opacity="0.6" />
              <rect x="43" y="23" width="12" height="8" fill="#a7f3d0" opacity="0.6" />

              {/* Wheels */}
              <circle cx="28" cy="53" r="6" fill="#000000" />
              <circle cx="52" cy="53" r="6" fill="#000000" />

              {/* Wheel rims */}
              <circle cx="28" cy="53" r="3" fill="#10b981" />
              <circle cx="52" cy="53" r="3" fill="#10b981" />

              {/* Lights */}
              <rect x="16" y="35" width="3" height="3" fill="#fbbf24" />
              <rect x="61" y="35" width="3" height="3" fill="#fbbf24" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-[#10b981] rounded-full opacity-60"
          animate={{
            x: Math.cos((i / 3) * Math.PI * 2) * 100,
            y: Math.sin((i / 3) * Math.PI * 2) * 100,
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
