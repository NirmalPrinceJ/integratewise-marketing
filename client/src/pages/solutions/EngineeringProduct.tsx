import CanonicalPage from "../../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../../lib/seo";

export default function EngineeringProduct() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.engineering}
      title="Connect customer evidence, product decisions, and delivery state."
      intro="Engineering and product context fragments across issue trackers, source control, incidents, conversations, documents, and customer systems. IntegrateWise relates that evidence without replacing the tools that create it."
      sections={[
        {
          title: "Keep the why attached.",
          body: [
            "Connect roadmap and technical decisions to customer evidence, incidents, constraints, prior reasoning, and the delivery work created from them.",
          ],
          items: [
            {
              title: "Customer evidence",
              body: "Relate requests, account impact, conversations, product usage, cases, and commercial context to product work.",
            },
            {
              title: "Decision history",
              body: "Preserve options, constraints, trade-offs, approvals, owners, and the rationale behind technical and product choices.",
            },
            {
              title: "Delivery continuity",
              body: "Connect the decision to issues, pull requests, releases, incidents, follow-up work, and affected entities.",
            },
          ],
        },
        {
          title: "Preserve incident continuity.",
          body: [
            "Carry timeline, impact, ownership, remediation, decisions, and follow-up across the full incident lifecycle. The source tools remain authoritative for their own work; the Spine keeps the operational context connected.",
          ],
        },
        {
          title: "Improve cross-functional handoff.",
          body: [
            "Give customer-facing and technical teams the context relevant to them without duplicating operational truth. Each workbench sees a different projection of the same entities, evidence, relationships, and timeline.",
          ],
          statement: "Customer context and delivery context remain part of the same operating story.",
        },
      ]}
      closingTitle="Keep decisions, incidents, and delivery connected."
      closingBody="Activate Engineering and Product Continuity around the issue, source-control, incident, customer, and communication systems used in the first flow."
    />
  );
}
