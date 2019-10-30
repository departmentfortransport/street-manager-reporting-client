import { ReportingResponse } from './reportingResponse';
import { InspectionResponseType, InspectionType, InspectionCategory, InspectionOutcome } from './referenceTypes';
export interface InspectionReportingResponse extends ReportingResponse {
    rows: InspectionSummaryResponse[];
}
export interface InspectionSummaryResponse {
    inspection_date: Date;
    inspection_response_type: InspectionResponseType;
    work_reference_number: string;
    location_description: string;
    street: string;
    area: string;
    inspection_reference_number?: string;
    inspection_type: InspectionType;
    inspection_category: InspectionCategory;
    inspection_outcome?: InspectionOutcome;
    reinspection_date_time?: Date;
    highway_authority: string;
    promoter_organisation: string;
}
