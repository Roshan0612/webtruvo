import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="section-padding pb-28 md:pb-36 min-h-[72vh]">
      <div className="marquee">
        <div className="container-default">
          <div className="marquee-track">
            <span className="marquee-text">Web Strategy</span>
            <span className="marquee-text">SEO Optimization</span>
            <span className="marquee-text">Automation Systems</span>
            <span className="marquee-text">Conversion Architecture</span>
            <span className="marquee-text">Performance Engineering</span>
            <span className="marquee-text">Growth Analytics</span>
            <span className="marquee-text">Web Strategy</span>
            <span className="marquee-text">SEO Optimization</span>
            <span className="marquee-text">Automation Systems</span>
            <span className="marquee-text">Conversion Architecture</span>
            <span className="marquee-text">Performance Engineering</span>
            <span className="marquee-text">Growth Analytics</span>
          </div>
        </div>
      </div>

      <div className="container-default pt-10">
        <div className="max-w-4xl space-y-6">
          <p className="eyebrow reveal">Digital Growth Consultancy</p>
          <h1
            className="text-4xl font-bold leading-[1.05] text-[#122334] md:text-6xl reveal"
            style={{ animationDelay: "120ms" }}
          >
            We build <span className="text-[#0b2a3f]">digital systems</span> that earn
            trust and compound growth.
          </h1>
          <p className="section-subtitle reveal-slow" style={{ animationDelay: "220ms" }}>
            Webtruvo partners with leadership teams who value clarity and execution. We
            deliver high-performing websites, search visibility, and automation systems
            designed for long-term credibility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="soft-panel reveal" style={{ animationDelay: "300ms" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6f82]">
              The Webtruvo Standard
            </p>
            <div className="mt-4 space-y-4 text-[#4b5f73]">
              <p>
                We are intentional about every touchpoint. Strategy, build quality, and
                optimization all serve a single goal: sustainable, trustworthy growth.
              </p>
              <div className="divider-line" />
              <div className="grid gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0b2a3f]" />
                  <span>Senior specialists aligned to your business objectives</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0b2a3f]" />
                  <span>Clear delivery roadmap with measurable milestones</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0b2a3f]" />
                  <span>Long-term partnership focused on compounding growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="soft-panel reveal" style={{ animationDelay: "420ms" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6f82]">
              Engage With Us
            </p>
            <div className="mt-4 space-y-4 text-[#4b5f73]">
              <p>
                We begin with a focused strategy call to understand your priorities and
                outline a practical roadmap.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button asChild className="w-full">
                  <Link
                    href="https://cal.com/roshan-gawade-fiwggl/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Strategy Call
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
