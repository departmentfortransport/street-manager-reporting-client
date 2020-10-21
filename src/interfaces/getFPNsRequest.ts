import { FPNStatus, FPNSortColumn, OffenceCode } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetFPNsRequest extends ReportingRequest {
  status?: FPNStatus[]
  sort_column?: FPNSortColumn
  start_date?: Date
  end_date?: Date
  status_changed_date_from?: Date
  status_changed_date_to?: Date
  offence_code?: OffenceCode[]
}
