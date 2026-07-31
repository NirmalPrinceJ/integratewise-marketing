import CanonicalPage from "../../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../../lib/seo";

export default function AIGovernance() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.aiGovernance}
      title="Useful AI, bounded by operational authority."
      intro="IntegrateWise gives AI governed context and a controlled path to action. Models can reason and propose. They cannot silently rewrite canonical truth, hold provider credentials, or bypass approval policy."
      sections={[
        {
          title: "Ground every proposal.",
          body: [
            "Attach the operational context, evidence, assumptions, intended effect, affected entities, required scopes, and confidence behind a proposed action.",
          ],
          items: [
            {
              title: "Context from Entity360",
              body: "The Twin reasons over governed entities, relationships, timelines, evidence, and policy-relevant workspace context.",
            },
            {
              title: "Evidence and provenance",
              body: "Review the source material and operating state used to form the recommendation before authority is granted.",
            },
            {
              title: "Explicit intended effect",
              body: "The proposal states what should change, which systems or entities are affected, and the expected outcome.",
            },
          ],
        },
        {
          title: "Evaluate real risk.",
          body: [
            "Assess the actor, operation, policy, scopes, side effects, reversibility, and affected data rather than treating every AI action as equivalent.",
          ],
          statement: "Governance is risk-based, not merely action-type based.",
        },
        {
          title: "Close the execution loop.",
          body: [
            "Approved capabilities perform the provider operation. IntegrateWise then re-ingests the result, verifies what happened, resolves drift, and updates the workspace from confirmed state.",
          ],
          items: [
            {
              title: "AI proposes",
              body: "Reasoning remains non-authoritative until the proposal enters the governance path.",
            },
            {
              title: "Approval stays in between",
              body: "Human or policy authority determines whether consequential action can execute.",
            },
            {
              title: "The Spine reconciles",
              body: "Execution is not complete until the result returns through verification and governed write paths.",
            },
          ],
        },
      ]}
      closingTitle="Use rented intelligence without renting out operational authority."
      closingBody="Activate a governed AI flow with explicit context, scopes, approval requirements, capability boundaries, and reconciliation from the beginning."
    />
  );
}
