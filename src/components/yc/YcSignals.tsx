import { FadeIn, StaggerChildren, StaggerItem } from "../motion/AnimateIn";
import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

type Signal = {
  name: string;
  location: string;
  sector: string;
  sectorColor: string;
  sectorBg: string;
  before: string;
  signal: string;
  outcome: string;
  outcomeColor: string;
};

const signals: Signal[] = [
  {
    name: "Priya",
    location: "Delhi",
    sector: "Real Estate",
    sectorColor: "text-orange-600",
    sectorBg: "bg-orange-50",
    before: "Buyer ghosted after 3 site visits. Deal worth ₹2Cr at risk.",
    signal: 'Unified Intelligence Layer Alert: "Site visit frequency dropped. No brochure opens for 10 days."',
    outcome: "Deal Closed",
    outcomeColor: "text-emerald-600",
  },
  {
    name: "Vikram",
    location: "Pune",
    sector: "IT Services Sales",
    sectorColor: "text-blue-600",
    sectorBg: "bg-blue-50",
    before: "Prospect silent after 3 months. No reply to emails.",
    signal: 'Unified Intelligence Layer Alert: "Decision maker changed on LinkedIn. Email open rate 0%."',
    outcome: "Account Saved",
    outcomeColor: "text-emerald-600",
  },
  {
    name: "SGA Cars",
    location: "Coimbatore",
    sector: "Auto Dealership",
    sectorColor: "text-violet-600",
    sectorBg: "bg-violet-50",
    before: "High weekend footfall, but leads forgotten on Monday.",
    signal: 'Unified Intelligence Layer Alert: "Test drive completed. No follow-up logged in 24 hours."',
    outcome: "Conversion +20%",
    outcomeColor: "text-emerald-600",
  },
  {
    name: "Mr. Patel",
    location: "Gujarat",
    sector: "Multi-Business Owner",
    sectorColor: "text-amber-600",
    sectorBg: "bg-amber-50",
    before: "Running 3 factories. Blind to cash leakage in Unit 2.",
    signal: 'Unified Intelligence Layer Alert: "Production up but cash flow down in Unit 2. Divergence detected."',
    outcome: "Centralized Control",
    outcomeColor: "text-emerald-600",
  },
];

export function YcSignals() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-3">Unified Intelligence Layer Signals in Action</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f1a15] tracking-tight mb-4 ag-text-balance">
            What you were blind to. What the Unified Intelligence Layer caught.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real businesses. Real blind spots. Real Unified Intelligence Layer signals that turned invisible
            failures into measurable outcomes.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" stagger={0.08}>
          {signals.map((s) => (
            <StaggerItem key={s.name}>
              <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50 h-full flex flex-col">
                {/* Header */}
                <div className="px-7 pt-7 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-[#0f1a15]">
                      {s.name}, <span className="font-medium text-gray-500">{s.location}</span>
                    </h3>
                  </div>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider ${s.sectorColor} ${s.sectorBg} px-2.5 py-1 rounded-full`}>
                    {s.sector}
                  </span>
                </div>

                {/* Timeline: Before → Signal → Outcome */}
                <div className="px-7 pb-7 flex-grow flex flex-col">
                  {/* Before (Blind) */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-red-400 mt-2" />
                      <div className="w-px h-full min-h-[20px] bg-gray-200 my-1" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Before (Blind)</span>
                      <p className="text-sm text-gray-500 mt-0.5">{s.before}</p>
                    </div>
                  </div>

                  {/* Unified Intelligence Layer Signal */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex flex-col items-center shrink-0">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-1" />
                      <div className="w-px h-full min-h-[20px] bg-gray-200 my-1" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Intelligence Signal</span>
                      <p className="text-sm text-emerald-700 font-medium mt-0.5 italic">{s.signal}</p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="flex items-start gap-3 mt-auto">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Outcome</span>
                      <p className={`text-lg font-bold ${s.outcomeColor} mt-0.5`}>{s.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
