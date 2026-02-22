"use client";

import { useState } from "react";
import { Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";

export default function PricingGuideModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/pricing-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "" });

      // Trigger PDF download
      const link = document.createElement("a");
      link.href = "/quessence_content_marketing_plans.pdf";
      link.download = "Quessence_Content_Marketing_Plans.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      // Reset state when dialog closes
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 text-[#3B6BF5] font-semibold hover:underline">
          <Download className="w-4 h-4" />
          Download Full Pricing Guide
        </button>
      </DialogTrigger>
      <DialogContent>
        {status === "success" ? (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-bold text-[var(--q-heading)]">
              Your download has started!
            </h3>
            <p className="text-sm text-[var(--q-body)] leading-relaxed max-w-[320px]">
              Check your downloads folder for the pricing guide. If it
              didn&apos;t start,{" "}
              <a
                href="/quessence_content_marketing_plans.pdf"
                download="Quessence_Content_Marketing_Plans.pdf"
                className="text-[#3B6BF5] font-semibold hover:underline"
              >
                click here
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="text-lg font-bold text-[var(--q-heading)]">
                Get the full pricing guide
              </h3>
              <p className="text-sm text-[var(--q-body)] leading-relaxed">
                Enter your details and we&apos;ll send you our complete content
                marketing pricing guide as a PDF.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pricing-name"
                  className="text-sm font-semibold text-[var(--q-heading)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="pricing-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[var(--q-section-bg-alt)] border border-[var(--q-card-border)] rounded-xl h-12 px-4 text-sm text-[var(--q-heading)] placeholder:text-[var(--q-muted)] outline-none focus:border-[#3B6BF5] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pricing-email"
                  className="text-sm font-semibold text-[var(--q-heading)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="pricing-email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[var(--q-section-bg-alt)] border border-[var(--q-card-border)] rounded-xl h-12 px-4 text-sm text-[var(--q-heading)] placeholder:text-[var(--q-muted)] outline-none focus:border-[#3B6BF5] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3B6BF5] text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Pricing Guide
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-1">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--q-body)]">
                    {errorMessage}
                  </span>
                </div>
              )}
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
