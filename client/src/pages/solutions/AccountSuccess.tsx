import CanonicalPage from "../../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../../lib/seo";

export default function AccountSuccess() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.accountSuccess}
      title="Every customer, with the full story attached."
      intro="Account work breaks when health, conversations, commitments, cases, product signals, and commercial context live in separate systems. IntegrateWise forms one governed account picture and projects it into the Account Success Workbench."
      sections={[
        {
          title: "Orient quickly.",
          body: [
            "Open an account with the relevant stakeholders, history, unresolved commitments, recent changes, risks, and evidence already assembled.",
          ],
          items: [
            {
              title: "Account timeline",
              body: "Connect customer events, decisions, conversations, cases, milestones, and commercial movement in sequence.",
            },
            {
              title: "Entity360 context",
              body: "Relate the account to contacts, opportunities, products, support work, tasks, documents, and commitments.",
            },
            {
              title: "Material signals",
              body: "Surface what changed, why it matters, the supporting evidence, and the owner responsible for the next move.",
            },
          ],
        },
        {
          title: "Preserve customer memory.",
          body: [
            "Carry context across team changes, escalations, renewals, and handoffs without relying on private notes or individual recollection.",
          ],
          statement: "The customer record keeps the fields. The Spine keeps the operating story connected.",
        },
        {
          title: "Act with governance.",
          body: [
            "The Twin can identify material risk or prepare the next step from account context. Consequential proposals move through approval before any external action, and the result returns through reconciliation.",
          ],
          items: [
            {
              title: "Evidence-backed proposals",
              body: "Recommendations carry source context, affected entities, assumptions, intended effects, and confidence.",
            },
            {
              title: "Approval before execution",
              body: "Write scopes, side effects, policy, and risk determine whether an action is allowed, denied, or escalated.",
            },
            {
              title: "Verified outcome",
              body: "Execution results are re-ingested so account state advances from confirmed reality rather than assumption.",
            },
          ],
        },
      ]}
      closingTitle="Know the customer without reconstructing the customer."
      closingBody="Activate the Account Success Workbench around the systems that hold customer, communication, delivery, and commercial context today."
    />
  );
}
