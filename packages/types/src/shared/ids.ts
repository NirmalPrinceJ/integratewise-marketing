import { z } from "zod"

/**
 * Spine is intentionally tool-agnostic.
 * IDs are opaque, stable strings within a workspace boundary.
 *
 * Reserved prefixes (recommended, not required):
 * - tsk_, note_, conv_, plan_, hm_
 */
export const SpineId = z.string().min(1).max(256)
export type SpineId = z.infer<typeof SpineId>

export const IsoDateTime = z.string().datetime()
export type IsoDateTime = z.infer<typeof IsoDateTime>

