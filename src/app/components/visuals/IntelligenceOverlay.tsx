import React from 'react';
import { 
  BrainCircuit, X, Network, FileText, Database, ShieldAlert, Cpu, 
  Settings, CheckCircle2, History, Scale
} from 'lucide-react';

export function IntelligenceOverlay() {
  return (
    <div className="w-full max-w-5xl mx-auto h-[600px] bg-[#F8FAFC] rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5 overflow-hidden flex flex-col font-sans text-slate-800 relative z-50">
      
      {/* ── HEADER ── */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-base font-bold text-slate-900">Intelligence Overlay</h2>
              <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase border border-indigo-200/50">CTX_BIZOPS</span>
            </div>
            <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
              Unified Operational Knowledge Plane <span className="mx-1 text-slate-300">•</span> ⌘J to close
            </p>
          </div>
        </div>
        <button className="p-2 rounded-md hover:bg-slate-100 text-slate-400 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ── TABS ── */}
      <div className="flex items-center px-6 border-b border-slate-200 bg-white overflow-x-auto hide-scrollbar">
        <Tab icon={<Network className="w-3.5 h-3.5"/>} label="Spine" active />
        <Tab icon={<FileText className="w-3.5 h-3.5"/>} label="Context" />
        <Tab icon={<Database className="w-3.5 h-3.5"/>} label="Knowledge" />
        <Tab icon={<FileText className="w-3.5 h-3.5"/>} label="Evidence" />
        <Tab icon={<Activity className="w-3.5 h-3.5"/>} label="Signals" />
        <Tab icon={<MessageSquare className="w-3.5 h-3.5"/>} label="Think" />
        <Tab icon={<CheckCircle2 className="w-3.5 h-3.5"/>} label="Act" />
        <Tab icon={<ShieldAlert className="w-3.5 h-3.5"/>} label="HITL" />
        <Tab icon={<Scale className="w-3.5 h-3.5"/>} label="Govern" />
        <Tab icon={<Settings className="w-3.5 h-3.5"/>} label="Adjust" />
        <Tab icon={<History className="w-3.5 h-3.5"/>} label="Repeat" />
        <Tab icon={<FileText className="w-3.5 h-3.5"/>} label="Audit" />
      </div>

      {/* ── CONTENT ── */}
      <div className="flex-1 p-8 grid grid-cols-[1fr_300px] gap-8 bg-[#F8FAFC]">
        
        {/* Left Column: Spine Nodes */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50">
            <Network className="w-5 h-5 text-slate-400" />
            <h3 className="text-sm font-bold text-slate-900">Active Spine Nodes (CTX_BIZOPS)</h3>
          </div>
          
          <div className="p-5 flex flex-col gap-3 overflow-y-auto">
            <SpineNode id="A1" name="Canonical Account Node 1" source="Salesforce" time="2m ago" refId="GOAL_100" />
            <SpineNode id="A2" name="Canonical Account Node 2" source="Salesforce" time="2m ago" refId="GOAL_200" />
            <SpineNode id="A3" name="Canonical Account Node 3" source="Salesforce" time="2m ago" refId="GOAL_300" />
            <SpineNode id="A4" name="Canonical Account Node 4" source="Salesforce" time="2m ago" refId="GOAL_400" />
          </div>
        </div>

        {/* Right Column: Health Status */}
        <div className="bg-white rounded-xl border border-indigo-100 shadow-sm overflow-hidden flex flex-col h-fit relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div className="p-6">
            <h4 className="text-sm font-bold text-indigo-600 mb-2">Normalization Health</h4>
            <div className="text-3xl font-bold text-slate-900 tracking-tight mb-2">98.4%</div>
            <p className="text-xs font-medium text-slate-500">Sectorizer active 0 collisions</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function Tab({ icon, label, active = false }: any) {
  return (
    <div className={`
      flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-bold cursor-pointer transition-colors shrink-0
      ${active ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'}
    `}>
      {icon} {label}
    </div>
  );
}

function SpineNode({ id, name, source, time, refId }: any) {
  return (
    <div className="flex items-center gap-4 bg-slate-50 rounded-lg border border-slate-200/60 p-3 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer group">
      {/* Node ID Badge */}
      <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm shrink-0">
        {id}
      </div>
      
      {/* Name and Meta */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 truncate mb-1">{name}</h4>
        <p className="text-[11px] font-semibold text-slate-500">
          Source: {source} <span className="mx-1">•</span> Updated {time}
        </p>
      </div>

      {/* Goal Ref Badge */}
      <div className="px-2 py-1 rounded bg-indigo-50 text-indigo-600 text-[10px] font-bold tracking-widest uppercase border border-indigo-100 opacity-60 group-hover:opacity-100 transition-opacity">
        goal_ref: {refId}
      </div>
    </div>
  );
}

// Missing icons for IntelligenceOverlay
function Activity(props: any) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function MessageSquare(props: any) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
