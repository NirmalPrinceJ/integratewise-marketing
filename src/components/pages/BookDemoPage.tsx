/**
 * Book Demo — Calendly only. No signup/login.
 */
import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar } from "lucide-react";
import { CALENDLY_URL, hasCalendly } from "@/lib/integrations";

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0FDF6] via-white to-gray-50">
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA775]/10 text-[#0EA775] text-sm font-medium mb-8">
              <Calendar className="w-4 h-4" />
              Book a personalized demo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6">
              See IntegrateWise in action
            </h1>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
              The Infrastructure for Modern Work — connect your tools, get AI-powered insights, and keep human control. See how it works for your team.
            </p>
          </motion.div>

          {hasCalendly ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <iframe
                src={CALENDLY_URL}
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a demo"
                className="min-h-[700px] w-full"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
            >
              <p className="text-gray-500 mb-6">
                Demo scheduling is being configured. In the meantime, reach out via our contact form.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0EA775] hover:bg-[#0EA775]/90 text-white font-semibold"
              >
                Contact us
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
