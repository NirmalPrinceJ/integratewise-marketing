import { z } from "zod"
import { IsoDateTime, SpineId } from "../shared/ids"
import { BaseEntity } from "./common"

export const HealthMetric = BaseEntity.extend({
  account_id: SpineId,
  metric_type: z.string().min(1).max(64),
  value: z.number(),
  weight: z.number().min(0).max(1).optional(),
  /**
   * Period descriptor (e.g. "2025-12", "2025-W52", "rolling_30d").
   */
  period: z.string().min(1).max(32),
  computed_at: IsoDateTime,
}).strict()

export type HealthMetric = z.infer<typeof HealthMetric>

