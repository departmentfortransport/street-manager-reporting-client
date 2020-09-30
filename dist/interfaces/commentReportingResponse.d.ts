import { CommentTopic } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface CommentReportingResponse extends ReportingResponse {
    rows: CommentSummaryResponse[];
}
export interface CommentSummaryResponse {
    work_reference_number: string;
    topic: CommentTopic;
    topic_string: string;
    author_email_address: string;
    author_organisation_reference: string;
    detail: string;
    date_created: Date;
    comment_reference_number: string;
    is_read: boolean;
    read_on?: Date;
    read_by?: string;
    is_internal: boolean;
}
