import { ReinstatementStatus } from './referenceTypes'
import { ReportingResponse } from './reportingResponse'

export interface ReinstatementReportingResponse extends ReportingResponse {
  rows: ReinstatementSummaryResponse[]
}

export interface ReinstatementSummaryResponse {
  site_id: number,
  work_reference_number: string,
  promoter_organisation: string,
  highway_authority: string,
  location_description: string,
  street_name: string,
  area_name: string,
  end_date: Date,
  reinstatement_status: ReinstatementStatus
}
