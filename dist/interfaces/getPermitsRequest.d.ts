import { PermitStatus, PermitSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetPermitsRequest extends ReportingRequest {
    status?: PermitStatus[];
    start_date?: Date;
    end_date?: Date;
    start_application_submission_date?: Date;
    end_application_submission_date?: Date;
    active_permit_only?: boolean;
    sort_column?: PermitSortColumn;
}
