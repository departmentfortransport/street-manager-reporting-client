import { CommentTopic } from './referenceTypes';
import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse';
export interface CommentReportingResponse extends ReportingResponse {
    rows: CommentSummaryResponse[];
}
export interface CommentSummaryResponse extends ReportingSummaryResponse {
    work_reference_number: string;
    topic: CommentTopic;
    author_email_address: string;
    detail: string;
    date_created: Date;
}
