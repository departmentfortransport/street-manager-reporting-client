import { FPNStatus, FPNSortColumn, SortDirection } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetFPNsRequest extends ReportingRequest {
  status?: FPNStatus[]
  sort_column?: FPNSortColumn
  sort_direction ?: SortDirection
}
