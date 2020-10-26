import { ReportingResponse } from './reportingResponse'
import { RoleResponse, WorkstreamAccessLevelResponse } from './referenceTypes'

export interface UsersReportingResponse extends ReportingResponse {
  rows: UsersSummaryResponse[]
}

export interface UsersSummaryResponse {
  first_name?: string
  last_name?: string
  email: string
  roles?: RoleResponse[]
  roles_string?: string[]
  workstreams?: UserWorkstreamAccess[]
}

export interface UserWorkstreamAccess {
  workstream_prefix: string
  access_level: WorkstreamAccessLevelResponse
  access_level_string: string
}
