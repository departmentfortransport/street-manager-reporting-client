import { SortDirection } from './referenceTypes'

export interface ReportingRequest {
  before?: number
  after?: number
  query?: string
  sort_direction ?: SortDirection
}
