import { PermitStatus } from './referenceTypes'

export interface PermitSummaryResponse {
  reference_number: string
  location_description: string
  street: string
  area: string
  proposed_start_date: Date
  proposed_end_date: Date
  actual_start_date?: Date
  actual_end_date?: Date
  status: PermitStatus
}
