import { z } from "zod"
import { IsoDateTime, SpineId } from "../shared/ids"
import { BaseEntity } from "./common"

export const TaskStatus = z.enum(["todo", "in_progress", "blocked", "done", "canceled"])
export type TaskStatus = z.infer<typeof TaskStatus>

export const TaskPriority = z.enum(["low", "medium", "high", "urgent"])
export type TaskPriority = z.infer<typeof TaskPriority>

export const Task = BaseEntity.extend({
  title: z.string().min(1).max(280),
  description: z.string().max(20000).optional(),
  status: TaskStatus,
  priority: TaskPriority.optional(),
  due_date: IsoDateTime.optional(),
  assignee_id: SpineId.optional(),
}).strict()

export type Task = z.infer<typeof Task>

