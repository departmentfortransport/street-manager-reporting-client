import { ReinstatementStatus, ReinstatementType } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface ReinstatementReportingResponse extends ReportingResponse {
    rows: ReinstatementSummaryResponse[];
}
export interface ReinstatementSummaryResponse {
    registration_date: Date;
    reinstatement_date: Date;
    site_number: number;
    reinstatement_type: ReinstatementType;
    street_name: string;
    area_name: string;
    reinstatement_status: ReinstatementStatus;
    work_reference_number: string;
    promoter_organisation: string;
    highway_authority: string;
    location_description: string;
    end_date: Date;
}
