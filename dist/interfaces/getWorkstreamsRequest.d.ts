import { WorkstreamStatus, WorkstreamSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetWorkstreamsRequest extends ReportingRequest {
    status?: WorkstreamStatus[];
    sort_column?: WorkstreamSortColumn;
}
