export type AiInsightsArchetype =
  | "Leader"
  | "Diplomat"
  | "Communicator"
  | "Builder"
  | "Explorer"
  | "Nurturer"
  | "Thinker"
  | "Achiever"
  | "Humanitarian"

export const AI_INSIGHTS_ARCHETYPES: AiInsightsArchetype[] = [
  "Leader",
  "Diplomat",
  "Communicator",
  "Builder",
  "Explorer",
  "Nurturer",
  "Thinker",
  "Achiever",
  "Humanitarian",
]

export type AiInsightsProfile = {
  archetype: AiInsightsArchetype
  profilePattern: string
  highlights: string[]
}

function hashStringToInt(input: string) {
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function getAiInsightsProfile(name: string): AiInsightsProfile {
  const clean = name.trim().toLowerCase()
  const n = hashStringToInt(clean || "integratewise")
  const idx = n % AI_INSIGHTS_ARCHETYPES.length
  const archetype = AI_INSIGHTS_ARCHETYPES[idx]
  const profilePattern = `Profile Pattern ${idx + 1}: ${archetype}`

  const highlightsByArchetype: Record<AiInsightsArchetype, string[]> = {
    Leader: ["Direct decision-making", "High ownership", "Prefers clear outcomes"],
    Diplomat: ["Consensus builder", "Conflict-aware", "Values psychological safety"],
    Communicator: ["Clarity through conversation", "Fast alignment", "Prefers quick feedback loops"],
    Builder: ["Systems-first thinking", "Loves repeatable workflows", "Prefers stable operating rhythms"],
    Explorer: ["Curious and experimental", "Learns by trying", "Prefers flexible structure"],
    Nurturer: ["Supportive collaborator", "Strong empathy", "Motivated by team wellbeing"],
    Thinker: ["Deep analysis", "Asks 'why' early", "Prefers structured reasoning"],
    Achiever: ["Goal-driven execution", "Thrives on milestones", "Prefers measurable progress"],
    Humanitarian: ["Mission-led priorities", "Broad perspective", "Values impact and fairness"],
  }

  return {
    archetype,
    profilePattern,
    highlights: highlightsByArchetype[archetype],
  }
}

