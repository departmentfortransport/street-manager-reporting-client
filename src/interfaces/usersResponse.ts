import { ReportingResponse } from './reportingResponse'
import { Role, WorkstreamAccessLevel } from './referenceTypes'

export interface UsersReportingResponse extends ReportingResponse {
  rows: UsersSummaryResponse[]
}

export interface UsersSummaryResponse {
  first_name?: string
  last_name?: string
  email: string
  roles?: Role[]
  workstreams?: UserWorkstreamAccess[]
}

export interface UserWorkstreamAccess {
  workstream_prefix: string
  access_level: WorkstreamAccessLevel
}
