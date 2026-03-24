import React from 'react';
import { 
  Building2, Cloud, DollarSign, Lock, ShoppingBag, Activity, Truck, BookOpen,
  Download, Plus, Search, LayoutGrid, List, LayoutPanelLeft
} from 'lucide-react';

export function AccountsDashboard() {
  return (
    <div className="w-full h-[720px] bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col font-sans text-slate-800 scale-100 origin-top">
      
      {/* ── TOP HEADER ── */}
      <div className="px-8 py-6 border-b border-slate-200 bg-white flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Accounts & Revenue</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500 font-medium">Total ARR:</span>
            <span className="font-bold text-blue-600">$1.75M</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider border border-blue-100">SSOT</span>
            <span className="text-slate-400">across 8 accounts</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 border border-indigo-700 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 shadow-sm transition-colors">
            <Plus className="w-4 h-4" /> Add Account
          </button>
        </div>
      </div>

      {/* ── TOOLBAR ── */}
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="relative w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search accounts..." 
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-white border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none shadow-sm transition-all"
          />
        </div>
        
        <div className="flex bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
          <button className="p-1.5 rounded-md bg-slate-100 text-slate-900 shadow-sm"><LayoutGrid className="w-4 h-4" /></button>
          <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 transition-colors"><List className="w-4 h-4" /></button>
          <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 transition-colors"><LayoutPanelLeft className="w-4 h-4" /></button>
        </div>
      </div>

      {/* ── GRID CONTENT ── */}
      <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
        <div className="grid grid-cols-3 gap-5">
          <AccountCard 
            icon={<Building2 className="w-4 h-4 text-slate-600" />} name="TechServe India Pvt Ltd" tier="Enterprise" vertical="Technology"
            arr="$420K" growth="+12.5%" health="92" healthLabel="Healthy"
            renewalDays="126" renewalPct={85} contacts={[{init:'PS', bg:'bg-purple-600'}]} hubspot="65%"
          />
          <AccountCard 
            icon={<Cloud className="w-4 h-4 text-sky-600" />} name="CloudBridge APAC" tier="Enterprise" vertical="Cloud Services"
            arr="$280K" growth="+8.3%" health="78" healthLabel="At-Risk" isWarning
            renewalDays="72" renewalPct={92} contacts={[{init:'AK', bg:'bg-indigo-600'}]} hubspot="65%"
          />
          <AccountCard 
            icon={<DollarSign className="w-4 h-4 text-emerald-600" />} name="FinanceFlow Solutions" tier="Mid-Market" vertical="FinTech"
            arr="$180K" growth="-2.1%" growthDown health="54" healthLabel="Critical" isCritical
            renewalDays="29" renewalPct={67} contacts={[{init:'RM', bg:'bg-rose-600'}]} hubspot="55%"
          />
          <AccountCard 
            icon={<Lock className="w-4 h-4 text-amber-600" />} name="DataVault Australia" tier="Enterprise" vertical="Data Security"
            arr="$350K" growth="+15.2%" health="88" healthLabel="Healthy"
            renewalDays="204" renewalPct={78} contacts={[{init:'AP', bg:'bg-purple-600'}]} hubspot="65%"
          />
          <AccountCard 
            icon={<ShoppingBag className="w-4 h-4 text-pink-600" />} name="RetailNest Pte Ltd" tier="Smb" vertical="Retail"
            arr="$95K" growth="+5.7%" health="71" healthLabel="At-Risk" isWarning
            renewalDays="98" renewalPct={45} contacts={[{init:'VR', bg:'bg-indigo-600'}]} hubspot="50%"
          />
          <AccountCard 
            icon={<Activity className="w-4 h-4 text-rose-600" />} name="HealthTech Innovations" tier="Mid-Market" vertical="Healthcare"
            arr="$210K" growth="+22%" health="95" healthLabel="Healthy"
            renewalDays="202" renewalPct={90} contacts={[{init:'PS', bg:'bg-purple-600'}]} hubspot="65%"
          />
          <AccountCard 
            icon={<Truck className="w-4 h-4 text-orange-600" />} name="LogiPrime Corp" tier="Mid-Market" vertical="Logistics"
            arr="$145K" growth="-5.3%" growthDown health="42" healthLabel="Critical" isCritical
            renewalDays="0" renewalPct={100} contacts={[{init:'JW', bg:'bg-slate-800'}]} hubspot="10%"
          />
          <AccountCard 
            icon={<BookOpen className="w-4 h-4 text-emerald-700" />} name="EduSpark Learning" tier="Smb" vertical="EdTech"
            arr="$68K" growth="+18.9%" health="83" healthLabel="Healthy"
            renewalDays="310" renewalPct={20} contacts={[{init:'SL', bg:'bg-indigo-600'}]} hubspot="80%"
          />
        </div>
      </div>

    </div>
  );
}

function AccountCard({ 
  icon, name, tier, vertical, 
  arr, growth, growthDown = false, 
  health, healthLabel, isWarning = false, isCritical = false,
  renewalDays, renewalPct, contacts, hubspot
}: any) {
  
  const healthColor = isCritical ? 'text-red-600' : isWarning ? 'text-amber-500' : 'text-emerald-500';
  const healthBg = isCritical ? 'bg-red-500' : isWarning ? 'bg-amber-500' : 'bg-emerald-500';

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flexitems-center justify-center flex-shrink-0 flex items-center">
          <div className="m-auto">{icon}</div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1 truncate w-48">{name}</h3>
          <p className="text-[11px] font-semibold text-slate-500">{tier} · {vertical}</p>
        </div>
      </div>

      {/* ARR & Growth */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="text-xl font-bold text-slate-900">{arr}</div>
          <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">ARR</div>
        </div>
        <div className={`text-sm font-bold ${growthDown ? 'text-red-500' : 'text-emerald-500'}`}>
          {growthDown ? '↘' : '↗'} {growth}
        </div>
      </div>

      {/* Health Score */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold mb-2">
           <span className="text-slate-500">Health Score</span>
           <span className={healthColor}>{health}/100 - {healthLabel}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
          <div className={`h-full ${healthBg}`} style={{ width: `${health}%` }} />
        </div>
      </div>

      {/* Renewal */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
           <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
           Renewal in <span className="font-bold text-slate-900 ml-1">{renewalDays}d</span>
        </div>
        <div className="h-1 w-full flex gap-1">
          <div className="h-full bg-indigo-600 rounded-l-full" style={{ width: `${renewalPct}%` }} />
          <div className="h-full bg-slate-100 rounded-r-full flex-1" />
        </div>
        <div className="text-right mt-1 text-[10px] font-bold text-slate-400">{renewalPct}%</div>
      </div>

      {/* Footer / Contacts */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex -space-x-1">
          {contacts.map((c: any, i: number) => (
            <div key={i} className={`w-6 h-6 rounded-full ${c.bg} text-white text-[9px] font-bold flex items-center justify-center border-2 border-white ring-1 ring-slate-100 shadow-sm z-10`}>
              {c.init}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
           <svg className="w-3 h-3 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
           HubSpot {hubspot}
        </div>
      </div>
    </div>
  );
}
