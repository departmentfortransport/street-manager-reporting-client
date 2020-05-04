import { CommentTopic } from './referenceTypes'
import { ReportingResponse } from './reportingResponse'

export interface CommentReportingResponse extends ReportingResponse {
  rows: CommentSummaryResponse[]
}

export interface CommentSummaryResponse {
  work_reference_number: string
  topic: CommentTopic
  author_email_address: string
  detail: string
  date_created: Date
  comment_reference_number: string
}
