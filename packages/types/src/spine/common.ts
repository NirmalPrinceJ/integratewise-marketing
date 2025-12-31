import { z } from "zod"
import { IsoDateTime, SpineId } from "../shared/ids"

export const SourceTool = z.string().min(1).max(128)
export type SourceTool = z.infer<typeof SourceTool>

/**
 * `external_ref` represents the canonical link to the source system record.
 * It must be stable across ingestions and is the primary dedupe key by default.
 */
export const ExternalRef = z.object({
  tool: SourceTool,
  id: z.string().min(1).max(256),
  url: z.string().url().optional(),
}).strict()
export type ExternalRef = z.infer<typeof ExternalRef>

/**
 * Reserved fields: may be added by the platform at ingest time.
 * Connectors must not overwrite these without explicit policy allow-listing.
 */
export const Reserved = z
  .object({
    workspace_id: SpineId.optional(),
    created_by: SpineId.optional(),
    updated_by: SpineId.optional(),
    /**
     * Canonical request correlation id (e.g. webhook request_id).
     */
    request_id: z.string().min(1).max(128).optional(),
    /**
     * Policy evaluation identifier (e.g. Hub policy_id).
     */
    policy_id: z.string().min(1).max(128).optional(),
  })
  .strict()

export const BaseEntity = z
  .object({
    id: SpineId,
    source_tool: SourceTool,
    external_ref: ExternalRef.optional(),
    created_at: IsoDateTime,
    updated_at: IsoDateTime.optional(),
    _reserved: Reserved.optional(),
  })
  .strict()

