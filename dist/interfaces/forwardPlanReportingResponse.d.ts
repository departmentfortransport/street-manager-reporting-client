import { ForwardPlanStatus } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface ForwardPlanReportingResponse extends ReportingResponse {
    rows: ForwardPlanSummaryResponse[];
}
export interface ForwardPlanSummaryResponse {
    work_reference_number: string;
    forward_plan_reference_number: string;
    promoter_organisation: string;
    highway_authority: string;
    location_description: string;
    street: string;
    area: string;
    proposed_start_date: Date;
    proposed_end_date: Date;
    forward_plan_status: ForwardPlanStatus;
    date_created: Date;
}
