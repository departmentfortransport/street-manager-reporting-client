import { ReportingResponse } from './reportingResponse'
import { UserRole, WorkstreamAccessLevel } from './referenceTypes'

export interface UsersReportingResponse extends ReportingResponse {
  rows: UsersSummaryResponse[]
}

export interface UsersSummaryResponse {
  first_name?: string
  last_name?: string
  email: string
  roles?: UserRole[]
  workstreams?: UserWorkstreamAccess[]
}

export interface UserWorkstreamAccess {
    workstream_prefix: string
    access_level: WorkstreamAccessLevel
}

