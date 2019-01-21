import { PermitStatus, PermitSortColumn } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetPermitsRequest extends ReportingRequest {
  status?: PermitStatus[]
  sort_column?: PermitSortColumn
}
