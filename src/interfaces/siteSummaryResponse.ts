import { ReinstatementStatus } from './referenceTypes'

export interface SiteSummaryResponse {
  site_id: number,
  reference_number: string,
  swa_organisation_name: string,
  location_description: string,
  street_name: string,
  area_name: string,
  end_date: Date,
  reinstatement_status: ReinstatementStatus
}
