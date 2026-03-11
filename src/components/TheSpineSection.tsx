import { Check, X } from "lucide-react";

export function TheSpineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 ag-text-balance">
            Your team manages <span className="text-emerald-500">too many tabs.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto ag-text-balance">
            Sales works in CRM. Support works in tickets. Finance lives in spreadsheets. <span className="font-bold text-foreground">When everyone looks at different systems, customers fall through the cracks.</span> We fix the scattered data problem without replacing the tools your team loves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Without Spine */}
          <div className="bg-white border-2 border-red-100 rounded-2xl p-8 relative shadow-sm">
            <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              TODAY
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-6">Everyone’s pain. No single view.</h3>
            <ul className="space-y-4">
              {[
                "CRM says one thing, finance another",
                "Sales in Slack, support in Zendesk—who has the truth?",
                "CS finds out about churn when it’s too late",
                "Chennai and SF work from different numbers",
                "You manually connect everything"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <div className="mt-1 bg-red-100 p-1 rounded-full shrink-0">
                    <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With IntegrateWise */}
          <div className="bg-slate-900 border-2 border-emerald-500 rounded-2xl p-8 relative shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl" />
            <div className="absolute -top-3 left-6 bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-10">
              WITH INTEGRATEWISE
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-6">One powerful hub connecting it all.</h3>
            <ul className="space-y-4 relative z-10">
              {[
                "We pull data from your tools automatically",
                "Sales, CS, and Ops see the exact same metrics",
                "AI cleans and organizes messy data invisibly",
                "Everyone works from a single source of truth",
                "Instantly know the health of any account"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1 bg-emerald-500 p-1 rounded-full shrink-0">
                    <Check className="w-3 h-3 text-slate-900" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            One underlying truth. <span className="text-emerald-500">Perfectly tailored views.</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Instead of logging into five different dashboards, your teams get exactly the intelligence they need, automatically personalized for their role.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center font-bold text-xl mb-4">Sales</div>
              <p className="font-bold text-foreground mb-1">Pipeline & Health</p>
              <p className="text-sm text-muted-foreground">Sees fresh support issues before calling to renew.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">Ops</div>
              <p className="font-bold text-foreground mb-1">Costs & Compliance</p>
              <p className="text-sm text-muted-foreground">Watches software spend and user activity in real-time.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">CS</div>
              <p className="font-bold text-foreground mb-1">Risk & Engagement</p>
              <p className="text-sm text-muted-foreground">Gets alerted when heavy users suddenly stop logging in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
