import { ReinstatementStatus, ReinstatementType } from './referenceTypes'
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
  reinstatement_type: ReinstatementType
  reinstatement_status: ReinstatementStatus
  end_date: Date
}
