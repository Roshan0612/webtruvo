import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container-default grid gap-8 py-16 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="text-xl font-bold bg-gradient-to-r from-[#10b981] to-[#059669] bg-clip-text text-transparent">
            Webtruvo
          </p>
          <p className="text-sm text-[#cbd5e1]">
            Webtruvo delivers websites, SEO optimization, and automation systems that
            help businesses scale efficiently and sustainably.
          </p>
          <p className="text-sm text-[#cbd5e1]">webtruvo@gmail.com</p>
        </div>
        <div className="space-y-3 text-sm text-[#cbd5e1]">
          <Link href="https://www.linkedin.com" className="block hover:text-[#10b981] transition-colors">
            LinkedIn
          </Link>
          <Link href="/privacy" className="block hover:text-[#10b981] transition-colors">
            Privacy Policy
          </Link>
          <p className="pt-4 text-xs text-[#64748b]">
            © {new Date().getFullYear()} Webtruvo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
