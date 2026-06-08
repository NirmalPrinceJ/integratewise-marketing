import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Network, Lightbulb } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Organic Futurism with Fluid Abstraction
 * 
 * Key Design Elements:
 * - Deep indigo (#2d1b4e) primary with warm coral (#ff6b5b) and sage (#a8d5ba) accents
 * - Flowing organic shapes and curves suggesting continuous intelligence
 * - Smooth animations and transitions (300-400ms ease-out)
 * - Floating cards with soft shadows and subtle depth
 * - Gradient text and glowing highlights for premium feel
 * - Wave dividers between sections for organic flow
 */

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-gold flex items-center justify-center">
              <span className="text-white font-bold text-sm">IW</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">IW_Continuity_Bridge</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#architecture" className="text-sm font-medium hover:text-accent transition-colors">
              Architecture
            </a>
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504733993/B3RNNJUm56N9pHUdu8Mgo7/hero-continuity-flow-Ec493qMwneCJ92LxNNJ6WC.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              The Missing Layer in Enterprise AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span className="block font-semibold text-foreground mb-4">
                One Memory. One Context. One Truth.
              </span>
              Across Every AI, Every System, and Every Conversation.
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Organizations are adopting ChatGPT, Claude, Gemini, Copilot, internal agents, and dozens of AI-powered applications. But every interaction starts over.
            </p>

            <p className="text-lg font-semibold text-foreground mb-12 max-w-2xl mx-auto">
              IW_Continuity_Bridge creates the continuity layer that allows humans, AI systems, and enterprise applications to operate from the same organizational reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="cta-button">
                Request Demo
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="secondary-button">
                See Architecture
              </button>
            </div>

            <p className="text-lg font-bold text-accent">
              Stop rebuilding context. Start compounding intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              The AI Era Has Recreated an Old Problem
            </h2>

            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Twenty years ago, enterprises struggled with application fragmentation. Every system connected directly to every other system. The result was complexity, duplication, and chaos.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Integration platforms and API gateways solved that problem.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, AI is creating the same challenge again. Every AI maintains its own:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                {[
                  { icon: Brain, label: "Memory" },
                  { icon: Network, label: "Context" },
                  { icon: Lightbulb, label: "Understanding" },
                  { icon: Zap, label: "Conversation History" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent transition-colors">
                    <item.icon className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                    <span className="font-semibold text-lg">{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg font-semibold text-foreground bg-gradient-to-r from-coral/10 to-sage/10 p-6 rounded-xl border border-coral/20">
                Organizations now have intelligence everywhere, but continuity nowhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Gap Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504733993/B3RNNJUm56N9pHUdu8Mgo7/context-continuity-pattern-5JiveBuu63iqhMFeY8kcdm.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.03
          }}
        ></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              The Missing Infrastructure
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  Enterprises Have Integration Infrastructure.
                </h3>
                <p className="text-lg text-muted-foreground">
                  They've solved the problem of application fragmentation through integration platforms and API gateways.
                </p>
              </div>

              <div className="space-y-6 md:border-l-2 md:border-coral md:pl-8">
                <h3 className="text-3xl font-bold">
                  They Don't Have Continuity Infrastructure.
                </h3>
                <p className="text-lg text-muted-foreground">
                  Modern organizations need more than AI access. They need shared memory, context, reasoning, and organizational truth.
                </p>
              </div>
            </div>

            <div className="floating-card">
              <h3 className="text-2xl font-bold mb-8">What Organizations Need</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Shared memory",
                  "Shared context",
                  "Shared reasoning",
                  "Shared organizational truth"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral"></div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-8 pt-8 border-t border-border">
                A layer that exists independently of any model, application, or conversation.
              </p>
              <p className="text-lg font-bold text-coral mt-4">
                That layer is IW_Continuity_Bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing IW_Continuity_Bridge */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Introducing IW_Continuity_Bridge
            </h2>

            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              Continuity infrastructure for the AI era.
            </p>

            <div 
              className="relative rounded-2xl overflow-hidden mb-12 h-96"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504733993/B3RNNJUm56N9pHUdu8Mgo7/ai-systems-bridge-MA44EDT7t9jr9GhFgBX7Pw.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="floating-card">
                <h3 className="text-2xl font-bold mb-4 text-coral">Sits Between</h3>
                <ul className="space-y-3">
                  {["Humans", "AI Systems", "Enterprise Applications", "Organizational Knowledge"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="floating-card">
                <h3 className="text-2xl font-bold mb-4 text-sage">Creates</h3>
                <p className="text-lg leading-relaxed">
                  A persistent continuity layer that every participant can access.
                </p>
                <p className="text-lg font-semibold mt-6 text-coral">
                  Instead of every system operating from its own understanding, every system operates from the same organizational reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Continuity Means */}
      <section id="features" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What Continuity Means
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-fade-in">
            {[
              {
                title: "Memory Continuity",
                description: "Knowledge no longer lives inside individual conversations. Decisions, learnings, and organizational intelligence become persistent assets. Every interaction strengthens the same memory foundation.",
                icon: Brain,
                color: "coral"
              },
              {
                title: "Context Continuity",
                description: "Work no longer resets when tools change. Start in ChatGPT, continue in Claude, move to OpenWebUI, transition to an internal agent. The work continues because the context persists.",
                icon: Network,
                color: "sage"
              },
              {
                title: "Reasoning Continuity",
                description: "Organizations develop ways of thinking, operating, and making decisions. Those patterns survive model changes, vendor changes, employee turnover, and technology shifts.",
                icon: Lightbulb,
                color: "coral"
              },
              {
                title: "Execution Continuity",
                description: "Workflows, tasks, approvals, and actions maintain state across systems. The organization continues the work—not the tool.",
                icon: Zap,
                color: "sage"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="floating-card cursor-pointer"
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <feature.icon className={`w-8 h-8 mb-4 ${feature.color === 'coral' ? 'text-coral' : 'text-sage'}`} />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Continuity Spine */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-dark/5 to-coral/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              The Continuity Spine
            </h2>

            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              At the center of IW_Continuity_Bridge is the Continuity Spine. A persistent organizational layer responsible for:
            </p>

            <div className="floating-card">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Memory",
                  "Context",
                  "Knowledge",
                  "Capabilities",
                  "Policies",
                  "Governance"
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral to-gold mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="font-semibold text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 pt-8 border-t border-border text-muted-foreground">
                Every AI, application, and user interacts through the same continuity foundation. This transforms fragmented interactions into continuous organizational intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Organizational Twin */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              The Organizational Twin
            </h2>

            <div 
              className="relative rounded-2xl overflow-hidden mb-12 h-96"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504733993/B3RNNJUm56N9pHUdu8Mgo7/organizational-twin-abstract-GbGM3ZNRfRLyj43ucUAJYo.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            </div>

            <div className="floating-card">
              <p className="text-lg leading-relaxed mb-6">
                Continuity creates something larger. An Organizational Twin—a persistent digital representation of how the organization thinks, operates, decides, and executes.
              </p>

              <p className="text-lg font-semibold text-coral mb-6">
                The Twin continuously learns from:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Conversations",
                  "Meetings",
                  "Decisions",
                  "Documents",
                  "Systems",
                  "Operational activity"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sage"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg font-bold text-foreground">
                Creating a living organizational intelligence layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Is Just the Entry Point */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Voice Is Just the Entry Point
            </h2>

            <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
              Most voice systems focus on speech. Speech-to-text. Text-to-speech. Voice assistants. IW approaches voice differently.
            </p>

            <div className="floating-card">
              <h3 className="text-3xl font-bold mb-8 text-coral">Voice Continuity</h3>
              
              <p className="text-lg leading-relaxed mb-6">
                When someone speaks, the organization should remember.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Voice becomes an interface into shared memory, context, and organizational intelligence.
              </p>

              <p className="text-lg font-semibold text-foreground bg-gradient-to-r from-coral/10 to-sage/10 p-6 rounded-xl border border-coral/20">
                The conversation doesn't start. It continues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open by Design */}
      <section id="architecture" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Open by Design
            </h2>

            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              IW_Continuity_Bridge is model agnostic. Designed to work across:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "ChatGPT",
                "Claude",
                "Gemini",
                "Open-source models",
                "OpenWebUI",
                "Enterprise agents",
                "Future AI systems"
              ].map((model, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-coral"></div>
                  <span className="font-medium text-lg">{model}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground text-center font-semibold">
              Organizations remain independent of any single vendor while preserving continuity across all of them.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-dark/5 to-coral/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Why It Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="floating-card border-coral/30 bg-gradient-to-br from-coral/5 to-transparent">
                <h3 className="text-2xl font-bold mb-6 text-coral">Without Continuity</h3>
                <ul className="space-y-4">
                  {[
                    "More AI creates more fragmentation",
                    "More conversations create more knowledge loss",
                    "More tools create more silos"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-coral font-bold mt-1">✕</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="floating-card border-sage/30 bg-gradient-to-br from-sage/5 to-transparent">
                <h3 className="text-2xl font-bold mb-6 text-sage">With Continuity</h3>
                <ul className="space-y-4">
                  {[
                    "More AI creates more organizational intelligence",
                    "More conversations strengthen memory",
                    "More interactions improve understanding"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-sage font-bold mt-1">✓</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center mt-12 text-lg font-semibold text-foreground">
              Knowledge compounds instead of disappearing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Our Vision
            </h2>

            <p className="text-xl text-muted-foreground mb-12 text-center leading-relaxed">
              The future is not AI assistants. The future is continuous intelligence.
            </p>

            <div className="floating-card mb-12">
              <h3 className="text-2xl font-bold mb-8 text-coral">A world where:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Organizations never lose context",
                  "Knowledge compounds automatically",
                  "AI systems share organizational understanding",
                  "Work persists across tools and conversations",
                  "Intelligence becomes an organizational asset"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-coral to-gold flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              Just as API gateways became essential infrastructure for the application era,
            </p>

            <p className="text-2xl font-bold text-center text-coral">
              Continuity infrastructure will become essential infrastructure for the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              AI Creates Intelligence.
            </h2>

            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Continuity Makes It Persistent.
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              IW_Continuity_Bridge transforms disconnected conversations, systems, and AI models into a continuously learning organizational intelligence layer.
            </p>

            <div className="floating-card mb-12">
              <p className="text-3xl font-bold mb-4">
                <span className="block text-coral mb-2">One Memory.</span>
                <span className="block text-sage mb-2">One Context.</span>
                <span className="block text-gold">One Truth.</span>
              </p>
              <p className="text-2xl font-bold mt-8 pt-8 border-t border-border">
                Across Every AI. Every System. Every Conversation.
              </p>
            </div>

            <button className="cta-button">
              Get Started
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Architecture</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2026 IntegrateWise. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
