import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Documentation() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.documentation}
      title="Build and operate on the IntegrateWise continuity layer."
      intro="Use the documentation to understand workspace activation, ecosystem connections, Spine entities, workbench projections, Twin context, governance, capabilities, reconciliation, and operational policies."
      sections={[
        {
          title: "Workspace foundation.",
          items: [
            {
              title: "Activate a Workspace",
              body: "Establish identity, tenant boundary, organisation, role, first continuity objective, and initial policies.",
            },
            {
              title: "Connect an Ecosystem",
              body: "Authorize providers, configure scopes, select adapters, define sync behavior, and set write permissions.",
            },
            {
              title: "Configure the Spine",
              body: "Define canonical entity scope, external identities, relationships, evidence, retention, and governed write paths.",
            },
          ],
        },
        {
          title: "Context and workbench development.",
          items: [
            {
              title: "Understand Entity360",
              body: "Query the connected entity, relationship, timeline, evidence, and version context used across workbenches and the Twin.",
            },
            {
              title: "Build Workbench Projections",
              body: "Render role-specific context, signals, actions, and policy-aware surfaces from the same operational Spine.",
            },
            {
              title: "Use the Twin",
              body: "Assemble governed context for orientation, analysis, drafting, comparison, and evidence-backed proposals.",
            },
          ],
        },
        {
          title: "Governed action and continuity.",
          items: [
            {
              title: "Review and Approve Actions",
              body: "Evaluate actor, operation, policy, risk, scopes, side effects, evidence, and required authority.",
            },
            {
              title: "Configure Capabilities",
              body: "Route approved operations to providers while keeping credentials outside the workbench and model boundary.",
            },
            {
              title: "Reconcile Outcomes",
              body: "Re-ingest execution results, verify intended effects, resolve drift, and rehydrate the workspace from confirmed state.",
            },
            {
              title: "Manage Memory and Retention",
              body: "Separate conversation, knowledge, evidence, governed memory, provenance, retention, and canonical truth.",
            },
          ],
        },
        {
          title: "Documentation ownership.",
          body: [
            "The marketing property should explain the product and route technical readers to the dedicated Docs property when it is available. It should not duplicate implementation reference, secrets, provider credentials, internal schemas, or runtime configuration.",
          ],
        },
      ]}
      closingTitle="Start with the workspace boundary, then build outward."
      closingBody="Activate a real continuity flow first. The documentation should follow the same sequence: connect, normalize, project, propose, approve, execute, and reconcile."
    />
  );
}
