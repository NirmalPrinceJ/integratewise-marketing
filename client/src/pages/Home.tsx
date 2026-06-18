import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4 px-4">
          <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <span className="font-semibold text-forest hidden sm:inline">IntegrateWise</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:inline">
              Solutions
            </a>
            <a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden md:inline">
              Pricing
            </a>
            <button className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors">
              Apply for Pilot
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Digital Memory · Twin · Governance · Handoff</p>
          
          <div className="mb-8 pl-6 border-l-2 border-border">
            <p className="text-lg text-muted leading-relaxed">
              He adopted AI six months ago. He told his team about it.<br/>
              He genuinely believed it would change how he works.<br/><br/>
              <em>Today he uses it to write emails.</em>
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight max-w-3xl">
            This is what<br/>
            you <span className="text-gold">wanted.</span><br/>
            How you wanted<br/>
            it to work.
          </h1>

          <p className="text-xl text-muted mb-8 leading-relaxed max-w-2xl">
            IntegrateWise connects your tools, builds a memory of your business, and hands off approved decisions to your execution environment. Brief it once. It remembers. It finishes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
            <button className="px-8 py-3 rounded bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2">
              Apply for Pilot
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-paper transition-colors">
              Explore Solutions
            </button>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-forest mb-1">80%</p>
                <p className="text-sm text-muted">of AI adopters quietly demoted AI to low-stakes tasks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest mb-1">15+</p>
                <p className="text-sm text-muted">tools the average team uses with zero shared context</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest mb-1">0</p>
                <p className="text-sm text-muted">sessions should start from a blank slate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">The Gap</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            They didn&apos;t reject AI.<br/>
            They rejected <span className="text-gold">the experience.</span>
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-8">
            The model got smarter. The forgetting didn&apos;t stop. Every new release is faster and more capable — but without memory, without continuity, without governed execution, every session starts over. Every task needs supervision. Every output needs checking.
            <br/><br/>
            IntegrateWise is the layer that makes the model&apos;s intelligence actually hold — across sessions, across tools, across time.
          </p>
          <div className="inline-flex flex-col gap-4">
            <div className="bg-forest-deep border border-gold/30 rounded-xl px-8 py-6">
              <p className="text-2xl font-bold text-gold mb-1">80%</p>
              <p className="text-paper text-sm max-w-xs">of professionals who adopted AI stopped trusting it with anything that matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frustrations */}
      <section className="py-20 md:py-32 px-4 bg-background" id="problem">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Why AI Fails Them</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Four failures. One root cause. One fix.
          </h2>
          <p className="text-lg text-muted mb-12 max-w-2xl">
            Every person who demoted AI hit the same four walls. IntegrateWise was built specifically to remove each one.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Amnesia", quote: '"I told it once. It forgot. I had to repeat myself — again."', desc: "No persistent memory. Every session starts blank. IntegrateWise maintains persistent memory across every session." },
              { name: "Babysitting", quote: '"I still have to check everything it does."', desc: "No governed execution. IntegrateWise's Approval Center means nothing moves without your explicit review." },
              { name: "Hallucination", quote: '"It gave me a confident, completely wrong answer."', desc: "No grounded context. IntegrateWise's Twin reasons over your actual data, not guesswork." },
              { name: "Human API", quote: '"I\'m copy-pasting between tabs more than before I had AI."', desc: "No connected workspace. IntegrateWise connects everything into one surface." }
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6 hover:border-gold transition-colors">
                <p className="font-semibold text-forest mb-3">{item.name}</p>
                <p className="italic text-ink mb-4 text-sm">{item.quote}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border" id="solutions">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Continuity by outcome.
          </h2>
          <p className="text-lg text-muted mb-12 max-w-2xl">
            IntegrateWise solves one cross-functional problem: context loss. Here is how it shows up in your work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Account Success", hook: "Know everything about every customer without opening five tools.", items: ["Renewal risk", "Customer memory", "Account timelines", "Twin recommendations"] },
              { name: "Sales Continuity", hook: "Never re-brief AI on a customer again.", items: ["Deal memory", "Proposal generation", "Context-aware follow-ups", "Customer history"] },
              { name: "Founder & Ops", hook: "One place to understand what is happening.", items: ["Cross-team visibility", "Organizational memory", "Decision continuity", "Executive Twin"] },
              { name: "Engineering & Product", hook: "Keep decisions, incidents, and roadmap context connected.", items: ["Sprint memory", "Incident context", "Engineering Twin", "Build continuity"] },
              { name: "AI Governance", hook: "AI proposes. Humans approve.", items: ["Approval Center", "Audit trail", "Evidence", "Handoff"] },
              { name: "Intelligence Operations", hook: "Unified context from all your intelligence layers.", items: ["Centralized memory", "Cross-tool visibility", "Decision continuity", "Compliance ready"] }
            ].map((solution, idx) => (
              <div key={idx} className="bg-paper border border-border rounded-xl p-6 hover:border-gold transition-colors relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gold">
                <p className="font-semibold text-forest mb-3 text-lg">{solution.name}</p>
                <p className="text-sm text-ink mb-4">{solution.hook}</p>
                <ul className="space-y-2">
                  {solution.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper" id="platform">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Platform</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Five surfaces. One connected workspace.
          </h2>
          <p className="text-lg text-paper/75 mb-12 max-w-2xl">
            Every layer is built to remove one of the four failures. Together they close the full loop — from raw data to approved decision to organisational memory.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/10">
            {[
              { label: "L1 · Workbench", name: "Everything you need to know. One place to act.", desc: "Everything you work across — accounts, pipeline, sprints, tasks, documents — unified from all your tools into one surface.", kills: "→ Kills Human API" },
              { label: "L2 · Twin", name: "An AI that knows your business as well as you do.", desc: "Your Twin is briefed once and stays briefed. It reasons over your actual data, surfaces what matters, proposes what to do next.", kills: "→ Kills Amnesia" },
              { label: "L3 · Memory", name: "Every instruction. Every decision. Every outcome. Remembered.", desc: "IntegrateWise remembers what your team knows — the brief you gave, the rule you set, the decision you made.", kills: "→ Kills Amnesia" },
              { label: "L4 · Approval", name: "AI proposes. You approve. Nothing moves without you.", desc: "Every proposed action sits here before anything happens. Review the reasoning. See the evidence. Approve or reject.", kills: "→ Kills Babysitting" },
              { label: "L5 · Handoff", name: "IntegrateWise prepares. Your systems execute.", desc: "Approved actions become precise, vendor-neutral packages ready for your existing systems.", kills: "→ Kills Human API" },
              { label: "Integrations", name: "Connect once. Memory compounds.", desc: "Salesforce, Jira, Slack, Notion, GitHub, custom APIs. The memory grows from every interaction.", kills: "→ Kills Context Loss" }
            ].map((item, idx) => (
              <div key={idx} className="bg-forest-deep p-8 hover:bg-forest-deep/80 transition-colors border-t border-white/5">
                <p className="text-xs font-mono text-gold tracking-wider mb-4 uppercase">{item.label}</p>
                <p className="font-semibold text-paper mb-3 text-lg">{item.name}</p>
                <p className="text-sm text-paper/70 mb-4">{item.desc}</p>
                <p className="text-xs text-gold font-medium">{item.kills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Positioning</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            What IntegrateWise is not.
          </h2>
          <p className="text-lg text-muted mb-12 max-w-2xl">
            Most visitors will think Zapier, n8n, agent platform, chatbot, or CRM. This is the clarification.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { strong: "Not an automation platform", span: "We don't run workflows. We prepare them and hand them to yours." },
              { strong: "Not an agent framework", span: "Your agents run in your environment. Ours prepares what they receive." },
              { strong: "Not a BI tool", span: "We don't visualize data. We unify context so decisions have a foundation." },
              { strong: "Not a chatbot", span: "Your Twin knows your business, reasons over real data, and proposes real actions." },
              { strong: "Not a CRM, PM tool, or inbox", span: "It's the layer that connects all of them." }
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6 hover:border-gold transition-colors">
                <p className="font-semibold text-forest mb-2">{item.strong}</p>
                <p className="text-sm text-muted">{item.span}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 px-4 bg-forest-deep text-paper" id="how-it-works">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Execution becomes knowledge.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Every approved action feeds back into memory. Every outcome compounds what IntegrateWise knows about your business. The loop closes — and it never resets.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {["Connect", "Spine", "Twin", "Approve", "Handoff", "Memory"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border-2 border-gold/30 bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-semibold text-sm">{step.charAt(0)}</span>
                  </div>
                  <span className="text-xs text-paper/50 uppercase font-mono">{step}</span>
                </div>
                {idx < 5 && <span className="text-gold/40 text-xl hidden sm:inline">→</span>}
              </div>
            ))}
          </div>
          <p className="text-sm text-paper/40 italic">
            Execution happens in your environment. Outcomes feed back to IntegrateWise. The workspace gets smarter with every cycle.
          </p>
        </div>
      </section>

      {/* The Moat */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">The Moat</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            ChatGPT gives <span className="text-gold">intelligence.</span><br/>
            IntegrateWise gives <span className="text-gold">continuity.</span>
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            The model is rented. Your business context is not. IntegrateWise owns the layer that persists when everything else changes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { change: "Models change", stays: "Memory stays" },
              { change: "Tools change", stays: "Context stays" },
              { change: "Employees change", stays: "Knowledge stays" },
              { change: "AI is rented", stays: "Truth is owned" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-xs text-paper/50 font-mono uppercase mb-2">{item.change}</p>
                <p className="text-2xl font-bold text-gold">{item.stays}</p>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold text-paper leading-relaxed">
            That is the moat. That is the category.<br/>
            That is the <span className="text-gold">investor slide.</span> That is the homepage.
          </p>
        </div>
      </section>

      {/* Personas */}
      <section className="py-20 md:py-32 px-4 bg-background" id="company">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Built For</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Three cities. Three jobs. One story.
          </h2>
          <p className="text-lg text-muted mb-12 max-w-2xl">
            The frustration is identical whether you&apos;re running accounts in Mumbai, sprints in Bengaluru, or strategy in Delhi.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Bengaluru · Engineering", name: "Arjun", role: "Engineering Lead · 12-person team", story: "Manages sprints, incidents, and a roadmap across Jira, Slack, and GitHub. Tried AI for standup summaries and risk flagging. Worked for two weeks — then it started contradicting itself, ignoring the rules he'd set, and losing context between sessions.", demotion: '"I still use it. For writing release notes."' },
              { city: "Mumbai · Sales", name: "Priya", role: "Head of Sales · 40+ active accounts", story: "Runs a 12-person team, 40+ active accounts. Uses AI for proposals and follow-up sequences. Has to re-brief client context every single session. Spent 45 minutes last week re-explaining a client's history before getting a usable draft.", demotion: '"I just write it myself now. It\'s quicker."' },
              { city: "Delhi · Leadership", name: "Vikram", role: "Founder · Wears five hats", story: "Thought AI would be the senior hire he couldn't afford. Instead it's a junior who forgets everything overnight, needs constant supervision, and occasionally gets facts wrong. Done trusting it with anything that matters.", demotion: '"It\'s a toy. Not a tool."' }
            ].map((persona, idx) => (
              <div key={idx} className="border border-border rounded-xl p-6 bg-paper hover:bg-paper-warm transition-colors relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gold">
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">{persona.city}</p>
                <p className="text-xl font-bold text-forest mb-1">{persona.name}</p>
                <p className="text-sm text-muted mb-4">{persona.role}</p>
                <p className="text-sm text-ink leading-relaxed mb-4">{persona.story}</p>
                <p className="text-sm bg-paper-warm border border-border rounded p-3 text-muted italic">{persona.demotion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Why Now</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8 leading-tight">
            The moment for continuity infrastructure.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-12">
            Twenty years ago, enterprises solved application fragmentation with integration platforms. Today, AI is recreating the same problem. Organizations need continuity infrastructure the same way they needed API gateways for the application era.
          </p>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-8">
            <p className="text-forest font-semibold text-lg mb-4">
              API gateways solved fragmentation between systems.
            </p>
            <p className="text-lg font-bold text-gold">
              Continuity infrastructure solves fragmentation between AIs, systems, and conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Hooks */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">For Your Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Different entry points, same platform.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { role: "Sales Leader", hook: "Never start from scratch. Every deal has its context." },
              { role: "Operations Head", hook: "One system. One source of truth. Full audit trail." },
              { role: "AI Engineer", hook: "Build once. Deploy everywhere. Let your memory compound." },
              { role: "CFO/Procurement", hook: "Replaces ₹9L of friction. ROI in quarter one." },
              { role: "Compliance Officer", hook: "Governed AI decisions. Full audit trail. Regulatory ready." },
              { role: "CISO", hook: "On-premise option. VPC deployment. No data leaves your network." }
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-xl p-6 bg-paper hover:border-gold transition-colors">
                <p className="text-xs font-mono text-gold uppercase tracking-wider mb-2">{item.role}</p>
                <p className="text-lg italic text-ink">{item.hook}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The AI era needs continuity.
          </h2>
          <p className="text-lg text-paper/75 mb-10">
            Start with one team. Prove value in 30 days. Scale when it&apos;s proven.
          </p>
          <button className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold-light transition-colors inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-paper/50 mt-8">
            Pilot pricing: ₹25,000/month. Includes your first team, all features, 90-day engagement.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-paper transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">About</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-paper/50 mb-4 md:mb-0">
              © 2026 IntegrateWise. All rights reserved.
            </p>
            <p className="text-sm text-paper/50">
              integrateise.io
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
