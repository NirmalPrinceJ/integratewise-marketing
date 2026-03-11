/**
 * Contact — Google Apps Script form handler. No signup/login.
 */
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GOOGLE_FORM_SCRIPT_URL, hasGoogleFormScript } from "@/lib/integrations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasGoogleFormScript) {
      setSubmitted(true);
      return;
    }
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(GOOGLE_FORM_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Google Apps Script requires no-cors for cross-origin POST
      });
      // no-cors mode returns opaque response; assume success if no throw
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-[#F0FDF6]">
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA775]/10 text-[#0EA775] text-sm font-medium mb-8">
              <Mail className="w-4 h-4" />
              Get in touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6">
              Contact us
            </h1>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
              Questions about IntegrateWise? Partnerships, support, or just want to say hi — we're here.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
            >
              <CheckCircle className="w-16 h-16 text-[#0EA775] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Message sent</h2>
              <p className="text-gray-500">
                We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 text-left"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA775]/30 focus:border-[#0EA775]"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-[#0EA775] hover:bg-[#0EA775]/90 text-white font-semibold rounded-xl"
                >
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
