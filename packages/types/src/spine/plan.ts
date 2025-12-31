import { z } from "zod"
import { IsoDateTime, SpineId } from "../shared/ids"
import { BaseEntity } from "./common"

export const PlanStatus = z.enum(["draft", "active", "paused", "completed", "canceled"])
export type PlanStatus = z.infer<typeof PlanStatus>

export const PlanMilestone = z
  .object({
    id: SpineId.optional(),
    title: z.string().min(1).max(280),
    due_date: IsoDateTime.optional(),
    status: z.enum(["todo", "in_progress", "done", "blocked"]).optional(),
  })
  .strict()

export const Plan = BaseEntity.extend({
  objective: z.string().min(1).max(2000),
  milestones: z.array(PlanMilestone).default([]),
  owner_id: SpineId.optional(),
  start_date: IsoDateTime.optional(),
  end_date: IsoDateTime.optional(),
  status: PlanStatus,
}).strict()

export type Plan = z.infer<typeof Plan>

