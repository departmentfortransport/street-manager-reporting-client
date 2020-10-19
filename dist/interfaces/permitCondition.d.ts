import { PermitConditionTypeResponse } from './referenceTypes';
export interface PermitCondition {
    condition: PermitConditionTypeResponse;
    condition_string: string;
    comment?: string;
}
