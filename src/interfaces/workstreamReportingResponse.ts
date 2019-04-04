import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse'
import { WorkstreamStatus } from './referenceTypes'

export interface WorkstreamReportingResponse extends ReportingResponse {
  rows: WorkstreamSummaryResponse[]
}

export interface WorkstreamSummaryResponse extends ReportingSummaryResponse {
  workstream_id: number
  organisation_id: string
  prefix: string
  name: string
  description?: string
  status: WorkstreamStatus
}
