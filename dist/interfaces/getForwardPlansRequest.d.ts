import { ForwardPlanStatus, ForwardPlanSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetForwardPlansRequest extends ReportingRequest {
    forward_plan_status?: ForwardPlanStatus[];
    sort_column?: ForwardPlanSortColumn;
    proposed_start_date?: Date;
    proposed_end_date?: Date;
}
