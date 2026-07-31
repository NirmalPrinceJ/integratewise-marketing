import CanonicalPage from "../../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../../lib/seo";

export default function SalesContinuity() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.salesContinuity}
      title="The deal moves forward without losing the customer context behind it."
      intro="IntegrateWise connects account history, conversations, opportunity state, objections, proposals, decisions, and commitments into one continuous sales picture."
      sections={[
        {
          title: "Stop re-briefing the customer story.",
          body: [
            "Carry customer and deal context into every follow-up, proposal, review, and handoff. The Workbench assembles the relevant account history from the same operational Spine rather than asking each seller or model to reconstruct it.",
          ],
          items: [
            {
              title: "Account and opportunity context",
              body: "Connect stakeholders, prior conversations, opportunity movement, product interest, objections, and commitments.",
            },
            {
              title: "Context-aware preparation",
              body: "Draft follow-ups and proposals from current governed context instead of an isolated prompt.",
            },
            {
              title: "Material next steps",
              body: "Identify what changed, what remains unresolved, who owns the action, and what evidence supports it.",
            },
          ],
        },
        {
          title: "Preserve the reasoning behind the deal.",
          body: [
            "Keep why the deal changed, what was promised, what remains unresolved, and who owns the next move. Fields capture state; continuity preserves the operational meaning around that state.",
          ],
        },
        {
          title: "Close the post-sale context gap.",
          body: [
            "Transfer commercial context into onboarding and Account Success without reducing the handoff to fields and notes. The same entities, commitments, evidence, and timeline remain available through the next workbench projection.",
          ],
          statement: "One account story from first signal through expansion.",
        },
      ]}
      closingTitle="Keep the deal context when ownership changes."
      closingBody="Activate Sales Continuity around the CRM, communication, proposal, and delivery systems used in the first customer flow."
    />
  );
}
