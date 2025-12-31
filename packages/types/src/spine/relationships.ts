/**
 * IntegrateWise Spine - Relationship Types
 * 
 * @module @integratewise/types/spine/relationships
 */

import type { EntityId, ISODateTime } from './entities';

export type EntityType = 'task' | 'note' | 'conversation' | 'plan' | 'health_metric';

export type RelationshipType = 
  | 'parent_of'
  | 'child_of'
  | 'blocks'
  | 'blocked_by'
  | 'relates_to'
  | 'duplicates'
  | 'created_from'
  | 'references'
  | 'mentions'
  | 'derived_from';

export interface EntityRelationship {
  id: string;
  from_entity_id: EntityId;
  from_entity_type: EntityType;
  to_entity_id: EntityId;
  to_entity_type: EntityType;
  relationship_type: RelationshipType;
  confidence?: number;
  created_at: ISODateTime;
  created_by: string;
}

/**
 * Reserved field prefixes - do not use in custom_fields
 */
export const RESERVED_FIELD_PREFIXES = ['_iw_', '_sys_', '_ai_', '_audit_'] as const;
