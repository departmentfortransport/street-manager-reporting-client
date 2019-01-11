import { PermitStatus, PermitSortColumn, SortDirection } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetPermitsRequest extends ReportingRequest {
    status?: PermitStatus[];
    sort_column?: PermitSortColumn;
    sort_direction?: SortDirection;
}
