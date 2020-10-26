import { ReportingResponse } from './reportingResponse';
import { WorkstreamStatusResponse } from './referenceTypes';
export interface WorkstreamReportingResponse extends ReportingResponse {
    rows: WorkstreamSummaryResponse[];
}
export interface WorkstreamSummaryResponse {
    prefix: string;
    name: string;
    description?: string;
    status: WorkstreamStatusResponse;
    status_string: string;
    swa_code: string;
}
