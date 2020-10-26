import { ReportingResponse } from './reportingResponse';
import { InspectionCategoryResponse, InspectionOutcomeResponse, InspectionResponseTypeResponse, InspectionTypeResponse, InspectionStatusResponse } from './referenceTypes';
export interface InspectionReportingResponse extends ReportingResponse {
    rows: InspectionSummaryResponse[];
}
export interface InspectionSummaryResponse {
    inspection_date: Date;
    inspection_response_type: InspectionResponseTypeResponse;
    inspection_response_type_string: string;
    work_reference_number: string;
    location_description: string;
    street: string;
    town: string;
    area: string;
    inspection_reference_number?: string;
    inspection_type: InspectionTypeResponse;
    inspection_type_string: string;
    inspection_category?: InspectionCategoryResponse;
    inspection_category_string?: string;
    inspection_outcome?: InspectionOutcomeResponse;
    inspection_outcome_string?: string;
    reinspection_date_time?: Date;
    highway_authority: string;
    promoter_organisation: string;
    made_safe_by_ha?: boolean;
    date_created: Date;
    inspection_status: InspectionStatusResponse;
    inspection_status_string: string;
    date_modified: Date;
}
