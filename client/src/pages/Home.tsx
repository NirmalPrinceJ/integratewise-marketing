import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";

export default function Home() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.home);
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* ─── NAVIGATION ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <div className="w-8 h-8 rounded bg-forest flex items-center justify-center">
              <span className="text-paper font-bold text-sm">IW</span>
            </div>
            <span className="font-semibold text-forest hidden sm:inline">IntegrateWise</span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <Link href="/platform" className="hover:text-foreground transition-colors">Platform</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/company" className="hover:text-foreground transition-colors">Company</Link>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="/twin"
              className="px-3 py-2 rounded border border-forest text-forest font-medium text-sm hover:bg-forest hover:text-paper transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <span className="text-xs">🧠</span> Twin
            </a>
            <a
              href="mailto:hello@integratewise.ai"
              className="px-4 py-2 rounded bg-forest text-paper font-medium text-sm hover:bg-forest-deep transition-colors"
            >
              Apply for Pilot
            </a>
          </div>
        </div>
      </nav>

      {/* ─── SECTION 1 · HERO ───────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Tag line */}
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-8">
            Digital Memory · Twin · Governance · Handoff
          </p>

          {/* Opening story */}
          <div className="mb-10 pl-6 border-l-2 border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              He adopted AI six months ago. He told his team about it.<br />
              He genuinely believed it would change how he works.<br />
              <br />
              <em>Today he uses it to write emails.</em>
            </p>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-8 leading-tight max-w-3xl">
            This is what you wanted.<br />
            How you <span className="text-gold">wanted</span> it to work.
          </h1>

          {/* Sub */}
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            IntegrateWise connects your tools, builds a memory of your business, and hands off approved decisions to your execution environment. Brief it once. It remembers. It finishes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-14">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-8 py-3 rounded bg-forest text-paper font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-2"
            >
              Apply for Pilot
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solutions"
              className="px-8 py-3 rounded font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-paper transition-colors"
            >
              Explore Solutions
            </a>
          </div>

          {/* Stats */}
          <div className="pt-8 border-t border-border">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-forest mb-1">80%</p>
                <p className="text-sm text-muted-foreground">of AI adopters quietly demoted AI to low-stakes tasks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest mb-1">15+</p>
                <p className="text-sm text-muted-foreground">tools the average team uses with zero shared context</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-forest mb-1">0</p>
                <p className="text-sm text-muted-foreground">sessions should start from a blank slate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 · WHAT HUMANS ACTUALLY NEED FROM AI ─────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">The Reality</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            AI was supposed to be the new hire who never sleeps.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Instead it became the intern who forgets everything overnight, needs constant supervision, occasionally lies with confidence, and still makes you do the actual work.
            <br /><br />
            That is not intelligence. That is extra work.
          </p>

          {/* Five needs */}
          <div className="space-y-6 mb-12">
            {[
              { num: "01", title: "Remembers what you told it", sub: "So you stop repeating yourself in every meeting" },
              { num: "02", title: "Connects what you already use", sub: "So you stop being the copy-paste layer between your own tools" },
              { num: "03", title: "Shows its work before acting", sub: "So you can trust it with decisions that matter" },
              { num: "04", title: "Gets smarter as you use it", sub: "So knowledge stays when people leave" },
              { num: "05", title: "Never acts without your say", sub: "So you stay in control, always" },
            ].map((item) => (
              <div key={item.num} className="flex gap-6 items-start border-b border-paper/10 pb-6 last:border-0 last:pb-0">
                <span className="text-xs font-mono text-gold shrink-0 mt-1">{item.num}</span>
                <div>
                  <p className="font-semibold text-paper mb-1">{item.title}</p>
                  <p className="text-sm text-paper/60">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-paper/75 leading-relaxed">
            That is not a chatbot. That is not automation.<br />
            That is <span className="text-gold font-semibold">continuity.</span>
          </p>
        </div>
      </section>

      {/* ─── SECTION 3 · FOUR FRUSTRATIONS ─────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background" id="problem">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Why AI Fails Them</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Four failures. One root cause. One fix.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Every person who demoted AI hit the same four walls. IntegrateWise was built specifically to remove each one.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Amnesia",
                quote: '"I told it once. It forgot. I had to repeat myself — again."',
                desc: "No persistent memory. Every session starts blank. The brief you gave, the rules you set, the client context you explained — gone. IntegrateWise maintains persistent memory across every session.",
              },
              {
                name: "Babysitting",
                quote: '"I still have to check everything it does."',
                desc: "No governed execution. He became the quality control layer. IntegrateWise's Approval Center means nothing moves without your explicit review — and you always know what ran.",
              },
              {
                name: "Hallucination",
                quote: '"It gave me a confident, completely wrong answer."',
                desc: "No grounded context. It made things up rather than saying it didn't know. IntegrateWise's Twin reasons over your actual data, not guesswork.",
              },
              {
                name: "Human API",
                quote: '"I\'m copy-pasting between tabs more than before I had AI."',
                desc: "No connected workspace. He became the integration layer between AI and his own tools. IntegrateWise connects everything into one surface — so you stop being the middleware.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6 hover:border-gold transition-colors">
                <p className="font-semibold text-forest mb-3">{item.name}</p>
                <p className="italic text-foreground mb-4 text-sm">{item.quote}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 · SOLUTIONS ──────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border" id="solutions">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Continuity by outcome.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            IntegrateWise solves one cross-functional problem: context loss. Here is how it shows up in your work.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Account Success",
                hook: "Know everything about every customer without opening five tools.",
                items: ["Renewal risk", "Customer memory", "Account timelines", "Twin recommendations"],
              },
              {
                name: "Sales Continuity",
                hook: "Never re-brief AI on a customer again.",
                items: ["Deal memory", "Proposal generation", "Context-aware follow-ups", "Customer history"],
              },
              {
                name: "Founder & Business Operations",
                hook: "One place to understand what is happening.",
                items: ["Cross-team visibility", "Organisational memory", "Decision continuity", "Executive Twin"],
              },
              {
                name: "Engineering & Product",
                hook: "Keep decisions, incidents, and roadmap context connected.",
                items: ["Sprint memory", "Incident context", "Engineering Twin", "Build continuity"],
              },
              {
                name: "AI Governance",
                hook: "AI proposes. Humans approve.",
                items: ["Approval Center", "Audit trail", "Evidence", "Handoff"],
              },
            ].map((solution, idx) => (
              <div
                key={idx}
                className="bg-paper border border-border rounded-xl p-6 hover:border-gold transition-colors relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gold"
              >
                <p className="font-semibold text-forest mb-3 text-lg">{solution.name}</p>
                <p className="text-sm text-foreground mb-4">{solution.hook}</p>
                <ul className="space-y-2">
                  {solution.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 · PLATFORM ───────────────────────────────────────── */}
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
              {
                label: "L1 · Workbench",
                name: "Everything you need to know. One place to act.",
                desc: "Everything you work across — accounts, pipeline, sprints, tasks, documents — unified from all your tools into one surface. No tab-switching. No reconciling. No copy-pasting. Just the full picture, ready to act on.",
                kills: "→ Kills Human API",
              },
              {
                label: "L2 · Twin",
                name: "An AI that knows your business as well as you do.",
                desc: "Your Twin is briefed once and stays briefed. It reasons over your actual data, surfaces what matters, proposes what to do next — with the evidence to back it up. You review. You decide. It learns. It doesn't forget by morning.",
                kills: "→ Kills Amnesia",
              },
              {
                label: "L3 · Memory",
                name: "Every instruction. Every decision. Every outcome. Remembered.",
                desc: "IntegrateWise remembers what your team knows — the brief you gave, the rule you set, the decision you made, the outcome that came back. Every approved action compounds the memory. Search it. Build on it. Stop starting over.",
                kills: "→ Kills Amnesia",
              },
              {
                label: "L4 · Approval Center",
                name: "AI proposes. You approve. Nothing moves without you.",
                desc: "Every proposed action sits here before anything happens. Review the reasoning. See the evidence. Approve or reject. Complete audit trail. Nothing automatic. You are always in control — and you always know what actually ran.",
                kills: "→ Kills Babysitting",
              },
              {
                label: "Handoff",
                name: "IntegrateWise prepares. Your systems execute.",
                desc: "Approved actions become precise, vendor-neutral packages ready for your existing systems. IntegrateWise doesn't execute on your behalf. It prepares execution perfectly — then hands off to whatever you already run.",
                kills: "→ Kills Human API",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-forest-deep p-8 hover:bg-forest-deep/80 transition-colors border-t border-white/5">
                <p className="text-xs font-mono text-gold tracking-wider mb-4 uppercase">{item.label}</p>
                <p className="font-semibold text-paper mb-3 text-lg">{item.name}</p>
                <p className="text-sm text-paper/70 mb-4 leading-relaxed">{item.desc}</p>
                <p className="text-xs text-gold font-medium">{item.kills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 · WHAT INTEGRATEWISE IS NOT ─────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Positioning</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            What IntegrateWise is not.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Most visitors will think Zapier, n8n, agent platform, chatbot, or CRM. This is the clarification.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { strong: "Not an automation platform", span: "We don't run workflows. We prepare them and hand them to yours." },
              { strong: "Not an agent framework", span: "Your agents run in your environment. Ours prepares what they receive." },
              { strong: "Not a BI tool", span: "We don't visualize data. We unify context so decisions have a foundation." },
              { strong: "Not a chatbot", span: "Your Twin knows your business, reasons over real data, and proposes real actions." },
              { strong: "Not a CRM, PM tool, or inbox", span: "It's the layer that connects all of them." },
            ].map((item, idx) => (
              <div key={idx} className="bg-paper-warm border border-border rounded-xl p-6 hover:border-gold transition-colors">
                <p className="font-semibold text-forest mb-2">{item.strong}</p>
                <p className="text-sm text-muted-foreground">{item.span}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 · HOW IT WORKS ───────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest-deep text-paper" id="how-it-works">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Execution becomes knowledge.
          </h2>
          <p className="text-lg text-paper/75 leading-relaxed mb-12">
            Every approved action feeds back into memory. Every outcome compounds what IntegrateWise knows about your business. The loop closes — and it never resets.
          </p>

          {/* Flow steps */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
            {["Connect", "Spine", "Twin", "Approve", "Handoff", "Memory"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
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

      {/* ─── SECTION 8 · THE MOAT ───────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">The Moat</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            ChatGPT gives <span className="text-gold">intelligence.</span><br />
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
              { change: "AI is rented", stays: "Truth is owned" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
                <p className="text-xs text-paper/50 font-mono uppercase mb-2">{item.change}</p>
                <p className="text-2xl font-bold text-gold">{item.stays}</p>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold text-paper leading-relaxed">
            That is the moat. That is the category.
          </p>
        </div>
      </section>

      {/* ─── SECTION 9 · BUILT FOR ──────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-background" id="company">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-2">Built For</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 leading-tight">
            Three cities. Three jobs. One story.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            The frustration is identical whether you&apos;re running accounts in Mumbai, sprints in Bengaluru, or strategy in Delhi.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                location: "Bengaluru · Engineering",
                name: "Arjun",
                role: "Engineering Lead · 12-person team",
                story:
                  "Manages sprints, incidents, and a roadmap across Jira, Slack, and GitHub. Tried AI for standup summaries and risk flagging. Worked for two weeks — then it started contradicting itself, ignoring the rules he'd set, and losing context between sessions.",
                quote: '"I still use it. For writing release notes."',
              },
              {
                location: "Mumbai · Sales",
                name: "Priya",
                role: "Head of Sales · 40+ active accounts",
                story:
                  "Runs a 12-person team, 40+ active accounts. Uses AI for proposals and follow-up sequences. Has to re-brief client context every single session. Spent 45 minutes last week re-explaining a client's history before getting a usable draft. Faster to write it herself.",
                quote: '"I just write it myself now. It\'s quicker."',
              },
              {
                location: "Delhi · Leadership",
                name: "Vikram",
                role: "Founder · Wears five hats",
                story:
                  "Thought AI would be the senior hire he couldn't afford. Instead it's a junior who forgets everything overnight, needs constant supervision, and occasionally gets facts wrong. Done trusting it with anything that matters.",
                quote: '"It\'s a toy. Not a tool."',
              },
            ].map((persona, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl p-6 bg-paper hover:bg-paper-warm transition-colors relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:rounded-t-xl before:bg-gold"
              >
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">{persona.location}</p>
                <p className="text-xl font-bold text-forest mb-1">{persona.name}</p>
                <p className="text-sm text-muted-foreground mb-4">{persona.role}</p>
                <p className="text-sm text-foreground leading-relaxed mb-4">{persona.story}</p>
                <p className="text-sm bg-paper-warm border border-border rounded p-3 text-muted-foreground italic">{persona.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10 · PROOF ─────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-paper-warm border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-gold tracking-widest uppercase mb-6">Proof</p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12 leading-tight">
            Continuity in production.
          </h2>

          <blockquote className="bg-paper border border-border rounded-xl p-8 text-left">
            <p className="text-lg text-foreground italic leading-relaxed mb-6">
              "IntegrateWise reduced our pre-call preparation from 45 minutes to 4 minutes. The Twin knew the account history before I opened my laptop."
            </p>
            <footer className="text-sm text-muted-foreground font-medium">
              — Head of Sales, B2B SaaS, Mumbai
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─── SECTION 11 · CTA ───────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 bg-forest text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Brief it once. It remembers. It finishes.
          </h2>
          <p className="text-lg text-paper/75 mb-10 leading-relaxed">
            We are accepting 5 design partners for the IntegrateWise pilot program. One workspace. Every tool. Total control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@integratewise.ai"
              className="px-8 py-3 rounded bg-gold text-forest font-semibold text-base hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-2"
            >
              Apply for Pilot
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:invest@integratewise.ai"
              className="px-8 py-3 rounded border-2 border-paper/30 text-paper font-semibold text-base hover:border-paper/60 transition-colors inline-flex items-center justify-center gap-2"
            >
              Investor Enquiry
            </a>
          </div>

          <p className="text-sm text-paper/40 mt-6">
            Apply for Pilot → hello@integratewise.ai &nbsp;·&nbsp; Investor Enquiry → invest@integratewise.ai
          </p>
        </div>
      </section>

      {/* ─── SECTION 12 · FOOTER ────────────────────────────────────────── */}
      <footer className="bg-forest-deep text-paper border-t border-paper/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Brand + description */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-sm">IW</span>
              </div>
              <span className="font-bold text-paper text-lg">IntegrateWise</span>
            </div>
            <p className="text-sm text-paper/50 max-w-md leading-relaxed">
              Digital Memory + Reasoning + Governance + Handoff. Execution belongs to the customer. IntegrateWise prepares it.
            </p>
          </div>

          {/* Footer columns */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-paper">Solutions</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><Link href="/solutions/account-success" className="hover:text-paper transition-colors">Account Success</Link></li>
                <li><Link href="/solutions/sales-continuity" className="hover:text-paper transition-colors">Sales Continuity</Link></li>
                <li><Link href="/solutions/founder-ops" className="hover:text-paper transition-colors">Founder Ops</Link></li>
                <li><Link href="/solutions/engineering-product" className="hover:text-paper transition-colors">Engineering & Product</Link></li>
                <li><Link href="/solutions/ai-governance" className="hover:text-paper transition-colors">AI Governance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Company</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><a href="#company" className="hover:text-paper transition-colors">About</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Careers</a></li>
                <li><a href="mailto:invest@integratewise.ai" className="hover:text-paper transition-colors">Investors</a></li>
                <li><a href="mailto:hello@integratewise.ai" className="hover:text-paper transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-paper">Legal</h4>
              <ul className="space-y-2 text-sm text-paper/60">
                <li><a href="#" className="hover:text-paper transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-paper transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-paper/40">
              © 2026 IntegrateWise LLP. All rights reserved.
            </p>
            <p className="text-sm text-paper/40">
              integratewise.ai
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
