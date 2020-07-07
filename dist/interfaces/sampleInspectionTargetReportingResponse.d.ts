import { ReportingResponse } from './reportingResponse';
export interface SampleInspectionTargetReportingResponse extends ReportingResponse {
    rows: SampleInspectionTargetSummaryResponse[];
}
export interface SampleInspectionTargetSummaryResponse {
    sample_inspection_target_reference_number: string;
    promoter_name: string;
    promoter_org_ref: string;
    agreed_category_a: number;
    agreed_category_b: number;
    agreed_category_c: number;
    cap_category_a: number;
    cap_category_b: number;
    cap_category_c: number;
    actual_category_a: number;
    actual_category_b: number;
    actual_category_c: number;
}
