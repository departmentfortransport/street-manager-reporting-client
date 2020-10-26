import { ReportingResponse } from './reportingResponse'
import { FPNStatusResponse, OffenceCodeResponse } from './referenceTypes'

export interface FPNReportingResponse extends ReportingResponse {
  rows: FPNSummaryResponse[]
}

export interface FPNSummaryResponse {
  fpn_reference_number: string
  work_reference_number: string
  promoter: string
  highway_authority: string
  offence_code: OffenceCodeResponse
  offence_code_string: string
  street_name: string
  issue_date: Date
  status: FPNStatusResponse
  status_string: string
  status_changed_date: Date
}
