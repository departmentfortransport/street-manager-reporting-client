import { ReportingResponse } from './reportingResponse';
import { WorkstreamStatus } from './referenceTypes';
export interface WorkstreamReportingResponse extends ReportingResponse {
    rows: WorkstreamSummaryResponse[];
}
export interface WorkstreamSummaryResponse {
    prefix: string;
    name: string;
    description?: string;
    status: WorkstreamStatus;
    status_string: string;
    swa_code: string;
}
