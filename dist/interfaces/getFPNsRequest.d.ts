import { FPNStatus, FPNSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetFPNsRequest extends ReportingRequest {
    status?: FPNStatus[];
    sort_column?: FPNSortColumn;
    start_date?: Date;
    end_date?: Date;
}
