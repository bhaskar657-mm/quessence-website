import type { Metadata } from "next";
import WorkPageContent from "@/components/WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work — Portfolio | Quessence",
  description:
    "Real projects. Real results. See how Quessence has helped brands grow with integrated systems across content, web, creative, and AI.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
