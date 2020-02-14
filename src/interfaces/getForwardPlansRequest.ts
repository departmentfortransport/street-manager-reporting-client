import { ForwardPlanStatus, ForwardPlanSortColumn } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetForwardPlansRequest extends ReportingRequest {
  forward_plan_status?: ForwardPlanStatus[]
  sort_column?: ForwardPlanSortColumn
  proposed_start_date?: Date
  proposed_end_date?: Date
  work_start_date_from?: Date
  work_start_date_to?: Date
  work_end_date_from?: Date
  work_end_date_to?: Date
}
