import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Webtruvo | Website, SEO & Automation Experts",
  description:
    "Webtruvo delivers high-performing websites, technical SEO, and automation systems that help businesses scale efficiently.",
  metadataBase: new URL("https://webtruvo.com"),
  alternates: {
    canonical: "https://webtruvo.com"
  },
  openGraph: {
    title: "Webtruvo | Website, SEO & Automation Experts",
    description:
      "Webtruvo delivers high-performing websites, technical SEO, and automation systems that help businesses scale efficiently.",
    url: "https://webtruvo.com",
    siteName: "Webtruvo",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Webtruvo | Website, SEO & Automation Experts",
    description:
      "Webtruvo delivers high-performing websites, technical SEO, and automation systems that help businesses scale efficiently."
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
