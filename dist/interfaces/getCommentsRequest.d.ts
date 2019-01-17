import { CommentSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetCommentsRequest extends ReportingRequest {
    sort_column?: CommentSortColumn;
}
