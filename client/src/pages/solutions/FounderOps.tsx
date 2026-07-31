import CanonicalPage from "../../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../../lib/seo";

export default function FounderOps() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.founderOps}
      title="One operational picture for the decisions that cross every team."
      intro="Founders and operators should not reconstruct the business from dashboards, chat threads, inboxes, and status meetings. IntegrateWise connects material signals, commitments, risks, ownership, and decisions into the Executive Workbench."
      sections={[
        {
          title: "See movement, not just metrics.",
          body: [
            "Understand what changed, why it matters, who owns it, and what decision is waiting. The Executive Workbench projects material context from the same operational Spine used by the teams doing the work.",
          ],
          items: [
            {
              title: "Material signals",
              body: "Surface cross-functional changes that affect customers, revenue, delivery, product, operations, or organisational commitments.",
            },
            {
              title: "Dependencies and ownership",
              body: "Connect blocked work, unresolved handoffs, responsible owners, due commitments, and affected entities.",
            },
            {
              title: "Decision-ready context",
              body: "Bring the supporting evidence, prior reasoning, options, trade-offs, and intended effects into one view.",
            },
          ],
        },
        {
          title: "Preserve decision continuity.",
          body: [
            "Keep evidence, trade-offs, approvals, and downstream commitments attached to the decision. When ownership changes or the decision is revisited, the operating story remains available.",
          ],
        },
        {
          title: "Reduce status reconstruction.",
          body: [
            "Use one continuously hydrated operational picture instead of another manually assembled update. Workbenches remain role-specific, but the entities, relationships, evidence, and timeline underneath remain shared.",
          ],
          statement: "One Spine underneath every executive view.",
        },
      ]}
      closingTitle="Make decisions from connected context, not another status deck."
      closingBody="Activate Founder Operations around the customer, revenue, delivery, product, and communication systems needed for the first cross-functional flow."
    />
  );
}
