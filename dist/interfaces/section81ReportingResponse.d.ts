import { Section81SeverityResponse, Section81StatusResponse } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface Section81ReportingResponse extends ReportingResponse {
    rows: Section81SummaryResponse[];
}
export interface Section81SummaryResponse {
    issue_date: Date;
    work_reference_number: string;
    section_81_reference_number: string;
    promoter_organisation: string;
    highway_authority: string;
    location_description: string;
    street: string;
    town?: string;
    area?: string;
    section_81_severity: Section81SeverityResponse;
    section_81_severity_string: string;
    made_safe_by_ha: boolean;
    section_81_status: Section81StatusResponse;
    section_81_status_string: string;
    status_changed_date: Date;
}
