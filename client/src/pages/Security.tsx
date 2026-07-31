import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Security() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.security}
      title="One workspace. One trust boundary. Explicit authority at every step."
      intro="IntegrateWise is designed to keep identity, tenant data, provider access, AI reasoning, approval, and execution inside clear architectural boundaries."
      sections={[
        {
          title: "Security follows the operating model.",
          body: [
            "The Workbench presents context. The Twin reasons and proposes. Governance evaluates authority. Capability services perform approved provider operations. The Spine is updated through governed write paths and reconciled results.",
          ],
          statement: "No model output becomes canonical truth merely because it sounds confident.",
        },
        {
          title: "Core security principles.",
          items: [
            {
              title: "Tenant isolation",
              body: "Workspace state, canonical entities, memory, queues, and storage remain inside the tenant boundary.",
            },
            {
              title: "Least-privilege connections",
              body: "Integrations use explicit scopes and workspace policies. Write access can be disabled, restricted, or approval-bound.",
            },
            {
              title: "Credential separation",
              body: "Workbench and AI surfaces do not hold provider credentials. Approved capability services perform provider operations.",
            },
            {
              title: "Governed write paths",
              body: "Canonical truth is updated through controlled services rather than directly from model output.",
            },
            {
              title: "Auditable action",
              body: "Proposals, approvals, execution attempts, outcomes, and reconciliation remain traceable.",
            },
            {
              title: "Policy-controlled retention",
              body: "Conversation, evidence, knowledge, and memory can follow distinct retention and promotion policies.",
            },
          ],
        },
        {
          title: "Claims remain evidence-bound.",
          body: [
            "The public site does not publish certifications, encryption guarantees, residency promises, uptime commitments, penetration-test claims, or regulatory coverage until those controls are formally verified and approved.",
          ],
        },
      ]}
      closingTitle="Use AI with context. Keep authority outside the model."
      closingBody="Activate a workspace with explicit scopes, approval requirements, retention rules, and governed capabilities from the beginning."
    />
  );
}
