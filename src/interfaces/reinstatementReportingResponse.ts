import { ReinstatementStatus } from './referenceTypes'
import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse'

export interface ReinstatementReportingResponse extends ReportingResponse {
  rows: ReinstatementSummaryResponse[]
}

export interface ReinstatementSummaryResponse extends ReportingSummaryResponse {
  site_id: number,
  work_reference_number: string,
  swa_organisation_name: string,
  location_description: string,
  street_name: string,
  area_name: string,
  end_date: Date,
  reinstatement_status: ReinstatementStatus
}
