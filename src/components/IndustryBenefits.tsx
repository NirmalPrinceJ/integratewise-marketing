import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "./motion/AnimateIn";
import { Float } from "./MarketingHero";
import {
  Stethoscope, Briefcase, Factory, Home,
  Scale, GraduationCap, Car, ShoppingBag, ArrowRight
} from "lucide-react";

const verticalDetails = [
  { icon: Stethoscope, label: "Healthcare", result: "20 min saved per patient", before: "Patient history in 3 systems.", after: "One screen. Full history. Pharmacy sees prescriptions in real time.", image: "/images/industries/industry-healthcare.png" },
  { icon: Briefcase, label: "IT Services", result: "4.2 hrs saved daily", before: "Jira, Slack, Toggl, invoicing — all disconnected.", after: "Code commits map to invoices automatically.", image: "/images/industries/industry-it-services.png" },
  { icon: Factory, label: "Manufacturing", result: "Prevented 12 delays/mo", before: "Supervisor, godown, trader — everyone calling everyone.", after: "Live production tracking. Auto-alerts for stock and dispatch.", image: "/images/industries/industry-manufacturing.png" },
  { icon: Home, label: "Real Estate", result: "3x faster response", before: "30 listings, 50 leads in Excel, site visits in chat.", after: "Caller ID triggers full client file. Instant context.", image: "/images/industries/industry-real-estate.png" },
  { icon: Scale, label: "Professional Services", result: "60% faster close", before: "3 days collating client data before analysis.", after: "Auto-reconciliation. Flagged mismatches. Drafted replies.", image: "/images/industries/industry-prof-services.png" },
  { icon: GraduationCap, label: "Education", result: "100% visibility", before: "Attendance in one app, grades in another.", after: "Complete student view. Auto-parent updates.", image: "/images/industries/industry-education.png" },
  { icon: Car, label: "Auto Dealership", result: "2x retention", before: "Service reminders, follow-ups — all separate.", after: "Unified customer lifecycle. Predictive service alerts.", image: "/images/industries/industry-auto-dealership.png" },
  { icon: ShoppingBag, label: "Retail", result: "99.9% inventory accuracy", before: "5 locations, each with own billing and stock.", after: "Cross-location inventory. Unified credit.", image: "/images/industries/industry-retail.png" },
];

export function IndustryBenefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-28 bg-gray-50/50 border-t border-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16 flex flex-col items-center">
          <Badge variant="outline" className="mb-6 bg-white border-gray-200">
            Every Industry. Same Intelligence.
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The Chaos Is the Same Everywhere.
            <br className="hidden md:block" />
            <span className="text-emerald-500 font-serif italic font-normal">The Healing Adapts to You.</span>
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticalDetails.map((v, i) => (
            <Float key={v.label} delay={i * 0.15} duration={6 + (i % 3)} y={4}>
              <motion.div
                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 cursor-default h-full flex flex-col sm:flex-row gap-6 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-gray-500">
                      <v.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">{v.label}</h3>
                      <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full inline-block">
                        {v.result}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-red-500 font-bold text-xs uppercase tracking-wider block mb-1">Before:</span>
                      {v.before}
                    </p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      <span className="text-emerald-500 font-bold text-xs uppercase tracking-wider block mb-1">After:</span>
                      {v.after}
                    </p>
                  </div>
                </div>
                
                {v.image && (
                  <div className="w-full sm:w-1/3 shrink-0 flex justify-end">
                    <img
                      src={v.image}
                      alt={`${v.label} — Before and After`}
                      className="w-full h-40 sm:h-full max-h-48 object-cover object-right rounded-xl shadow-sm border border-gray-100"
                    />
                  </div>
                )}
              </motion.div>
            </Float>
          ))}
        </div>
        
        <FadeIn delay={0.3} className="text-center mt-12">
          <Link to="/who-its-for">
            <Button variant="outline" size="lg" className="rounded-full bg-white hover:bg-gray-50">
              See Stories From Your Industry <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
