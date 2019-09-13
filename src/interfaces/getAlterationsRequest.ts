import { AlterationSortColumn, AlterationStatus, WorkStatus, WorkCategory, AlterationType, LaneRentalAssessmentOutcome } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetAlterationsRequest extends ReportingRequest {
  alteration_status?: AlterationStatus[]
  alteration_type?: AlterationType[]
  work_status?: WorkStatus[]
  work_category?: WorkCategory[]
  lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome[]
  start_date_created?: Date
  end_date_created?: Date
  sort_column?: AlterationSortColumn
  is_traffic_sensitive?: boolean
  is_high_impact_traffic_management?: boolean
  is_duration_extension?: boolean
  is_early_start?: boolean
  is_deemed?: boolean
  lane_rental_charges_not_agreed?: boolean
  lane_rental_charges_potentially_apply?: boolean
}
