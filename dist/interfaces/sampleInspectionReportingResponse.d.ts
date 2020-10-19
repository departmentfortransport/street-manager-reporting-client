import { InspectionCategoryResponse } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface SampleInspectionReportingResponse extends ReportingResponse {
    rows: SampleInspectionSummaryResponse[];
}
export interface SampleInspectionSummaryResponse {
    sample_inspection_reference_number: string;
    work_reference_number: string;
    street: string;
    town?: string;
    area?: string;
    location_description: string;
    promoter_organisation: string;
    inspection_category: InspectionCategoryResponse;
    inspection_category_string: string;
    expiry_date: Date;
}
