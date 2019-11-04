import { WorkstreamStatus } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetWorkstreamsRequest extends ReportingRequest {
    status?: WorkstreamStatus[];
}
