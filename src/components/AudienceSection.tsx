import { useState } from "react";
import {
  Code2,
  Factory,
  Stethoscope,
  Building2,
  Calculator,
  Store,
  GraduationCap,
  Car
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const verticals = [
  {
    id: "it",
    icon: Code2,
    label: "IT Services",
    subtitle: "The Bangalore Tech Firm",
    before: "You run 8 projects. Developers log time in Toggl, tasks in Jira, chats in WhatsApp. A client asks \"Is the payment gateway done?\" You check 3 tools before answering. Worse, a developer bills 20 hours to a cancelled module because they didn't see the client's email.",
    after: "The client's WhatsApp message instantly pulls up the project dashboard. Screen shows: Payment gateway 80% complete, but Alert: Client requested \"add UPI\" yesterday. System asks: \"This adds 8 hours. Send revised estimate?\" You tap once. Hours auto-map to invoices instantly.",
    outcome: "You manage client outcomes and developer flow, not Excel reconciliations."
  },
  {
    id: "manufacturing",
    icon: Factory,
    label: "Manufacturing",
    subtitle: "The Surat Textile Owner",
    before: "Orders in email, schedule on whiteboard, inventory in a register. Client asks \"Where is shipment #4421?\" You make 4 phone calls. 45 mins later, you find it's stuck in QC because the inspector is absent.",
    after: "Client email instantly pulls up the shipment dashboard. Screen shows: Shipment #4421 in QC (delayed). Alert: Alternative QC inspector available. System calculates: \"If inspected today, reaches Hamburg on schedule.\" You tap to reassign and send tracking link.",
    outcome: "You manage a global supply chain from your mobile, not chase people."
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    label: "Healthcare",
    subtitle: "The Jaipur Clinic Chain",
    before: "Patient arrives. Reception asks history (forgotten). Doctor asks for reports (missing). Pharmacy asks for prescription (in cabin). Billing asks for insurance (card at home).",
    after: "Patient enters. Screen shows: Last visit 3 months ago, diabetes meds low, pending claim. Pharmacy sees prescription as doctor types. Billing sees insurance card scanned last time.",
    outcome: "You deliver care, not paperwork management."
  },
  {
    id: "auto",
    icon: Car,
    label: "Auto Dealership",
    subtitle: "The Coimbatore Showroom",
    before: "Sales in Excel, Service in Tally. Customer buys a car, returns for service, and you ask \"Which model?\" You miss warranty upsell because sales never told service the purchase date.",
    after: "Customer enters. Screen shows: Mr. Murugan, bought Brezza in March. Alert: Insurance expires next week. Service advisor says: \"Welcome back sir, shall we renew insurance while you wait?\" Sales sees real-time stock for new inquiries.",
    outcome: "You build relationships for life, not just transactions."
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Education",
    subtitle: "The Bangalore CBSE School",
    before: "Admissions in Forms, Fees in Tally, Bus tracking in a separate app. Parent asks \"Has child reached?\" You check driver's phone, then teacher's register. Fee defaulters found only at year-end.",
    after: "Parent messages. System checks Bus GPS + Biometric. Auto-replies: \"Reached safely at 8:14 AM.\" System flags fee defaulters on Day 31 and sends gentle WhatsApp reminders with payment links.",
    outcome: "You nurture students from prospect to alumni seamlessly."
  },
  {
    id: "retail",
    icon: Store,
    label: "Retail / Kirana",
    subtitle: "The Mumbai Chain Owner",
    before: "5 shops, 5 billing systems. Shop A has excess rice, Shop B is out of stock. You drive 40km daily checking each. Credit given at Shop 2 is unknown to Shop 4.",
    after: "One screen shows all 5 locations. Shop 3 is low on rice—system suggests transferring from Shop 1. Credit given at Shop 2 pops up when customer visits Shop 4.",
    outcome: "You scale, not drive."
  },
];

export function AudienceSection() {
  const [active, setActive] = useState("it");
  const current = verticals.find((v) => v.id === active)!;

  return (
    <section id="who" className="py-20 lg:py-28 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <motion.p 
            className="text-sm text-neutral-400 mb-3 tracking-wide uppercase font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Industry Specific Magic
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How It Transforms <br/>
            <span className="text-white italic">
              Every Vertical
            </span>
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-neutral-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you run a hospital in Hyderabad or a textile unit in Surat, 
            IntegrateWise adapts to your business vocabulary.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Menu */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0">
            {verticals.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all min-w-[200px] lg:min-w-0 ${
                  active === v.id
                    ? "bg-white text-black shadow-lg"
                    : "bg-black border border-neutral-800 text-neutral-400 hover:bg-neutral-900"
                }`}
              >
                <div className={`p-2 rounded-lg ${active === v.id ? "bg-black/10" : "bg-neutral-800"}`}>
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{v.label}</div>
                  <div className={`text-xs ${active === v.id ? "text-black/70" : "text-neutral-500"}`}>{v.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-between shadow-sm overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center">
                          <current.icon className="h-6 w-6 text-white" />
                       </div>
                       <h3 className="text-2xl font-bold text-white">{current.subtitle}</h3>
                    </div>
                    
                    <div className="grid gap-8">
                      {/* Before */}
                      <div className="relative pl-6 border-l-2 border-neutral-700">
                        <p className="text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2">Before (The Pain)</p>
                        <p className="text-neutral-400 leading-relaxed">
                          "{current.before}"
                        </p>
                      </div>

                      {/* After */}
                      <div className="relative pl-6 border-l-2 border-white">
                        <p className="text-xs font-bold uppercase tracking-wide text-white mb-2">After (The How)</p>
                        <p className="text-white font-medium leading-relaxed">
                          "{current.after}"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-neutral-800">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-white shrink-0"></div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1">The Change</p>
                        <p className="text-xl font-serif italic text-white">
                          {current.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}