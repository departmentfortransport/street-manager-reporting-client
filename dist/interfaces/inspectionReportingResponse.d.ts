import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse';
import { InspectionResponseType, InspectionType, InspectionCategory, InspectionOutcome } from './referenceTypes';
export interface InspectionReportingResponse extends ReportingResponse {
    rows: InspectionSummaryResponse[];
}
export interface InspectionSummaryResponse extends ReportingSummaryResponse {
    inspection_date: Date;
    inspection_response_type: InspectionResponseType;
    inspection_reference_number?: string;
    inspection_type?: InspectionType;
    inspection_category?: InspectionCategory;
    inspection_outcome?: InspectionOutcome;
    reinspection_date_time?: Date;
}
