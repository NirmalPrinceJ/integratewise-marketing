import React from 'react';
import { 
  Home, Folder, Users, Phone, FileText, CheckSquare, Calendar, 
  BookOpen, Users2, DollarSign, AlertTriangle, TrendingUp, BarChart2,
  Settings, MessageSquare, Search, Bell, X, ChevronDown, CheckCircle2,
  Clock, Activity, Zap
} from 'lucide-react';

export function WorkspaceDashboard() {
  return (
    <div className="w-full h-[720px] bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex font-sans text-slate-800 scale-100 origin-top lg:scale-100">
      
      {/* ── SIDEBAR ── */}
      <div className="w-[240px] bg-white border-r border-slate-200 flex flex-col shrink-0">
        {/* Brand */}
        <div className="h-14 flex items-center px-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">IW</span>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">IntegrateWise</span>
          </div>
        </div>

        {/* Org Selector */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shadow-inner">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-none mb-1">Business Operations</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1"><Folder className="w-3 h-3"/> PRODUCT ORG</span>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 custom-scrollbar">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Workspace</div>
          
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" active />
          <NavItem icon={<Folder className="w-4 h-4" />} label="Projects" />
          <NavItem icon={<BookOpen className="w-4 h-4" />} label="Accounts" />
          <NavItem icon={<Users className="w-4 h-4" />} label="Contacts" />
          <NavItem icon={<Phone className="w-4 h-4" />} label="Meetings" />
          <NavItem icon={<FileText className="w-4 h-4" />} label="Docs" />
          <NavItem icon={<CheckSquare className="w-4 h-4" />} label="Tasks" />
          <NavItem icon={<Calendar className="w-4 h-4" />} label="Calendar" />
          <NavItem icon={<FileText className="w-4 h-4" />} label="Notes" />
          <NavItem icon={<Zap className="w-4 h-4" />} label="Knowledge Space" />
          <NavItem icon={<Users2 className="w-4 h-4" />} label="Team" />
          <NavItem icon={<DollarSign className="w-4 h-4" />} label="Pipeline" />
          <NavItem icon={<AlertTriangle className="w-4 h-4" />} label="Risks" />
          <NavItem icon={<TrendingUp className="w-4 h-4" />} label="Expansion" />
          <NavItem icon={<BarChart2 className="w-4 h-4" />} label="Analytics" />

          <div className="mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 flex items-center justify-between">
            <span>Connect</span>
            <ChevronDown className="w-3 h-3" />
          </div>
          <NavItem icon={<Activity className="w-4 h-4" />} label="Integrations" />
          <NavItem icon={<MessageSquare className="w-4 h-4" />} label="AI Chat" />
        </div>

        {/* User Footer */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold shadow-md">E</div>
             <div className="flex flex-col">
               <span className="text-sm font-bold text-slate-900">eff</span>
               <span className="text-[10px] font-bold text-slate-500 uppercase">Operations Lead</span>
             </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
        {/* Top Header */}
        <div className="h-14 shrink-0 bg-white flex items-center justify-between px-6 border-b border-slate-200">
           <div className="flex items-center gap-2 text-sm">
             <div className="p-1 rounded bg-slate-100">
               <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
             </div>
             <span className="text-slate-500 font-medium">Workspace</span>
             <span className="text-slate-300 mx-1">/</span>
             <span className="text-slate-900 font-bold">Home</span>
           </div>

           <div className="flex items-center gap-4">
             <div className="relative">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input type="text" placeholder="Search everything..." className="w-64 h-8 pl-9 pr-8 rounded-md bg-slate-100 border-none text-sm focus:ring-1 focus:ring-slate-300 outline-none" />
               <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                 <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono text-slate-400 shadow-sm">⌘</kbd>
                 <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono text-slate-400 shadow-sm">K</kbd>
               </div>
             </div>
             
             <button className="relative p-1.5 text-slate-500 hover:text-slate-900">
               <Bell className="w-5 h-5" />
               <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
             </button>
             
             <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
               <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">E</div>
               <span className="text-sm font-semibold">eff</span>
             </div>
           </div>
        </div>

        {/* Global Alert Banner */}
        <div className="shrink-0 bg-red-50 border-b border-red-100 px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             <AlertTriangle className="w-4 h-4 text-red-500" />
             <span className="text-sm font-bold text-slate-900">Renewal Risk — FinanceFlow Solutions</span>
             <span className="text-sm text-red-600/80 truncate max-w-[400px]">3 P1 tickets, champion silent for 12 days, payment failed twice.</span>
             <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide">2 MIN AGO</span>
             <span className="text-[11px] font-bold text-red-500 bg-red-100 px-2 py-0.5 rounded-full">+1 MORE</span>
          </div>
          <div className="flex items-center gap-3">
             <button className="text-sm font-bold text-red-600 hover:text-red-700">View Account ›</button>
             <X className="w-4 h-4 text-red-400 cursor-pointer hover:text-red-600" />
          </div>
        </div>

        {/* Main Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">My Overview</h1>
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">BIZOPS · PRODUCT Org · 79% data coverage</p>
            </div>
            
            <div className="flex bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
              <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-slate-100 text-slate-900 shadow-sm flex items-center gap-2">
                <Users className="w-4 h-4" /> Personal
              </button>
              <button className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-2">
                <Folder className="w-4 h-4" /> Work
              </button>
              <button className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Accounts & Projects
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <KPICard title="MY TASKS" value="12" subtext="4 due today" icon={<Activity />} />
            <KPICard title="MEETINGS TODAY" value="3" subtext="Next: 11:30am" icon={<Calendar />} />
            <KPICard title="APPROVALS" value="undefined" subtext="Waiting for you" icon={<CheckCircle2 />} isRed />
            <KPICard title="INTELLIGENCE" value="5" subtext="New insights" icon={<Zap />} />
          </div>

          <div className="grid grid-cols-[1fr_340px] gap-6 items-start">
            {/* Today's Focus */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm min-h-[400px]">
              <h2 className="text-lg font-bold text-slate-900 mb-1">Today's Focus</h2>
              <p className="text-sm text-slate-500 mb-6">Tasks and actions that need your attention</p>
              
              <div className="space-y-6">
                <FocusItem dot="bg-red-500" title="Review FinanceFlow renewal strategy" time="Today · CS" />
                <FocusItem dot="bg-amber-500" title="Approve AI-suggested upsell for DataVault" time="Today · Sales" />
                <FocusItem dot="bg-blue-500" title="Prepare Q1 board deck data" time="Tomorrow · BizOps" />
                <FocusItem dot="bg-slate-300" title="Update Jira integration field mapping" time="This week · Tech" />
              </div>
            </div>

            {/* Intelligence Feed */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm min-h-[500px]">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-rose-500" />
                <h2 className="text-lg font-bold text-slate-900">Intelligence Feed</h2>
              </div>
              
              <div className="space-y-3">
                <FeedItem dot="bg-emerald-500" text="Expansion signal detected for TechServe India — usage up 34%" time="1m ago" />
                <FeedItem dot="bg-amber-500" text="FinanceFlow champion went silent — last engagement 12 days ago" time="2m ago" />
                <FeedItem dot="bg-blue-500" text="Stripe schema drift auto-corrected — 2 fields updated" time="1h ago" />
                <FeedItem dot="bg-emerald-500" text="DataVault Australia NPS jumped to 9.2 — upsell opportunity" time="2h ago" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 px-3 py-2 rounded-lg mx-2 mb-1 cursor-pointer transition-colors
      ${active ? 'bg-slate-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 font-medium'}
    `}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function KPICard({ title, value, subtext, icon, isRed = false }: { title: string, value: string, subtext: string, icon: React.ReactNode, isRed?: boolean }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-3xl font-bold tracking-tight ${isRed ? 'text-rose-500' : 'text-page-navy-dark'}`}>{value}</h3>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{title}</span>
        <span className="text-sm text-slate-400 font-medium">{subtext}</span>
      </div>
    </div>
  );
}

function FocusItem({ dot, title, time }: { dot: string, title: string, time: string }) {
  return (
    <div className="flex gap-4 group cursor-pointer">
      <div className="flex flex-col items-center mt-1">
        <div className={`w-2.5 h-2.5 rounded-full ${dot} shadow-sm ring-4 ring-white relative z-10 flex-shrink-0 group-hover:scale-125 transition-transform`} />
        {/* Invisible tail for spacing, visual structural line if needed */}
      </div>
      <div>
        <p className="text-base font-bold text-slate-800 group-hover:text-page-primary transition-colors">{title}</p>
        <p className="text-sm font-medium text-slate-400 mt-0.5">{time}</p>
      </div>
    </div>
  );
}

function FeedItem({ dot, text, time }: { dot: string, text: string, time: string }) {
  return (
    <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100 hover:bg-slate-50 hover:border-slate-200 cursor-pointer transition-all animate-fade-in-up">
      <div className="flex gap-3">
        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${dot}`} />
        <div className="flex-1">
          <p className="text-sm text-slate-700 font-medium leading-relaxed">{text}</p>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">{time}</p>
        </div>
      </div>
    </div>
  );
}
