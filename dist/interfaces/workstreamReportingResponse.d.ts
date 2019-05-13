import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse';
import { WorkstreamStatus } from './referenceTypes';
export interface WorkstreamReportingResponse extends ReportingResponse {
    rows: WorkstreamSummaryResponse[];
}
export interface WorkstreamSummaryResponse extends ReportingSummaryResponse {
    workstream_id: number;
    organisation_id: number;
    prefix: string;
    name: string;
    description?: string;
    status: WorkstreamStatus;
    swa_code: string;
}
