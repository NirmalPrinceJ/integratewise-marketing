/**
 * IntegrateWise Spine - Health Metric Types (Customer Success)
 * 
 * @module @integratewise/types/spine/health
 */

import type { BaseEntity, ISODateTime, ISODate } from './entities';

// =============================================================================
// HEALTH METRIC ENTITY
// =============================================================================

export type HealthMetricType = 
  | 'usage_score'
  | 'nps_score'
  | 'ticket_severity'
  | 'renewal_proximity'
  | 'engagement_score'
  | 'adoption_rate'
  | 'feature_utilization'
  | 'support_sentiment'
  | 'contract_value'
  | 'expansion_potential'
  | 'churn_risk'
  | 'custom';

export type MetricPeriod = 
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'quarterly'
  | 'yearly'
  | 'trailing_30d'
  | 'trailing_90d';

export interface HealthMetric extends BaseEntity {
  _type: 'health_metric';
  account_id: string;
  metric_type: HealthMetricType;
  value: number;
  raw_value?: number;
  unit?: string;
  weight: number;
  period: MetricPeriod;
  period_start?: ISODate;
  period_end?: ISODate;
  computed_at: ISODateTime;
  data_sources?: string[];
  trend?: 'improving' | 'stable' | 'declining';
  trend_percent?: number;
  thresholds?: {
    warning?: number;
    critical?: number;
    current_state?: 'normal' | 'warning' | 'critical';
  };
  computation_notes?: string;
}

// =============================================================================
// COMPOSITE HEALTH SCORE
// =============================================================================

export interface HealthThresholds {
  green_min: number;
  amber_min: number;
}

export interface PlaybookAssignment {
  playbook_id: string;
  playbook_name: string;
  trigger_reason: string;
  assigned_at: ISODateTime;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export interface CompositeHealthScore {
  account_id: string;
  workspace_id: string;
  health_score: number;
  status: 'green' | 'amber' | 'red';
  risk_flags: string[];
  components: {
    usage: { value: number; weight: number; normalized: number };
    nps: { value: number; weight: number; normalized: number };
    ticket_severity: { value: number; weight: number; normalized: number };
    renewal_proximity: { value: number; weight: number; normalized: number };
    engagement: { value: number; weight: number; normalized: number };
  };
  thresholds: HealthThresholds;
  playbooks: PlaybookAssignment[];
  computed_at: ISODateTime;
  next_computation_at?: ISODateTime;
  trend_30d?: {
    direction: 'improving' | 'stable' | 'declining';
    change_points: number;
  };
}

// =============================================================================
// TYPE GUARD
// =============================================================================

export function isHealthMetric(entity: BaseEntity): entity is HealthMetric {
  return (entity as HealthMetric)._type === 'health_metric';
}
