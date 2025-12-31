import { z } from "zod"
import { SpineId } from "../shared/ids"
import { BaseEntity } from "./common"

export const Note = BaseEntity.extend({
  title: z.string().min(1).max(280),
  body_md: z.string().max(200000),
  tags: z.array(z.string().min(1).max(64)).default([]),
  linked_entity_ids: z.array(SpineId).default([]),
}).strict()

export type Note = z.infer<typeof Note>

