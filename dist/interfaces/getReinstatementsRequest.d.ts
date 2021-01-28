import { ReinstatementStatus, ReinstatementSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetReinstatementsRequest extends ReportingRequest {
    status?: ReinstatementStatus[];
    sort_column?: ReinstatementSortColumn;
    latest_reinstatements_only?: boolean;
    registration_date_from?: Date;
    registration_date_to?: Date;
    end_date_from?: Date;
    end_date_to?: Date;
}
