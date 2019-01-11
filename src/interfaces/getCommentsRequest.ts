import { CommentSortColumn, SortDirection } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetCommentsRequest extends ReportingRequest {
  // Placeholder for additional comment filters
  sort_column?: CommentSortColumn
  sort_direction ?: SortDirection
}
