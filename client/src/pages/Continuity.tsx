import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Continuity() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.continuity}
      title="Continuity is what remains connected after the integration succeeds."
      intro="A completed sync does not preserve meaning, reasoning, ownership, evidence, or the next step. IntegrateWise keeps those elements connected across systems, people, workflows, and AI."
      sections={[
        {
          title: "Connection is necessary. It is not enough.",
          body: [
            "Connections move data and expose capabilities. Continuity preserves the operational meaning around that movement: which entity changed, why it matters, who owns it, what evidence supports it, what remains unresolved, and what should happen next.",
          ],
          statement: "Continuity, not just connection.",
        },
        {
          title: "Four dimensions of continuity.",
          items: [
            {
              title: "Operational continuity",
              body: "Entities, relationships, timelines, ownership, commitments, and state remain coherent across systems.",
            },
            {
              title: "Knowledge continuity",
              body: "Documents, conversations, decisions, and evidence stay connected to the work they explain.",
            },
            {
              title: "People continuity",
              body: "Context survives role changes, handoffs, onboarding, escalation, and organisational movement.",
            },
            {
              title: "AI continuity",
              body: "Models receive governed workspace context instead of isolated prompts, while authority remains outside the model.",
            },
          ],
        },
        {
          title: "A closed loop, not a one-way pipeline.",
          body: [
            "IntegrateWise connects, loads, normalizes, projects, proposes, approves, executes, and reconciles. The workspace advances from verified state rather than assuming an API call or model response completed the work.",
          ],
          statement: "Connect. Normalize. Work. Approve. Act. Reconcile. Continue.",
        },
      ]}
      closingTitle="Connect your ecosystem. Keep the context when everything changes."
      closingBody="Activate one workspace around the operational flow you need first. The same Spine and trust boundary carry continuity as more systems, roles, and workbenches are added."
    />
  );
}
