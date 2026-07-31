import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Pricing() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.pricing}
      title="Activate the workspace around the operational flow you need first."
      intro="IntegrateWise pricing is based on workspace scope, connected systems, hydration and sync requirements, governed capabilities, retention, and operational support — not a generic AI message count."
      sections={[
        {
          title: "Start with one continuity flow.",
          body: [
            "Connect the systems required to prove one complete operational outcome, such as account continuity, sales handoff, founder operations, engineering context, or governed AI action.",
          ],
          items: [
            {
              title: "Workspace scope",
              body: "The tenant boundary, entity scope, initial roles, policies, and first operational outcome define the activation footprint.",
            },
            {
              title: "Connected systems",
              body: "Provider count, scopes, adapter requirements, synchronization behavior, and write permissions shape the integration workload.",
            },
            {
              title: "Continuity requirements",
              body: "Hydration depth, sync frequency, retention, governed memory, approvals, capabilities, and support determine operating scope.",
            },
          ],
        },
        {
          title: "Expand without rebuilding the foundation.",
          body: [
            "Additional workbenches and capabilities continue from the same tenant Spine and trust boundary. Expansion adds projections and governed operations rather than duplicating canonical truth.",
          ],
        },
        {
          title: "Keep provider choice separate.",
          body: [
            "Model and provider consumption can remain distinct from the continuity layer. The customer retains ownership of operational truth and can change rented intelligence without rebuilding organisational memory.",
          ],
          statement: "Truth you own. AI you rent. Approval in between.",
        },
        {
          title: "Commercial claims remain uncommitted until approved.",
          body: [
            "The public site does not publish plan names, numeric prices, usage limits, connector allowances, discounts, or enterprise commitments until the commercial model is formally approved.",
          ],
        },
      ]}
      closingTitle="Scope the first workspace around a real operational outcome."
      closingBody="Activation begins with the systems, policies, entities, and governed capabilities required to complete one continuity flow end to end."
    />
  );
}
