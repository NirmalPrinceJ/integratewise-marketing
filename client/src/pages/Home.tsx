import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";

const problems = [
  {
    title: "Context fragments",
    body: "The same account, project, or decision appears differently across every tool. No surface carries the complete operational picture.",
  },
  {
    title: "Handoffs reset work",
    body: "Records move, but the reasoning, commitments, evidence, and unresolved questions behind them are usually left behind.",
  },
  {
    title: "AI starts incomplete",
    body: "Capable models still produce weak work when they lack governed, current, organisation-specific context.",
  },
];

const principles = [
  {
    number: "01",
    title: "Normalize once",
    body: "Operational data becomes durable entities, relationships, timelines, evidence, and governed memory.",
  },
  {
    number: "02",
    title: "Render anywhere",
    body: "Every workbench is a projection of the same Spine, shaped by role, responsibility, policy, and current work.",
  },
  {
    number: "03",
    title: "Reconcile every action",
    body: "Approved actions execute through governed capabilities, then return through verification before the workspace moves on.",
  },
];

const continuitySteps = [
  {
    number: "01",
    title: "Activate",
    body: "Create the workspace, establish identity, and authorize the systems required for the first operational flow.",
  },
  {
    number: "02",
    title: "Hydrate",
    body: "Load real records, conversations, documents, events, and relationships through governed connectors.",
  },
  {
    number: "03",
    title: "Normalize",
    body: "Resolve source data into canonical entities, external identities, timelines, relationships, and evidence in the Spine.",
  },
  {
    number: "04",
    title: "Project",
    body: "Render the right context into each role-specific workbench without creating another system of truth.",
  },
  {
    number: "05",
    title: "Propose",
    body: "Let the Twin reason through Entity360, identify material gaps, and prepare evidence-backed next steps.",
  },
  {
    number: "06",
    title: "Approve and act",
    body: "Evaluate risk, scopes, side effects, and policy before an approved capability executes.",
  },
  {
    number: "07",
    title: "Reconcile",
    body: "Re-ingest the result, verify what happened, resolve drift, and rehydrate the workspace from confirmed state.",
  },
];

const workbenches = [
  {
    title: "Account Success",
    body: "Customer health, stakeholders, commitments, cases, conversations, risks, and next actions in one account picture.",
  },
  {
    title: "Sales",
    body: "Account context from first signal through opportunity, proposal, negotiation, handoff, and expansion.",
  },
  {
    title: "Finance",
    body: "Commercial commitments, invoices, renewals, exceptions, approvals, and account context connected.",
  },
  {
    title: "Marketing",
    body: "Campaigns, accounts, intent, content, conversations, and pipeline without losing attribution context.",
  },
  {
    title: "Operations",
    body: "Cross-functional dependencies, unresolved handoffs, approvals, exceptions, and execution state.",
  },
  {
    title: "Engineering & Product",
    body: "Incidents, decisions, customer evidence, roadmap context, delivery work, and ownership kept together.",
  },
  {
    title: "Executive",
    body: "Material signals, decisions, risks, commitments, and cross-functional movement without another status deck.",
  },
  {
    title: "Personal",
    body: "Personal responsibilities and organisational context in one governed work view, not a second disconnected task system.",
  },
];

const outcomes = [
  {
    title: "Start with context",
    body: "Open an account, project, incident, or decision with the relevant operational history already assembled.",
  },
  {
    title: "Preserve handoffs",
    body: "Carry commitments, reasoning, evidence, ownership, and unresolved work when people or systems change.",
  },
  {
    title: "Reduce reconstruction",
    body: "Stop rebuilding the same brief across meetings, tools, and AI sessions.",
  },
  {
    title: "Govern AI action",
    body: "Use rented intelligence without giving it unbounded control over operational truth or external systems.",
  },
  {
    title: "Keep the loop closed",
    body: "Know whether an approved action completed, failed, drifted, or changed the underlying state.",
  },
];

export default function Home() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.home);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-75"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded bg-forest text-sm font-bold text-paper">
              IW
            </div>
            <span className="hidden font-semibold text-forest sm:inline">
              IntegrateWise
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <Link href="/platform" className="transition-colors hover:text-foreground">
              Platform
            </Link>
            <Link href="/solutions" className="transition-colors hover:text-foreground">
              Workbenches
            </Link>
            <a href="#continuity" className="transition-colors hover:text-foreground">
              Continuity
            </a>
            <Link href="/company" className="transition-colors hover:text-foreground">
              Company
            </Link>
          </div>

          <Link
            href="/activate"
            className="inline-flex items-center gap-2 rounded bg-forest px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-forest-deep"
          >
            Activate Workspace
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <main>
        <section className="px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-forest md:text-7xl">
                One Connected Workspace — powered by Continuity.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                Connect your ecosystem once. IntegrateWise keeps operational
                context continuous across tools, people, workflows, and AI — so
                work moves forward without being reconstructed every time.
              </p>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Link
                  href="/activate"
                  className="inline-flex items-center gap-2 rounded bg-forest px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-forest-deep"
                >
                  Activate Workspace
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-sm font-semibold text-forest">
                  Truth you own. AI you rent. Approval in between.
                </p>
              </div>
            </div>

            <div className="mt-20 border-t border-border pt-8">
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                IntegrateWise is a Continuity Platform that turns fragmented
                systems into one governed operational workspace. The Spine keeps
                truth durable. Workbenches project the right context. The Twin
                proposes. Approval stays in between.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-24 text-paper md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Your tools are connected. Your work is not.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-paper/75">
                <p>
                  Customer context lives in CRM. Decisions live in chat.
                  Commitments live in email. Delivery context lives in project
                  tools. Knowledge lives in documents and in people&apos;s heads.
                </p>
                <p>
                  Every handoff loses part of the story. Every new person
                  reconstructs it. Every AI session starts with another brief.
                </p>
                <p className="font-semibold text-paper">
                  The problem is no longer access to software. It is continuity
                  between systems, people, decisions, and action.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 md:grid-cols-3">
              {problems.map((problem) => (
                <article key={problem.title} className="bg-forest-deep p-8">
                  <h3 className="text-xl font-semibold text-paper">
                    {problem.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-paper/65">
                    {problem.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="continuity" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-4xl font-bold leading-tight text-forest md:text-5xl">
                  Connection moves data. Continuity keeps work moving.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                  Integrations can transfer records between applications.
                  Continuity preserves what those records mean, how they relate,
                  what changed, who decided, what is pending, and what should
                  happen next.
                </p>
                <p className="mt-6 text-lg font-semibold leading-relaxed text-forest">
                  IntegrateWise creates that continuity through one workspace,
                  one trust boundary, and one operational Spine.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-paper-warm">
                <div className="grid grid-cols-2 border-b border-border bg-forest text-sm font-semibold text-paper">
                  <div className="p-4">Connection</div>
                  <div className="border-l border-paper/15 p-4">Continuity</div>
                </div>
                {[
                  ["Moves data between tools", "Preserves operational meaning across tools"],
                  ["Synchronizes fields", "Connects entities, evidence, decisions, and timelines"],
                  ["Completes an API call", "Verifies the outcome and reconciles state"],
                  ["Gives AI access", "Gives AI governed context and bounded authority"],
                  ["Depends on each surface", "Keeps truth stable while surfaces adapt"],
                ].map(([connection, continuity]) => (
                  <div
                    key={connection}
                    className="grid grid-cols-2 border-b border-border text-sm last:border-b-0"
                  >
                    <div className="p-4 text-muted-foreground">{connection}</div>
                    <div className="border-l border-border p-4 font-medium text-forest">
                      {continuity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-paper-warm px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold leading-tight text-forest md:text-5xl">
                One workspace. One trust boundary. One continuous operational
                picture.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                A single Ecosystem Connection establishes the workspace trust
                boundary. The Integration Manager enables approved systems
                inside it. IntegrateWise loads, normalizes, and stores their
                operational context in the Spine, then projects that context
                into the right workbench for each role.
              </p>
              <p className="mt-5 text-lg font-semibold text-forest">
                The source systems remain in place. The operational picture
                stops being fragmented.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="rounded-xl border border-border bg-background p-7"
                >
                  <p className="font-mono text-xs tracking-widest text-gold">
                    {principle.number}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold text-forest">
                    {principle.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight text-forest md:text-5xl">
                From ecosystem connection to operational continuity.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                The runtime is a closed operational loop. It does not stop when
                an integration succeeds or when a model produces an answer.
              </p>
            </div>

            <div className="mt-14 divide-y divide-border border-y border-border">
              {continuitySteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 py-7 md:grid-cols-[80px_220px_1fr] md:items-start"
                >
                  <p className="font-mono text-xs tracking-widest text-gold">
                    {step.number}
                  </p>
                  <h3 className="text-xl font-semibold text-forest">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-xl font-semibold text-forest">
              Connect. Normalize. Work. Approve. Act. Reconcile. Continue.
            </p>
          </div>
        </section>

        <section className="bg-forest px-6 py-24 text-paper md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                One Spine. The right workbench for every role.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-paper/75">
                Different teams do not need different systems of truth. They
                need different projections of the same truth.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 md:grid-cols-2 lg:grid-cols-4">
              {workbenches.map((workbench) => (
                <article key={workbench.title} className="bg-forest-deep p-7">
                  <h3 className="text-lg font-semibold text-paper">
                    {workbench.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper/65">
                    {workbench.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-forest md:text-5xl">
                AI can reason. It does not own the truth.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                The Twin works from governed workspace context. It can orient,
                explain, compare, draft, and propose. It cannot directly rewrite
                canonical operational truth or bypass policy.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every consequential proposal carries context, evidence, intended
                effects, and required authority into the Approval Center.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-paper-warm p-8">
              <div className="space-y-4 text-sm font-semibold text-forest">
                {[
                  "Twin proposes",
                  "Governance evaluates",
                  "Human or policy approves",
                  "Capability executes",
                  "Spine reconciles",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-xs text-paper">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-lg font-semibold text-forest">
                  Truth you own. AI you rent. Approval in between.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-paper-warm px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight text-forest md:text-5xl">
                Memory is earned, not silently accumulated.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                AI output is transient by default. Information becomes governed
                memory only when evidence, provenance, policy, and operational
                relevance justify promotion.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                "Evidence before promotion",
                "Provenance for retained artefacts",
                "Policy-controlled retention",
                "Separation of conversation, knowledge, memory, and truth",
                "Reversible and auditable changes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-background p-5 text-sm font-medium leading-relaxed text-forest"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight text-forest md:text-5xl">
                What continuity changes.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {outcomes.map((outcome) => (
                <article key={outcome.title} className="border-t-2 border-gold pt-5">
                  <h3 className="text-lg font-semibold text-forest">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {outcome.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-24 text-paper md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Connect your ecosystem. Keep work continuous.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-paper/75">
              Activate one workspace, connect the systems required for your first
              operational flow, and let IntegrateWise form the continuity layer
              underneath the work you already do.
            </p>
            <Link
              href="/activate"
              className="mt-10 inline-flex items-center gap-2 rounded bg-paper px-7 py-3.5 font-semibold text-forest transition-opacity hover:opacity-90"
            >
              Activate Workspace
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-sm font-medium text-paper/60">
              One click to total continuity.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold text-forest">IntegrateWise</p>
            <p className="mt-2 text-sm text-muted-foreground">
              One Connected Workspace — powered by Continuity.
            </p>
            <p className="mt-1 text-sm font-medium text-forest">
              Truth you own. AI you rent. Approval in between.
            </p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>spineworkspace.com</p>
            <p className="mt-1">© 2026 IntegrateWise LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
