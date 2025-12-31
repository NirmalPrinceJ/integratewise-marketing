import type { LeadPayload, AdapterResponse } from "./schemas"

/**
 * ContactAdapter Interface
 *
 * This interface defines the contract for submitting contact form leads.
 * The actual backend implementation will be done in IntegrateWise OS/main branch.
 *
 * Implementations should:
 * - Validate the payload structure
 * - Submit to the appropriate backend service
 * - Return success/failure with appropriate messaging
 */
export interface ContactAdapter {
  submitLead(payload: LeadPayload): Promise<AdapterResponse>
}

/**
 * V0PreviewAdapter
 *
 * Stub adapter for v0 preview environment.
 * Always returns success - no actual network calls.
 * Replace with real adapter when integrating with IntegrateWise OS backend.
 */
export const V0PreviewAdapter: ContactAdapter = {
  async submitLead(payload: LeadPayload): Promise<AdapterResponse> {
    // Simulate network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Log payload for development visibility
    console.log("[V0PreviewAdapter] Lead submitted:", payload)

    // Always return success in v0 preview
    return {
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
      lead_id: `v0-preview-${Date.now()}`,
    }
  },
}

/**
 * Placeholder for production adapter
 *
 * Backend implementation in IntegrateWise OS/main will:
 * - POST to /api/leads endpoint
 * - Store in Spine database
 * - Trigger welcome email workflow
 * - Route to appropriate sales queue
 */
// export const ProductionAdapter: ContactAdapter = { ... }
