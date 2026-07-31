import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { SEOMetadata, updateMetaTags } from "../../lib/seo";

export interface CanonicalPageItem {
  title: string;
  body: string;
}

export interface CanonicalPageSection {
  title: string;
  body?: string[];
  items?: CanonicalPageItem[];
  statement?: string;
}

interface CanonicalPageProps {
  metadata: SEOMetadata;
  title: string;
  intro: string;
  sections: CanonicalPageSection[];
  closingTitle: string;
  closingBody: string;
}

export default function CanonicalPage({
  metadata,
  title,
  intro,
  sections,
  closingTitle,
  closingBody,
}: CanonicalPageProps) {
  useEffect(() => {
    updateMetaTags(metadata);
  }, [metadata]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-forest">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-forest text-sm font-bold text-paper">
              IW
            </div>
            <span className="hidden font-semibold sm:inline">IntegrateWise</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <Link href="/platform" className="transition-colors hover:text-foreground">
              Platform
            </Link>
            <Link href="/solutions" className="transition-colors hover:text-foreground">
              Workbenches
            </Link>
            <Link href="/continuity" className="transition-colors hover:text-foreground">
              Continuity
            </Link>
            <Link href="/security" className="transition-colors hover:text-foreground">
              Security
            </Link>
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
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-forest md:text-7xl">
                {title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                {intro}
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
          </div>
        </section>

        {sections.map((section, index) => {
          const dark = index % 3 === 1;
          const warm = index % 3 === 2;

          return (
            <section
              key={section.title}
              className={[
                "border-t px-6 py-20 md:py-24",
                dark
                  ? "border-paper/10 bg-forest text-paper"
                  : warm
                    ? "border-border bg-paper-warm"
                    : "border-border bg-background",
              ].join(" ")}
            >
              <div className="mx-auto max-w-6xl">
                <div className="max-w-4xl">
                  <h2
                    className={[
                      "text-3xl font-bold leading-tight md:text-5xl",
                      dark ? "text-paper" : "text-forest",
                    ].join(" ")}
                  >
                    {section.title}
                  </h2>

                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={[
                        "mt-6 max-w-3xl text-lg leading-relaxed",
                        dark ? "text-paper/75" : "text-muted-foreground",
                      ].join(" ")}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.items && section.items.length > 0 && (
                  <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((item) => (
                      <article
                        key={item.title}
                        className={[
                          "rounded-xl border p-6",
                          dark
                            ? "border-paper/10 bg-forest-deep"
                            : "border-border bg-background",
                        ].join(" ")}
                      >
                        <h3
                          className={[
                            "text-xl font-semibold",
                            dark ? "text-paper" : "text-forest",
                          ].join(" ")}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={[
                            "mt-4 leading-relaxed",
                            dark ? "text-paper/65" : "text-muted-foreground",
                          ].join(" ")}
                        >
                          {item.body}
                        </p>
                      </article>
                    ))}
                  </div>
                )}

                {section.statement && (
                  <p
                    className={[
                      "mt-10 max-w-4xl text-xl font-semibold leading-relaxed",
                      dark ? "text-paper" : "text-forest",
                    ].join(" ")}
                  >
                    {section.statement}
                  </p>
                )}
              </div>
            </section>
          );
        })}

        <section className="bg-forest px-6 py-20 text-paper md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              {closingTitle}
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-paper/75">
              {closingBody}
            </p>
            <Link
              href="/activate"
              className="mt-10 inline-flex items-center gap-2 rounded bg-paper px-7 py-3.5 font-semibold text-forest transition-opacity hover:opacity-90"
            >
              Activate Workspace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold text-forest">IntegrateWise</p>
            <p className="mt-1">One Connected Workspace — powered by Continuity.</p>
            <p className="mt-1 font-medium text-forest">
              Truth you own. AI you rent. Approval in between.
            </p>
          </div>
          <div className="md:text-right">
            <p>spineworkspace.com</p>
            <p className="mt-1">© 2026 IntegrateWise LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
