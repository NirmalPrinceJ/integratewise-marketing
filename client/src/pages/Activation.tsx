import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { updateMetaTags, SITE_METADATA } from "../lib/seo";

const activationSteps = [
  {
    number: "01",
    title: "Establish identity",
    body: "Create or join the workspace through the approved identity flow.",
  },
  {
    number: "02",
    title: "Define the workspace",
    body: "Confirm organisation, role, operational scope, and the first continuity objective.",
  },
  {
    number: "03",
    title: "Connect real systems",
    body: "Authorize the providers required for the first operational flow.",
  },
  {
    number: "04",
    title: "Configure the Spine",
    body: "Confirm entity scope, policies, write permissions, approvals, and retention.",
  },
  {
    number: "05",
    title: "Hydrate the workbench",
    body: "Load and normalize real records, then open the first role-specific workbench.",
  },
  {
    number: "06",
    title: "Govern the first proposal",
    body: "Review a context-backed Twin proposal through the Approval Center before consequential action.",
  },
];

export default function Activation() {
  useEffect(() => {
    updateMetaTags(SITE_METADATA.activation);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3 text-forest">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-forest text-sm font-bold text-paper">
              IW
            </div>
            <span className="font-semibold">IntegrateWise</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to workspace overview
          </Link>
        </div>
      </header>

      <main>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-forest md:text-7xl">
                Activate your connected workspace.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                Start with one workspace and the systems required for your first
                continuity flow. IntegrateWise establishes the trust boundary,
                connects approved providers, hydrates operational context, and
                forms the initial Spine.
              </p>
              <a
                href="mailto:connect@integratewise.ai?subject=Activate%20Workspace%20on%20spineworkspace.com"
                className="mt-10 inline-flex items-center gap-2 rounded bg-forest px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-forest-deep"
              >
                Activate Workspace
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-5 text-sm font-medium text-forest">
                Truth you own. AI you rent. Approval in between.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-paper-warm px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-forest md:text-5xl">
              What workspace activation establishes.
            </h2>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {activationSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 py-7 md:grid-cols-[80px_260px_1fr]"
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
          </div>
        </section>

        <section className="bg-forest px-6 py-20 text-paper md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Start with one operational flow. Keep the continuity when the
              workspace expands.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
              The first activation can begin with Account Success, Sales,
              Founder Operations, Engineering, or governed AI action. Additional
              workbenches continue from the same tenant Spine and trust boundary.
            </p>
            <a
              href="mailto:connect@integratewise.ai?subject=Activate%20Workspace%20on%20spineworkspace.com"
              className="mt-9 inline-flex items-center gap-2 rounded bg-paper px-7 py-3.5 font-semibold text-forest transition-opacity hover:opacity-90"
            >
              Activate Workspace
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>spineworkspace.com</p>
          <p>© 2026 IntegrateWise LLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
