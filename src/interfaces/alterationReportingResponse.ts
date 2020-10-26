import { AlterationStatusResponse, AlterationTypeResponse, LaneRentalAssessmentOutcomeResponse, WorkCategoryResponse, WorkStatusResponse } from './referenceTypes'
import { ReportingResponse } from './reportingResponse'

export interface AlterationReportingResponse extends ReportingResponse {
  rows: AlterationSummaryResponse[]
}

export interface AlterationSummaryResponse {
  work_reference_number: string
  permit_reference_number: string
  alteration_reference_number: string
  street: string
  town: string
  area: string
  location_description: string
  highway_authority: string
  promoter: string
  work_status: WorkStatusResponse
  work_status_string: string
  proposed_start_date: Date
  proposed_end_date: Date
  proposed_start_time?: Date
  proposed_end_time?: Date
  work_category: WorkCategoryResponse
  work_category_string: string
  alteration_status: AlterationStatusResponse
  alteration_status_string: string
  alteration_type: AlterationTypeResponse
  alteration_type_string: string
  date_created: Date
  deadline_date: Date
  status_changed_date: Date
  lane_rental_assessment_outcome?: LaneRentalAssessmentOutcomeResponse
  lane_rental_assessment_outcome_string?: string
  lane_rental_charges_not_agreed: boolean
  lane_rental_charges_potentially_apply: boolean
}
