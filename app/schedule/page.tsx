import type { Metadata } from "next";
import { Booking } from "@/components/booking";

export const metadata: Metadata = {
  title: "Schedule a Call | Webtruvo",
  description: "Book a strategy call with our digital growth experts to discuss your project.",
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      <Booking />
    </main>
  );
}
