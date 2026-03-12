import { LayoutDashboard, Workflow, Link2, Bell, ShieldAlert, BarChart3, Settings, AlertCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function NarrativeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Create a sequence that triggers the drawer pop-up
  const [drawerState, setDrawerState] = useState<"hidden" | "peeking" | "open">("hidden");
  
  useEffect(() => {
    if (isInView) {
      // 1. Start hidden
      setDrawerState("hidden");
      
      // 2. Peek after 1 second
      const peekTimer = setTimeout(() => {
        setDrawerState("peeking");
      }, 1000);
      
      // 3. Fully open after 2.5 seconds
      const openTimer = setTimeout(() => {
        setDrawerState("open");
      }, 2500);
      
      // 4. Close back to peek after 7 seconds
      const closeTimer = setTimeout(() => {
        setDrawerState("peeking");
      }, 7000);
      
      return () => {
        clearTimeout(peekTimer);
        clearTimeout(openTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            One workspace. <span className="font-serif italic text-emerald-500">One Unified Intelligence Layer. Same truth for everyone.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your dashboard shows what matters—churn risk, pipeline, compliance—so CS, sales, and ops don’t work from different playbooks. Intelligence surfaces; you approve.
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden">
          {/* Browser Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-4 flex-1">
              <div className="bg-white border border-gray-200 rounded-md h-6 max-w-sm w-full mx-auto shadow-sm"></div>
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 hidden md:flex flex-col">
              <div className="flex items-center gap-2 mb-8 px-2 text-emerald-500 font-bold">
                <div className="w-6 h-6 bg-emerald-500 rounded-md"></div>
                IntegrateWise
              </div>
              <nav className="space-y-1">
                {[
                  { icon: LayoutDashboard, label: "Dashboard", active: true },
                  { icon: Workflow, label: "Workflows" },
                  { icon: Link2, label: "Connections" },
                  { icon: Bell, label: "Notifications", badge: "3" },
                  { icon: BarChart3, label: "Analytics" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                      item.active
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-emerald-100 text-emerald-500 px-2 py-0.5 rounded-full text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-auto space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Security</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white relative overflow-hidden flex flex-col">
              <div className="flex-1 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Morning Overview</h3>
                    <p className="text-gray-500 text-sm">Here's what needs your attention today.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    System Healthy
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: "Active Integrations", value: "24", trend: "+2 this week", color: "emerald" },
                    { title: "Data Synced", value: "1.2M", trend: "Rows today", color: "blue" },
                    { title: "Anomalies Detected", value: "0", trend: "All clear", color: "gray" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <h4 className="text-gray-500 text-sm font-medium mb-2">{stat.title}</h4>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className={`text-sm text-${stat.color}-600`}>{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Activity Stream Placeholder */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-32">
                  <h4 className="font-bold text-gray-900 mb-4">Recent Approved Actions</h4>
                  <div className="space-y-4">
                    {[
                      { action: "Updated Salesforce contact based on support ticket", time: "2 mins ago", icon: "🟢" },
                      { action: "Synced Shopify inventory with ERP", time: "15 mins ago", icon: "🟢" },
                      { action: "Alerted CS team about low engagement score", time: "1 hour ago", icon: "🟡" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start gap-3 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                        <div className="mt-1">{activity.icon}</div>
                        <div>
                          <p className="text-gray-900 text-sm font-medium">{activity.action}</p>
                          <p className="text-gray-500 text-xs">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* L2 Cognitive Drawer (Sliding up from bottom) */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-white border-t shadow-[0_-20px_40px_rgba(0,0,0,0.12)] rounded-t-2xl flex flex-col z-20 overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ 
                  y: drawerState === "hidden" ? "100%" : 
                     drawerState === "peeking" ? "calc(100% - 64px)" : "0%"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ height: "300px" }}
              >
                {/* Drawer Handle / Header (Always visible when peeking) */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-b border-gray-100 cursor-pointer flex items-center justify-between px-6 py-3 h-16 shrink-0" onClick={() => setDrawerState(prev => prev === "open" ? "peeking" : "open")}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm shadow-emerald-200">
                      <span className="text-sm font-black">L2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                        Signals Requiring Your Attention
                        {drawerState !== "open" && (
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">1 critical action waiting</p>
                    </div>
                  </div>
                  <div className="text-emerald-600 bg-white shadow-sm border border-emerald-100 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                    Press ⌘J
                  </div>
                </div>
                
                {/* Drawer Content (Visible when open) */}
                <div className="p-6 flex-1 flex flex-col bg-gray-50/50 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-gray-900">Critical Signals</h4>
                    <span className="text-xs font-semibold text-emerald-600 hover:underline cursor-pointer">View all</span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Signal 1 */}
                    <div className="bg-white border border-red-100 shadow-sm rounded-xl p-4 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                      <div className="flex gap-4 items-start">
                        <div className="mt-0.5 bg-red-50 p-2 rounded-lg shrink-0">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-bold text-gray-900 text-sm">Churn Risk Detected: Acme Corp</h5>
                            <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">Just now</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                            Customer missed payment and has an unresolved support ticket.
                          </p>
                          <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg mb-3">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Suggested Action:</p>
                            <p className="text-xs text-gray-600">Send follow-up message and alert account manager.</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3 rounded-md transition-colors flex items-center gap-1">
                              Approve Action
                            </button>
                            <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1.5 px-3 rounded-md transition-colors">
                              Modify
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
