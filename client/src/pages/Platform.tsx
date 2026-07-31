import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Platform() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.platform}
      title="The continuity layer between your systems, people, and AI."
      intro="IntegrateWise provides one governed runtime for ecosystem connection, operational normalization, contextual workbenches, AI proposals, approval, execution, and reconciliation."
      sections={[
        {
          title: "Stable truth underneath. Adaptive work above.",
          body: [
            "The platform separates what must remain deterministic from what can adapt. The Spine protects canonical operational truth. Workbenches adapt that truth to each role. The Twin reasons over context. Governance controls authority. The capability layer executes approved operations. Reconciliation closes the loop.",
          ],
        },
        {
          title: "The platform, layer by layer.",
          items: [
            {
              title: "Ecosystem Connection",
              body: "One authenticated workspace boundary for approved organisational systems and capabilities.",
            },
            {
              title: "Integration Manager",
              body: "Configures providers, scopes, adapter type, sync policy, health, write permissions, and approval requirements.",
            },
            {
              title: "Spine Ingestion",
              body: "Loads source data, normalizes it deterministically, resolves external identities, and writes governed canonical state.",
            },
            {
              title: "Spine and Entity360",
              body: "Maintains entities, relationships, timelines, evidence, versions, and the context required to understand operational state.",
            },
            {
              title: "Projection Engine",
              body: "Renders role-specific workbenches from shared canonical context without creating competing systems of truth.",
            },
            {
              title: "Twin",
              body: "Uses Entity360 context to orient, analyze, draft, compare, and propose bounded next actions.",
            },
            {
              title: "Approval Center",
              body: "Evaluates actor, operation, policy, scopes, side effects, and risk before execution.",
            },
            {
              title: "Capability Fabric",
              body: "Routes approved operations to the correct provider capability without exposing credentials to the workbench or model.",
            },
            {
              title: "Reconciliation",
              body: "Re-ingests execution results, verifies outcomes, resolves drift, and rehydrates the workspace from confirmed state.",
            },
          ],
        },
        {
          title: "Architecture principles that do not change.",
          items: [
            {
              title: "One tenant, one Spine",
              body: "Every workspace has a clear trust and data boundary. Projections share canonical context without mixing tenant state.",
            },
            {
              title: "Frontends read from the Spine",
              body: "Workbench surfaces do not reconstruct truth independently from provider APIs.",
            },
            {
              title: "AI proposes, governed services write",
              body: "Models do not mutate canonical operational state directly.",
            },
            {
              title: "Credentials stay behind capability boundaries",
              body: "Presentation, reasoning, governance, and provider execution remain separated.",
            },
            {
              title: "Every write returns through reconciliation",
              body: "An API response is not treated as operational truth until the result is verified and re-ingested.",
            },
          ],
        },
      ]}
      closingTitle="Build on continuity, not another disconnected surface."
      closingBody="Start with one operational flow and expand through the same workspace, trust boundary, Spine, and governance model."
    />
  );
}
