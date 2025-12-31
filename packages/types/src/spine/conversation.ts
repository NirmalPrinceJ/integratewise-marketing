import { z } from "zod"
import { IsoDateTime, SpineId } from "../shared/ids"
import { BaseEntity, SourceTool } from "./common"

export const Conversation = BaseEntity.extend({
  source: SourceTool,
  message_count: z.number().int().nonnegative(),
  topic: z.string().max(280).optional(),
  participants: z.array(z.string().min(1).max(256)).default([]),
  created_at: IsoDateTime,
  linkage_score: z.number().min(0).max(1).optional(),
}).strict()

export type Conversation = z.infer<typeof Conversation>

