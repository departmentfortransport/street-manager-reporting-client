import { ReinstatementStatusResponse, ReinstatementTypeResponse } from './referenceTypes'
import { ReportingResponse } from './reportingResponse'

export interface ReinstatementReportingResponse extends ReportingResponse {
  rows: ReinstatementSummaryResponse[]
}

export interface ReinstatementSummaryResponse {
  site_number: number
  work_reference_number: string
  promoter_organisation: string
  highway_authority: string
  street_name: string
  town?: string
  area_name?: string
  location_description: string
  registration_date: Date
  reinstatement_date: Date
  reinstatement_type: ReinstatementTypeResponse
  reinstatement_type_string: string
  reinstatement_status: ReinstatementStatusResponse
  reinstatement_status_string: string
  end_date: Date
}
