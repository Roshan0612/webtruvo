import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "/schedule", label: "Schedule Call" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white/95 backdrop-blur">
      <div className="container-default flex h-16 items-center justify-between">
        <Link href="#top" className="text-sm font-bold tracking-wide bg-gradient-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
          Webtruvo
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#6b7280] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#000000] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/schedule">
              Book Strategy Call
            </Link>
          </Button>
        </div>
      </div>
      <div className="container-default flex gap-3 pb-4 md:hidden">
        <Button asChild className="w-full">
          <Link href="/schedule">
            Book Strategy Call
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="#services">View Services</Link>
        </Button>
      </div>
    </header>
  );
}
