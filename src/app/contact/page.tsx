import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Quessence — Let's Build Something Great",
  description:
    "Get in touch with Quessence. Tell us what you're working on — we'll tell you how we can help. No pressure, no pitch decks, just a real conversation.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
