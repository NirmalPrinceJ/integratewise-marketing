import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Solutions() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.solutions}
      title="One connected workspace, projected around the work in front of you."
      intro="Every workbench reads from the same operational Spine. The context changes by role, responsibility, policy, and current work. The underlying truth does not."
      sections={[
        {
          title: "Different responsibilities. Shared continuity.",
          body: [
            "A sales leader, customer success manager, engineer, finance owner, and founder should not see the same screen. They should see the same operational reality through the lens required to act.",
            "IntegrateWise makes each workbench a governed projection rather than a new silo.",
          ],
        },
        {
          title: "Workbenches built on one Spine.",
          items: [
            {
              title: "Account Success",
              body: "Bring together account health, stakeholder history, commitments, cases, conversations, renewal context, product evidence, and recommended next actions.",
            },
            {
              title: "Sales Continuity",
              body: "Connect account history, opportunity movement, objections, proposals, follow-ups, customer commitments, and post-sale handoff.",
            },
            {
              title: "Founder Operations",
              body: "See material signals and dependencies across customers, revenue, product, delivery, operations, and organisational commitments.",
            },
            {
              title: "Engineering & Product",
              body: "Relate incidents, requests, roadmap choices, technical decisions, delivery state, ownership, and customer impact.",
            },
            {
              title: "AI Governance",
              body: "Review proposals, evidence, risk, scopes, side effects, approvals, execution, and reconciliation in one traceable loop.",
            },
            {
              title: "Finance, Marketing, Operations, Executive, and Personal",
              body: "Additional projections continue from the same canonical entities, relationships, evidence, and workspace policy boundary.",
            },
          ],
        },
        {
          title: "Normalize once. Render the work that matters now.",
          body: [
            "A workbench does not become a competing record system. It presents the relevant slice of operational truth, material signals, pending decisions, and governed next actions for the role using it.",
          ],
          statement: "One Spine. The right workbench for every role.",
        },
      ]}
      closingTitle="Start with one operational flow. Keep the context when the workspace expands."
      closingBody="Activate the first workbench around a real operational outcome. Additional roles continue from the same Spine and trust boundary."
    />
  );
}
