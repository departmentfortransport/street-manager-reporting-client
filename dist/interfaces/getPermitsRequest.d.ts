import { PermitStatus, PermitSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetPermitsRequest extends ReportingRequest {
    status?: PermitStatus[];
    start_date?: Date;
    end_date?: Date;
    start_date_created?: Date;
    end_date_created?: Date;
    active_permit_only?: boolean;
    sort_column?: PermitSortColumn;
}
