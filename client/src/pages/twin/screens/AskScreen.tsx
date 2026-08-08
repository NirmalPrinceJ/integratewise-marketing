// ─── Screen 2: Ask the Twin (§5.2) ───────────────────────────────────────────
import { ArrowUp, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";
import { MOCK_CONVERSATION, MOCK_SUGGESTED_QUESTIONS, type Citation } from "../data";
import { CitationPill, ConfidenceMeter } from "../components";

export default function AskScreen() {
  const [messages] = useState(MOCK_CONVERSATION);
  const [input, setInput] = useState("");
  const [governedOnly, setGovernedOnly] = useState(true);

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border shrink-0">
        <div>
          <p className="text-[10px] font-mono text-gold tracking-widest uppercase">Ask the Twin</p>
          <p className="text-xs text-muted-foreground mt-0.5">Grounded answers from governed memory</p>
        </div>
        <button
          onClick={() => setGovernedOnly(!governedOnly)}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {governedOnly
            ? <ToggleRight className="w-5 h-5 text-[#1A3A2A]" />
            : <ToggleLeft className="w-5 h-5 text-muted-foreground" />}
          {governedOnly ? "Governed only" : "Include pending"}
        </button>
      </div>

      {/* ── Thread ── */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}>
            {msg.role === "user" ? (
              <div className="max-w-[80%] bg-forest text-paper rounded-2xl rounded-tr-sm px-4 py-3">
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className="text-[10px] text-paper/40 mt-1 text-right">{msg.timestamp}</p>
              </div>
            ) : (
              <div className="max-w-[90%] space-y-3">
                {/* Answer bubble */}
                <div className="bg-paper border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-sm text-foreground leading-relaxed">{msg.text}</p>
                </div>

                {/* Answer footer */}
                <div className="px-1 space-y-2">
                  {/* Confidence */}
                  {msg.confidence !== undefined && (
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider w-20 shrink-0">Confidence</span>
                      <ConfidenceMeter value={msg.confidence} />
                    </div>
                  )}
                  {/* Sources */}
                  {msg.sources && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider shrink-0">Sources</span>
                      {msg.sources.map((s, i) => (
                        <span key={i} className="text-[10px] font-mono text-muted-foreground bg-paper-warm border border-border rounded px-1.5 py-0.5">{s}</span>
                      ))}
                    </div>
                  )}
                  {/* Citations */}
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider shrink-0">Citations</span>
                      {msg.citations.map((cit) => (
                        <CitationPill key={cit.id} citation={cit} />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-3 pt-1">
                    <button className="text-[10px] font-mono text-muted-foreground hover:text-foreground transition-colors">View in Memory →</button>
                    <button className="text-[10px] font-mono text-gold hover:underline">Propose update</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Suggested questions (only when empty) ── */}
      {messages.length === 0 && (
        <div className="px-6 pb-4">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Suggested</p>
          <div className="flex flex-wrap gap-2">
            {MOCK_SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => setInput(q)}
                className="text-xs text-muted-foreground bg-paper-warm border border-border rounded-full px-3 py-1.5 hover:border-gold hover:text-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Input bar ── */}
      <div className="px-6 py-4 border-t border-border shrink-0">
        <div className="flex items-end gap-3 bg-paper border border-border rounded-xl px-4 py-3 focus-within:border-gold transition-colors">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask this Twin…"
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            disabled={!input.trim()}
            className="w-8 h-8 rounded-lg bg-forest text-paper flex items-center justify-center hover:bg-forest-deep transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 text-center">
          Answers are grounded in {governedOnly ? "governed memory only" : "governed + pending memory"}.
          Every write routes to Governance — Twin never acts directly.
        </p>
      </div>
    </div>
  );
}
