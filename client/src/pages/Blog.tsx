import CanonicalPage from "../components/marketing/CanonicalPage";
import { SITE_METADATA } from "../lib/seo";

export default function Blog() {
  return (
    <CanonicalPage
      metadata={SITE_METADATA.blog}
      title="Notes on continuity, connected work, governed AI, and operational memory."
      intro="Research, architecture, product thinking, and field lessons from building a continuity layer across organisational systems and AI."
      sections={[
        {
          title: "Editorial areas.",
          items: [
            {
              title: "Continuity Architecture",
              body: "Trust boundaries, operational Spines, deterministic normalization, entity resolution, projections, governance, and reconciliation.",
            },
            {
              title: "Connected Work",
              body: "How context fragments across systems, roles, decisions, handoffs, and daily operational surfaces.",
            },
            {
              title: "Governed AI",
              body: "Bounded reasoning, evidence-backed proposals, risk-based approval, capability separation, and auditable action.",
            },
            {
              title: "Operational Memory",
              body: "The separation of conversation, knowledge, evidence, memory, canonical truth, provenance, and retention.",
            },
            {
              title: "Integration and Capability Design",
              body: "One trust boundary, provider adapters, scopes, write permissions, capability routing, and verified write-back.",
            },
            {
              title: "Customer-Zero Field Notes",
              body: "What changes when the product is used to operate the company building it, with real systems and real continuity requirements.",
            },
          ],
        },
        {
          title: "The editorial standard.",
          body: [
            "Every article should clarify the IntegrateWise category, document an architectural decision, explain a real continuity problem, or report a field lesson. Generic AI trend summaries do not belong here unless they connect directly to the product thesis.",
          ],
          statement: "No hype. No invented metrics. No model worship. Evidence and operating consequences first.",
        },
        {
          title: "Core questions we publish against.",
          items: [
            {
              title: "What must remain stable?",
              body: "Identify the operational truth, trust boundary, policy, or provenance that cannot depend on a changing surface or model.",
            },
            {
              title: "What can adapt?",
              body: "Explain how workbench projections, AI providers, context assembly, and reasoning can evolve without corrupting the foundation.",
            },
            {
              title: "Where does authority live?",
              body: "Make clear who or what can approve, execute, write, promote memory, and reconcile state.",
            },
          ],
        },
      ]}
      closingTitle="Follow the work of building continuity into connected systems."
      closingBody="The public field notes will document architecture, product decisions, customer-zero evidence, and the operating lessons behind the IntegrateWise Continuity Platform."
    />
  );
}
