import { ReinstatementStatus, ReinstatementSortColumn } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetReinstatementsRequest extends ReportingRequest {
  status?: ReinstatementStatus[]
  sort_column?: ReinstatementSortColumn
}
