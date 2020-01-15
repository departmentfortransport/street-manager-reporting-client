import { ReportingResponse } from './reportingResponse';
import { UserGroup } from './referenceTypes';
export interface OrganisationUsersReportingResponse extends ReportingResponse {
    rows: OrganisationUsersSummaryResponse[];
}
export interface OrganisationUsersSummaryResponse {
    first_name?: string;
    last_name?: string;
    email: string;
    roles?: UserGroup[];
}
