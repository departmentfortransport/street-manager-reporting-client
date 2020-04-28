import { CommentSortColumn, CommentTopic } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetCommentsRequest extends ReportingRequest {
  sort_column?: CommentSortColumn
  date_created_from?: Date
  date_created_to?: Date
  topic?: CommentTopic[]
}
