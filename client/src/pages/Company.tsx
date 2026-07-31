import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Company() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.company}
      title="We are building the continuity layer for connected work."
      intro="Modern organisations do not lack software, data, or AI. They lack a durable operational layer that keeps context connected while people, systems, models, and responsibilities change."
      sections={[
        {
          title: "Make organisational context durable, governed, and usable.",
          body: [
            "IntegrateWise exists to make continuity an owned part of the organisation's infrastructure. Operational truth should remain with the organisation. AI should be replaceable. Authority should be explicit. Memory should be earned through evidence. Every action should return through verification.",
          ],
        },
        {
          title: "What we believe.",
          items: [
            {
              title: "Truth is owned, not rented",
              body: "Canonical operational context remains durable even when providers, models, interfaces, or teams change.",
            },
            {
              title: "AI is useful when context is governed",
              body: "Models reason over bounded workspace context rather than acting as an opaque source of organisational truth.",
            },
            {
              title: "Approval is part of the operating model",
              body: "Authority, risk, scopes, side effects, and policy are evaluated before consequential action.",
            },
            {
              title: "Memory requires provenance",
              body: "Information becomes governed memory through evidence and policy, not as a silent side effect of conversation.",
            },
            {
              title: "Surfaces can change",
              body: "Workbenches and AI providers can evolve without re-platforming the underlying Spine.",
            },
            {
              title: "Connection is incomplete until reconciled",
              body: "The loop closes only after the executed result is verified and returned to canonical state.",
            },
          ],
        },
        {
          title: "Why the architecture is separated.",
          body: [
            "IntegrateWise separates canonical truth, adaptive reasoning, governance, execution, and reconciliation rather than collapsing them into one opaque assistant. Each boundary protects a different operating responsibility.",
          ],
          statement: "One workspace. One trust boundary. One Integration Manager. Everything else is a projection.",
        },
      ]}
      closingTitle="Make continuity part of the infrastructure you own."
      closingBody="Activate one workspace and establish the operational Spine, governance model, and continuity loop underneath the work already happening across your organisation."
    />
  );
}
