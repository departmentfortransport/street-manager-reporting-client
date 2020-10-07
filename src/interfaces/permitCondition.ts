import { PermitConditionType } from './referenceTypes'

export interface PermitCondition {
  condition: PermitConditionType,
  condition_string: string,
  comment?: string
}
