import { ReportingResponse } from './reportingResponse'
import { UserRole } from './referenceTypes'

export interface UsersReportingResponse extends ReportingResponse {
  rows: UsersSummaryResponse[]
}

export interface UsersSummaryResponse {
  first_name?: string
  last_name?: string
  email: string
  roles?: UserRole[]
}
